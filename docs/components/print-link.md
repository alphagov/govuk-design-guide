---
layout: component-documentation
sectionKey: Components
eleventyNavigation:
  parent: Components
title: Print link
description: A link with a print icon to help users print the current page
whenToUse:
whenNotToUse: 
accessibilty:
  'The print icon must be presentational and ignored by screen readers.
  

  Links in the component must:

  - accept focus
  
  - be focusable with a keyboard
  
  - be usable with a keyboard
  
  - indicate when they have focus
  
  - change in appearance when touched (in the touch-down state)
  
  - change in appearance when hovered
  
  - be usable with touch
  
  - be usable with [voice commands](https://www.w3.org/WAI/perspectives/voice.html)
  
  - have visible text
  
  - have meaningful text'
howItWorks:
  'This component renders two different outputs depending on whether a `href` is specified. By default, when no `href` is given, the component renders as a button and triggers a print action via JavaScript. In this case the component is hidden in environments where JavaScript is disabled and can be used as a progressive enhancement. When a `href` is specified the component renders as an anchor tag and navigates to that `href` without JavaScript, suitable for applications which have paths that trigger a print event on load.'
variations:
  0:
    title: With different text
    description: More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/print_link/with_different_text).
  1:
    title: With different href
    description:
      'You can specify a alternative `href` URL that will override the default behaviour. When a `href` is specified the print link will render as an anchor tag and be displayed even when JavaScript is disabled.


      More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/print_link/with_different_href).'
  2:
    title: With data attributes
    description:
      'Data attributes can be passed to the component as shown.


      Note that the component does not include built in tracking. If this is required consider using the [GA4 link tracker](https://github.com/alphagov/govuk_publishing_components/blob/main/docs/analytics-ga4/trackers/ga4-link-tracker.md).


      More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/print_link/with_data_attributes).'
  3:
    title: With custom margins
    description:
      'The component accepts a number for margin bottom from `0` to `9` (`0px` to `60px`) using the [GOV.UK Frontend spacing scale](https://design-system.service.gov.uk/styles/spacing/#the-responsive-spacing-scale). It defaults to having margin level `3` on top and bottom.


      More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/print_link/with_custom_margins).'
insights:
  0:
    title:
    link:
    description:
    date:
designLibraries:
  0:
    title:
    link:
issues:
  0:
    title:
    link:
issueLink:
---