---
layout: component-documentation
sectionKey: Components
eleventyNavigation:
  parent: Components
title: Breadcrumbs
description: The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.
whenToUse:
  Use the breadcrumbs component when you need to help users understand and move between the multiple levels of a website.
whenNotToUse:
  Do not use the breadcrumbs component on websites with a flat structure, or to show progress through a linear journey or transaction.


  If you’re using other navigational elements on the page, such as a sidebar, consider whether your users need the additional support of breadcrumbs.
accessibilty:
  "The breadcrumb links must have a text contrast ratio higher than 4.5:1 against the background colour to meet WCAG AA (this especially applies when using the inverse flag).


  Links in the component must:
  
  - accept focus

  - be focusable with a keyboard

  - be usable with a keyboard

  - indicate when they have focus

  - change in appearance when touched (in the touch-down state)

  - change in appearance when hovered

  - be usable with touch

  - be usable with voice commands

  - have visible text

  - have meaningful text"
howItWorks:
  Accepts an array of breadcrumb objects. Each crumb must have a title and a URL. Links are tracked, but in Universal Analytics, links to the homepage (any link with a url of `/`) will be tracked separately as `homeLinkClicked`.
variations:
  0:
    title: Inverse
    description:
      On a dark background, such as the header of topic pages.
      

      More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/breadcrumbs/inverse).
  1:
    title: No breadcrumbs
    description:
      More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/breadcrumbs/no_breadcrumbs).
  2:
    title: No home
    description:
      More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/breadcrumbs/no_home).
  3:
    title: Stop collapsing on mobile
    description:
      We recommend that if using the breadcrumbs for navigation purposes, you set collapse_on_mobile to true to make things more readable for mobile users. However, you can specify collapse_on_mobile:false or remove the flag completely to stop this behaviour.
      
      
      More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/breadcrumbs/stop_collapsing_on_mobile).
  4:
    title: With border
    description:
      Set a border below the breadcrumb. Off by default.
      

      More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/breadcrumbs/with_border).
designLibraries:
  0:
    title: GOV.UK Design System
    link: https://design-system.service.gov.uk/components/breadcrumbs/
  1:
    title: NHS Digital service manual
    link: https://service-manual.nhs.uk/design-system/components/breadcrumbs
  2:
    title: Ministry of Defence Design System - Nikin
    link: https://design-system.service.mod.gov.uk/components/breadcrumbs/
---
