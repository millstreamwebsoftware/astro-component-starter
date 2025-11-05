---
title: Primary Carousel
spacing: null
blocks:
  _component: wrappers/carousel
  slides:
    - _component: wrappers/carousel/carousel-slide
      contentBlocks:
        - _component: typography/heading
          text: Slide 1
          level: h2
          alignX: center
        - _component: typography/simple-text
          alignX: center
          text: This is the first slide of the carousel.
    - _component: wrappers/carousel/carousel-slide
      contentBlocks:
        - _component: typography/heading
          text: Slide 2
          level: h2
          alignX: center
        - _component: typography/simple-text
          text: This is the second slide of the carousel.
          alignX: center
    - _component: wrappers/carousel/carousel-slide
      contentBlocks:
        - _component: typography/heading
          text: Slide 3
          level: h2
          alignX: center
        - _component: typography/simple-text
          text: This is the third slide of the carousel.
          alignX: center
  label: ""
  autoPlay: false
  autoScroll: false
  slideWidthPercent: 100
  minSlideWidth: 0
---
