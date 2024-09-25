---
layout: component-documentation
sectionKey: Components
eleventyNavigation:
  parent: Components
title: Feedback
description: Invites user feedback on the current page they are on
whenToUse:
whenNotToUse: 
accessibilty:
  'The form must:

  - be functional and accessible with JavaScript disabled

  - be usable and accessible with stylesheets disabled
  

  Form elements in the component must:

  - accept focus

  - be focusable with a keyboard

  - be usable with a keyboard

  - be usable with touch

  - indicate when they have focus

  - be recognisable as form input elements

  - have correctly associated labels

  - be of the appropriate type for their use, e.g. password inputs should be of type `password`
    
    
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
  'This component is designed to sit at the bottom of pages on GOV.UK to allow users to submit feedback on that page.


  This component uses JavaScript for expanding and collapsing and also for submitting form responses'
variations:
  0:
    title: With GA4 tracking disabled
    description:
      'Disables GA4 tracking on the feedback component. Tracking is enabled by default, which adds a data module and data-attributes with JSONs to the feedback buttons. See the [ga4-event-tracker documentation](https://github.com/alphagov/govuk_publishing_components/blob/main/docs/analytics-ga4/ga4-event-tracker.md) for more information.


      More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/feedback).'
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