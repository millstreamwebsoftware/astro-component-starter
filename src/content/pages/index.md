---
_schema: default
title: Your Site
pageBlocks:
  - _component: wrappers/container
    label: ""
    contentBlocks:
      - _component: typography/heading
        text: Welcome to your CloudCannon Starter Component site
        level: h1
        size: default
        alignX: center
        iconPosition: before
      - _component: wrappers/button-group
        buttonBlocks:
          - _component: elements/button
            text: View Components
            link: /component-library/
            iconName: ""
            iconPosition: before
            hideText: false
            variant: primary
            size: lg
        direction: row
        alignX: center
      - _component: wrappers/carousel
        label: ""
        slides:
          - _component: wrappers/carousel/carousel-slide
            contentBlocks:
              - _component: typography/heading
                text: "sdfsdf sdf "
                level: h2
                size: default
                alignX: start
                iconName:
                iconPosition: before
          - _component: wrappers/carousel/carousel-slide
            contentBlocks:
              - _component: typography/heading
                text: sadfsdaf
                level: h2
                size: default
                alignX: start
                iconName:
                iconPosition: before
        autoPlay: false
        autoScroll: false
        slideWidthPercent: 100
        minSlideWidth: 0
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: lg
    colorScheme: default
    backgroundColor: base
    backgroundImage:
      source: ""
      alt: ""
      positionVertical: top
      positionHorizontal: center
    rounded: false
---
