import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";
import "@cloudcannon/editable-regions/astro-react-renderer";

// Dynamically import all components from the components directory
const componentModules = import.meta.glob("./src/components/**/*.astro", { eager: true });

for (const [path, module] of Object.entries(componentModules)) {
  const match = path.match(/\.\/src\/components\/(.+)\/([^\/]+)\.astro$/);

  if (match) {
    const componentName = match[2]; // e.g., 'heading'
    const fullPath = match[1]; // e.g., 'typography/heading'

    if (fullPath.endsWith(`/${componentName}`)) {
      registerAstroComponent(fullPath, module.default);
    }
  }
}
