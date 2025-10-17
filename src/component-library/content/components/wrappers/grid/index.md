---
title: Grid
order: 4
overview: "A responsive grid layout component with automatic column distribution. Adjusts columns based on minimum item width and available space."
slots:
  - title: default
    description: The contents for the the Grid.
    fallback_for: items
    child_component:
      name: GridItem
      props:
        - "contentBlocks/slot"
examples:
  - title: Layouts
    slugs:
      - features
      - flow
      - tiles
---
