
import "@cloudcannon/editable-regions/astro-react-renderer";

// Dynamically import all components from the components directory
// @ts-ignore - Vite's import.meta.glob is not recognized by TypeScript
const componentModules = import.meta.glob("./src/components/**/*.astro", { eager: true });

for (const [path, module] of Object.entries(componentModules)) {
  const match = path.match(/\.\/src\/components\/(.+)\/([^\/]+)\.astro$/);

  if (match) {
    const componentName = match[2]; // e.g., 'heading'
    const fullPath = match[1]; // e.g., 'typography/heading'

    if (fullPath.endsWith(`/${componentName}`)) {
      // @ts-ignore
      registerAstroComponent(fullPath, module.default);
      console.log(`Registered component: ${fullPath}`);
    }
  }
}
