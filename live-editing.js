// @ts-check

import "@cloudcannon/editable-regions/astro-react-renderer";

import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";
// @ts-ignore
import Button from "./src/components/elements/button/button.astro";
import Heading from "./src/components/typography/heading/heading.astro";
import SimpleText from "./src/components/typography/simple-text/simple-text.astro";
import ButtonGroup from "./src/components/wrappers/button-group/button-group.astro";
import Container from "./src/components/wrappers/container/container.astro";

registerAstroComponent("typography/heading", Heading);
registerAstroComponent("typography/simple-text", SimpleText);
registerAstroComponent("wrappers/container", Container);
registerAstroComponent("elements/button", Button);
registerAstroComponent("wrappers/button-group", ButtonGroup);

// @ts-check

// import "@cloudcannon/editable-regions/astro-react-renderer";

// // Dynamically import all components from the components directory
// // @ts-ignore - Vite's import.meta.glob is not recognized by TypeScript
// const componentModules = import.meta.glob("./src/components/**/*.astro", { eager: true });

// for (const [path, module] of Object.entries(componentModules)) {
//   const match = path.match(/\.\/src\/components\/(.+)\/([^\/]+)\.astro$/);

//   if (match) {
//     const componentName = match[2]; // e.g., 'heading'
//     const fullPath = match[1]; // e.g., 'typography/heading'

//     if (fullPath.endsWith(`/${componentName}`)) {
//       // @ts-ignore
//       registerAstroComponent(fullPath, module.default);
//       console.log(`Registered component: ${fullPath}`);
//     }
//   }
// }
