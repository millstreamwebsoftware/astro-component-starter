---
title: Accordion
overview: "An interactive component for expandable/collapsible content panels. Perfect for FAQs and documentation. Configure single or multiple open items."
slots:
  - title: default
    description: The contents for the the Accordion.
    fallback_for: items
    child_component:
      name: AccordionItem
      props:
        - "contentBlocks/slot"
        - "title"
examples:
  - title: Open First Item
    slugs:
      - open-first
  - title: Single Open
    slugs:
      - single-open
---
