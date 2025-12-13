---
title: "Astro Component Library"
contentSections: []
---

# Astro Component Library

Welcome to your Astro component library: a modular foundation for building fast, accessible, and maintainable websites using web fundamentals.

This library provides **examples and documentation** for every component in your design system, helping you build consistent, scalable websites with less code and more confidence.

## What you'll find here

This library helps you:

- **Maintain consistency** — Keep designs uniform across pages and projects
- **Work faster** — Reuse tested components instead of building from scratch
- **Stay organized** — Single source of truth for all your UI components
- **Customize easily** — Explore, tweak, and extend components to fit your needs

## Component categories

Components are organized by purpose into three main categories:

### Building Blocks

Foundational UI components designed for reuse within larger structures. These are the atomic pieces you combine to build more complex interfaces.

- **Core Elements** — Basic content components like buttons, headings, text, images, icons, and lists
- **Forms** — Form controls including inputs, selects, textareas, file uploads, and form wrappers
- **Wrappers** — Layout containers like grids, splits, cards, accordions, and carousels

### Page Sections

Pre-built, full-width sections ready to assemble complete page layouts. These combine multiple building blocks into cohesive, reusable patterns.

- **Heroes** — Eye-catching header sections for landing pages
- **Features** — Sections for showcasing product features and benefits
- **CTAs** — Call-to-action sections with various layouts
- **Info Blocks** — FAQ sections and other informational content
- **People** — Team grids and testimonial sections
- **Builders** — Custom sections for flexible page construction

### Navigation

Components that facilitate movement throughout your site.

- **Main Navigation** — Primary site navigation menus
- **Mobile Navigation** — Mobile-friendly menu patterns
- **Side Navigation** — Sidebar navigation components
- **Footer** — Site footer components
- **Navigation Bar** — Additional navigation bars

## Technical approach

This section outlines the architectural decisions that power the component library.

### Components

All components in this library are built using Astro templating. They're as self-contained as possible, each `.astro` file has all the templating, styles and JavaScript the component needs.

### CSS architecture

This library uses modern, vanilla CSS built on PostCSS with CSS variables for theming and consistency.

**Style organization:**

- **Variables** (`src/styles/variables/`) — Design tokens for colors, spacing, typography, content widths, and more
- **Base styles** (`src/styles/base/`) — Reset styles, typography defaults, form styling, and HTML element foundations
- **Themes** (`src/styles/themes/`) — Color scheme definitions for default (light) and contrast (dark) themes
- **Component styles** — Scoped styles within each component file

All styling is themeable through CSS variables, making it easy to customize colors, spacing, and typography across your entire site.

### JavaScript philosophy

JavaScript is treated as **progressive enhancement** throughout the component library.

- **Most components** have zero JavaScript—they work perfectly without it
- **Accessibility features** — Some components use minimal JavaScript to manage ARIA attributes for better accessibility
- **Interactive components** — A few components (like carousels) require JavaScript for core functionality

When JavaScript is needed, it's written in **vanilla JavaScript** with no framework dependencies, keeping bundles small and performance fast.

## CloudCannon integration

Components are configured for use with [CloudCannon](https://cloudcannon.com/), enabling visual content editing without touching code. Editors can add components, edit content, and manage pages through a visual interface.

### Configuration files

Each component can include CloudCannon configuration files:

- **`*.cloudcannon.inputs.yml`** — Defines the [inputs](https://cloudcannon.com/documentation/articles/what-are-inputs/) shown in CloudCannon's editor. Configure prop types (text, select, switch, etc.), descriptions, and validation rules
- **`*.cloudcannon.structure-value.yml`** — Defines [structures](https://cloudcannon.com/documentation/articles/what-is-a-structure/) that control how components behave in the editor, including nested content and repeatable sections
- **`*.cloudcannon.snippets.yml`** — Defines [snippets](https://cloudcannon.com/documentation/articles/what-is-a-snippet/) editors can insert while editing MDX files

### Editable regions

[Editable Regions](https://cloudcannon.com/documentation/articles/what-are-editable-regions/) enable live preview editing in CloudCannon, allowing editors to add and edit components, modify text, and update assets directly on the page.

To enable editable regions in Page Sections, use `data-prop` attributes to map text props correctly. The same approach applies to images and arrays. See the Page Sections component source code for implementation examples.

## Next steps

- **New to the library?** Start with the [Getting Started guide](/component-library/getting-started/) to learn how to customize components and build pages
- **Ready to explore?** Browse components in the sidebar to see what's available
- **Want to customize?** Check component source files in `src/components/` to see how they're built and modify them to fit your needs
