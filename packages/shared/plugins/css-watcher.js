import fs from "node:fs";
import path from "node:path";

/**
 * A Vite plugin that watches CSS files for components and triggers
 * a reload of the associated Astro component when they change.
 * This ensures that CSS imports in Astro components are properly reloaded.
 *
 * This plugin will scan all top-level folders in the components directory
 * and their immediate subdirectories to find component files and their associated CSS files.
 */
export function cssWatcher(options = {}) {
  // Plugin options with defaults
  const config = {
    verbose: false,
    ...options,
  };
  // Map to cache component paths to their CSS dependencies
  const cssToComponentMap = new Map();

  // Cache of component directories that have been scanned
  const scannedDirs = new Set();

  /**
   * Finds the index.astro file in the same directory as a CSS file
   * @param {string} cssFile - Path to the CSS file
   * @returns {string|null} - Path to the associated component file or null
   */
  function findComponentForCssFile(cssFile) {
    const dir = path.dirname(cssFile);
    const componentFile = path.join(dir, "index.astro");

    if (fs.existsSync(componentFile)) {
      return componentFile;
    }

    return null;
  }

  /**
   * Scans a component directory to map CSS files to their component
   * @param {string} dir - Component directory path
   */
  function scanComponentDir(dir) {
    if (scannedDirs.has(dir)) return;

    try {
      // Find all CSS files in this directory
      const files = fs.readdirSync(dir);
      const cssFiles = files.filter((file) => file.endsWith(".css"));
      const componentFile = path.join(dir, "index.astro");

      if (fs.existsSync(componentFile)) {
        cssFiles.forEach((cssFile) => {
          const fullCssPath = path.join(dir, cssFile);

          cssToComponentMap.set(fullCssPath, componentFile);
        });
      }

      scannedDirs.add(dir);
    } catch (err) {
      console.warn(`[CSS Watcher] Error scanning directory ${dir}:`, err);
    }
  }

  /**
   * Scans top-level folders in the components directory and their immediate subdirectories
   * @param {string} componentsDir - The main components directory path
   */
  function scanComponentFolders(componentsDir) {
    try {
      const topLevelEntries = fs.readdirSync(componentsDir, {
        withFileTypes: true,
      });

      for (const topLevelEntry of topLevelEntries) {
        if (topLevelEntry.isDirectory()) {
          const topLevelPath = path.join(componentsDir, topLevelEntry.name);
          const topLevelRelativePath = topLevelEntry.name;

          // Check if the top-level folder itself is a component
          if (fs.existsSync(path.join(topLevelPath, "index.astro"))) {
            if (config.verbose) {
              console.log(
                `[CSS Watcher] Found component in top-level folder: ${topLevelRelativePath}`
              );
            }
            scanComponentDir(topLevelPath);
          }

          // Get all component folders within this top-level folder
          const componentEntries = fs.readdirSync(topLevelPath, {
            withFileTypes: true,
          });

          for (const componentEntry of componentEntries) {
            if (componentEntry.isDirectory()) {
              const componentPath = path.join(topLevelPath, componentEntry.name);
              const componentRelativePath = `${topLevelRelativePath}/${componentEntry.name}`;

              if (config.verbose) {
                console.log(`[CSS Watcher] Checking component folder: ${componentRelativePath}`);
              }
              scanComponentDir(componentPath);
            }
          }
        }
      }
    } catch (err) {
      console.warn(`[CSS Watcher] Error scanning component folders: ${err}`);
    }
  }

  return {
    name: "astro-css-watcher",

    configureServer(server) {
      // Locate the components directory from the Astro root
      const componentsDir = path.resolve(server.config.root, "../../packages/components");

      console.log("[CSS Watcher] Starting initial scan of component directories...");

      // Initial scan of component directories
      try {
        // Scan all top-level folders and their component subdirectories
        scanComponentFolders(componentsDir);

        // Output stats about the scan
        console.log(
          `[CSS Watcher] Found ${cssToComponentMap.size} CSS files across ${scannedDirs.size} component directories`
        );

        if (config.verbose && cssToComponentMap.size > 0) {
          console.log("[CSS Watcher] Mapped CSS files:");
          for (const [cssFile, componentFile] of cssToComponentMap.entries()) {
            const relativeCssPath = cssFile.split("packages/components/")[1] || cssFile;
            const relativeComponentPath =
              componentFile.split("packages/components/")[1] || componentFile;

            console.log(`  ${relativeCssPath} → ${relativeComponentPath}`);
          }
        }
      } catch (err) {
        console.warn("[CSS Watcher] Error during initial scan:", err);
      }

      // Debug output
      console.log("[CSS Watcher] Initialized, now monitoring component CSS files for changes");
    },

    handleHotUpdate({ file, server }) {
      // Only handle CSS files
      if (!file.endsWith(".css")) return;

      let componentFile;

      // Check if we already know about this CSS file
      if (cssToComponentMap.has(file)) {
        componentFile = cssToComponentMap.get(file);
      } else {
        // Try to find the component file for this CSS
        componentFile = findComponentForCssFile(file);
        if (componentFile) {
          cssToComponentMap.set(file, componentFile);
        }
      }

      if (componentFile) {
        const relativeCssPath = file.split("packages/components/")[1] || path.basename(file);
        const componentName = path.basename(path.dirname(componentFile));

        console.log(`[CSS Watcher] CSS file changed: ${relativeCssPath}`);
        console.log(`[CSS Watcher] Updating component: ${componentName}`);

        // Touch the component file to trigger a reload
        const now = new Date();

        try {
          fs.utimesSync(componentFile, now, now);

          // Force HMR for this module
          const mod =
            server.moduleGraph.getModuleById(componentFile) ||
            Array.from(server.moduleGraph.getModulesByFile(componentFile) || []).pop();

          if (mod) {
            server.moduleGraph.invalidateModule(mod);
            return [mod];
          }
        } catch (err) {
          console.error("[CSS Watcher] Error updating component:", err);
        }
      }
    },
  };
}
