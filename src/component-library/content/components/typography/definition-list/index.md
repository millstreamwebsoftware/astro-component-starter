---
title: Definition List
overview: "A semantic list component for term/definition pairs. Perfect for glossaries, FAQs, and content requiring label/description pairings. Supports markdown formatting in definitions."
slots:
  - title: default
    description: The content inside the DefinitionList.
    fallback_for: items
    child_component:
      name: DefinitionListItem
      props:
        - "text/slot"
        - "title/slot(title)"
examples:
  - slugs:
      - alignment-start
      - alignment-center
      - alignment-end
    title: AlignX
    size: md
---
