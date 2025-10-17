---
title: Carousel
overview: "An interactive slideshow component for scrollable content panels. Supports auto-play, auto-scroll, customizable slide widths, and touch/swipe gestures."
slots:
  - title: default
    description: The contents for the the Carousel.
    fallback_for: slides
    child_component:
      name: CarouselSlide
      props:
        - "contentBlocks/slot"
examples:
  - slugs:
      - auto-play
    size: lg
  - slugs:
      - auto-scroll
    size: lg
  - slugs:
      - width-percentage
    size: lg
---
