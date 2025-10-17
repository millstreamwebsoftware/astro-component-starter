---
title: List
order: 4
overview: "A flexible list component for ordered or unordered items. Supports vertical and horizontal layouts, custom styling, alignment, optional icons, and markdown formatting in items."
slots:
  - title: default
    description: The content inside the List.
    fallback_for: items
    child_component:
      name: ListItem
      props:
        - "icon"
        - "text/slot"
examples:
  - slugs:
      - direction-vertical
      - direction-horizontal
    title: Directions
  - slugs:
      - alignment-start-vertical
      - alignment-center-vertical
      - alignment-end-vertical
      - alignment-start-horizontal
      - alignment-center-horizontal
      - alignment-end-horizontal
    title: AlignX
  - slugs:
      - size-xs
      - size-sm
      - size-md
      - size-lg
      - size-xl
      - size-2xl
    title: Sizes
---
