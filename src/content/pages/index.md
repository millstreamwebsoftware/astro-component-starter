---
_schema: default
title: Your Site
pageBlocks:
  - _bookshop_name: wrappers/container
    label: ''
    contentBlocks:
      - _bookshop_name: primitives/counter
        number: 100
        prefix: $
        suffix: NZD
        horizontalAlignment: center
      - _bookshop_name: primitives/definition-list
        items:
          - title: A list item
            text: Here's some text
          - title: A list item2
            text: Here's some text again
          - title: A list item 3
            text: Here's some text Another one
        horizontalAlignment: start
      - _bookshop_name: primitives/divider
        padding: lg
      - _bookshop_name: primitives/embed
        source: https://community.cloudcannon.com/
        title: Community is everything
        aspectRatio: widescreen
      - _bookshop_name: primitives/heading
        text: >-
          A *heading* <u>and</u> <sub>some</sub> <sup>formatting</sup> <a
          href="https://community.cloudcannon.com/" title="Commmmmmmunity"
          target="_blank" rel="noopener">Hello</a>?
        type: h2
        size: 6xl
        align: start
        iconName: academic-cap
        iconPosition: after
      - _bookshop_name: primitives/icon
        name: chart-bar
        size: lg
        background: subtle
      - _bookshop_name: primitives/list
        items:
          - text: A list item
            icon: adjustments-horizontal
          - text: A list item
            icon: chat-bubble-oval-left
        direction: vertical
        horizontalAlignment: start
        size: xl
      - _bookshop_name: primitives/rich-text
        text: >-
          I **love** to make *trees*. You <a href="https://bobrosslipsum.net/"
          title="Bob Ross" target="_blank" rel="noopener">didn't</a> know you
          had so much power, did you? Let me tell you what I've got going on up
          here. Don't be afraid of this big brush.


          > If there's a secret to anything, it's practice. Create that little
          fuzzy look. Hit it, and get away from it. So many things you can
          create.


          * A lsit

          * Another list

          * Another list


          1. A numbered list

          2. Another list item

          3. Antoerh one
        align: start
      - _bookshop_name: primitives/simple-text
        text: >-
          **Just** let it *work* around <u>and</u> play. <s>That's</s>
          <sub>the</sub> fun part of this whole technique. We're
          <sup>ready</sup> to get <a href="https://bobrosslipsum.net/"
          title="Ross Bobb" target="_blank" rel="noopener">serious</a> with
          this. Enough of that.


          Don't just cover it all up -- leave these spots! We want this
          swirling, churning actions here. We don't want to overload it, just a
          little bit. Let your imagination wander around while you're doing
          these things.
        align: start
        size: md
      - _bookshop_name: primitives/smart-image
        alt:
        rounded: false
        aspectRatio:
        positionVertical: center
        positionHorizontal: center
        src:
      - _bookshop_name: primitives/spacer
        size: xl
      - _bookshop_name: primitives/testimonial
        text: >-
          **A** *testimonial* from a <s>happy</s> <a
          href="https://cloudcannon.com/documentation/articles/configure-your-card-previews/#template-strings-in-previews"
          title="A title" target="_blank"
          rel="noopener">customer<sub>TM</sub></a>
        authorName: Test Richardson
        authorDescription: A developer at CludCunnon
        horizontalAlignment: start
      - _bookshop_name: primitives/video
        videoType: youtube
        videoId:
        videoSrc:
        videoPoster:
        title:
      - _bookshop_name: wrappers/accordion
        items:
          - title: An item
            contentBlocks:
              - _bookshop_name: primitives/counter
                number: 100
                prefix: $
                suffix: USD
                horizontalAlignment: center
          - title: Another item
            contentBlocks:
              - _bookshop_name: primitives/list
                items:
                  - text: Hiiiii
                    icon: arrow-down-circle
                  - text: Hiiiii
                    icon: arrow-down-circle
                direction: vertical
                horizontalAlignment: start
                size: md
        openFirst: false
        singleOpen: true
      - _bookshop_name: wrappers/button-group
        buttonBlocks:
          - _bookshop_name: primitives/button
            text: A button
            link: >-
              https://cloudcannon.com/documentation/articles/configure-your-card-previews/#template-strings-in-previews
            iconName: calendar-date-range
            iconPosition: before
            hideText: false
            variant: primary
            size: lg
          - _bookshop_name: primitives/button
            text: Some text
            link:
            iconName: archive-box
            iconPosition: before
            hideText: false
            variant: tertiary
            size: lg
        direction: row
        align: center
      - _bookshop_name: wrappers/card
        label: A lonely card
        contentBlocks:
          - _bookshop_name: primitives/simple-text
            text: d,jfadjfhakdjsfhadf
            align: start
            size: md
        headerContentBlocks:
          - _bookshop_name: primitives/heading
            text: aksjdhaksjdhkajshdasd
            type: h2
            size:
            align: start
            iconName:
            iconPosition: before
        footerContentBlocks:
          - _bookshop_name: wrappers/button-group
            buttonBlocks:
              - _bookshop_name: primitives/button
                text:
                link:
                iconName:
                iconPosition: before
                hideText: false
                variant: ghost
                size: md
            direction: row
            align: start
        paddingHorizontal: sm
        paddingVertical: sm
        colorScheme: default
        backgroundColor:
        backgroundImage:
          source: ''
          alt: ''
          positionVertical: top
          positionHorizontal: center
        link: ''
        rounded: true
        border: true
      - _bookshop_name: wrappers/carousel
        label: ''
        slides:
          - contentBlocks:
              - _bookshop_name: primitives/simple-text
                text: A carousel
                align: start
                size: md
              - _bookshop_name: primitives/smart-image
                source: /src/assets/images/component-library/castle.jpg
                alt: A image
                rounded: false
                aspectRatio:
                positionVertical: center
                positionHorizontal: center
          - contentBlocks:
              - _bookshop_name: primitives/definition-list
                items:
                  - title: Another slide
                    text: HEHEHEHEHEE
                horizontalAlignment: start
        autoPlay: false
        autoScroll: false
        slideWidthPercent: 100%
        minSlideWidth: 0
      - _bookshop_name: wrappers/content-selector
        items:
          - title: First panel
            contentBlocks:
              - _bookshop_name: primitives/list
                items:
                  - text: Sup
                    icon: arrow-down-circle
                  - text: Sup
                    icon: archive-box
                direction: vertical
                horizontalAlignment: start
                size: md
          - title: 2nd panel
            contentBlocks:
              - _bookshop_name: primitives/list
                items:
                  - text: Sup
                    icon: arrow-down-circle
                  - text: Sup
                    icon: archive-box
                direction: vertical
                horizontalAlignment: start
                size: md
              - _bookshop_name: primitives/simple-text
                text: Som text
                align: start
                size: md
        navigationPosition: top
      - _bookshop_name: wrappers/grid
        minItemWidth: 280
        maxItemWidth: 320
        verticalAlignment: center
        horizontalAlignment: space-between
        equalWidth: true
        items:
          - contentBlocks:
              - _bookshop_name: primitives/heading
                text: A grid item
                type: h3
                size: md
                align: start
                iconName: arrow-down-circle
                iconPosition: after
              - _bookshop_name: primitives/simple-text
                text: Some ***text*** in the grid
                align: start
                size: md
          - contentBlocks:
              - _bookshop_name: primitives/heading
                text: A grid item
                type: h3
                size: md
                align: start
                iconName: arrow-down-circle
                iconPosition: after
              - _bookshop_name: primitives/simple-text
                text: Some ***text*** in the grid
                align: start
                size: md
          - contentBlocks:
              - _bookshop_name: primitives/heading
                text: A grid item
                type: h3
                size: md
                align: start
                iconName: arrow-down-circle
                iconPosition: after
              - _bookshop_name: primitives/simple-text
                text: Some ***text*** in the grid
                align: start
                size: md
          - contentBlocks:
              - _bookshop_name: primitives/heading
                text: A grid item
                type: h3
                size: md
                align: start
                iconName: arrow-down-circle
                iconPosition: after
              - _bookshop_name: primitives/simple-text
                text: Some ***text*** in the grid
                align: start
                size: md
          - contentBlocks:
              - _bookshop_name: primitives/heading
                text: A grid item
                type: h3
                size: md
                align: start
                iconName: arrow-down-circle
                iconPosition: after
              - _bookshop_name: primitives/simple-text
                text: Some ***text*** in the grid
                align: start
                size: md
      - _bookshop_name: wrappers/split
        firstColumnContentBlocks:
          - _bookshop_name: primitives/counter
            number: 100
            prefix:
            suffix: '%'
            horizontalAlignment: start
        secondColumnContentBlocks:
          - _bookshop_name: primitives/testimonial
            text: We always give 100%
            authorName: Tommy Test
            authorDescription: A humble developer
            horizontalAlignment: start
        distributionMode: three-Quarters-Quarter
        fixedWidth:
        verticalAlignment: top
        reverse: false
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: lg
    colorScheme: default
    backgroundImage:
      source: ''
      alt: ''
      positionVertical: top
      positionHorizontal: center
    rounded: false
---
