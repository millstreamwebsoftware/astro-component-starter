---
title: Select
overview: "A dropdown form field for choosing one option from a list. Supports placeholders, default selections, and validation. For multiple selections, use [Choice Group](/component-library/components/forms/choice-group)."
slots:
  - title: default
    description: Select options.
    fallback_for: options
    child_component:
      name: SelectOption
      props:
        - "label/slot"
        - "value"
        - "selected"
        - "disabled"
examples:
  - slugs:
      - placeholder
    size: md
  - slugs:
      - required
    size: md
---
