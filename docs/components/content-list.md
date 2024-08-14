---
layout: component-documentation
sectionKey: Components
eleventyNavigation:
  parent: Components
title: Contents list
description: 
  The contents list provides a list of links when content is long and needs to be broken up to help users navigate it. It is commonly used to lists a page’s contents with links pointing to headings within the document, but can also be used for a list of links to other pages.
  
whenToUse:
  The contents list component is currently only used by specialist documents.

accessibilty:
  "The component must be a landmark with a navigation role.

  The contents list must:

  - inform the user how many items are in the list
  
  - convey the content structure
  
  - indicate the current page when contents span different pages, and not link to itself
  
  - include an aria-label to contextualise the list
  
  - ensure dashes before each list item are hidden from screen readers


  Links with formatted numbers must separate the number and text with a space for correct screen reader pronunciation. This changes pronunciation from “1 dot Item” to “1 Item”.


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
  
  - have meaningful text
  

  Considerations and criteria taken from the [component Guide](https://components.publishing.service.gov.uk/component-guide/contents_list#accessibility-acceptance-criteria)"

howItWorks:
  "This components helps users:

  - navigate complex documents that span multiple pages

  - get to a relevant section in a long piece of content
  
  - make sense of what’s in a piece of content
  

  The contents list has options for dashes or numbering abd supports nesting contents one level deep. When nesting the top level list items display in bold.


  It depends on the content type it shows on, but usually this component is rendered based on a publisher-provided list of parts in a document."

variations:
  0:
    title: Underline links
    description: 
      More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/contents_list/underline_links).
  1:
      title: Long text
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/contents_list/long_text).
        
  2:
      title: Active content link
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/contents_list/active_content_link).
        
  3:
      title: Nested contents lists
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/contents_list/nested_contents_lists).
        
  4:
      title: Formats numbers
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/contents_list/formats_numbers).
        
  5:
      title: Formats complex numbers
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/contents_list/formats_complex_numbers).
        
  6:
      title: Nested with formatted numbers
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/contents_list/nested_with_formatted_numbers).
        
  7:
      title: Right to left
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/contents_list/right_to_left).
        
  8:
      title: Right to left with formatted numbers
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/contents_list/right_to_left_with_formatted_numbers).
        
  9:
      title: Right to left with nested contents lists
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/contents_list/right_to_left_with_nested_contents_lists).
  10:
      title: With branding
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/contents_list/with_branding).
  11:
      title: Without ga4 tracking
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/contents_list/without_ga4_tracking).
insights:
  0:
    title: Content Audit Discovery – Component recommendations 
    link: https://docs.google.com/document/d/1Gb3P2lQVGjdfhBnz19FDX4coWTpbKGIpZABNnQ7iLl0/edit#heading=h.llzp42bd0b76
    description: This document sets out to group and record design elements that can be made consistent across GOV.UK.
    date: August 2022
  1:
    title: Navigational behaviours – Chapter scanning and hopping – GOV.UK Explore – Research Round 5 
    link: https://docs.google.com/presentation/d/1wsiH0OJPyS9DtxvUXri-tNkqFhU6N00xjdsWSAHK2Fw/edit#slide=id.g1006224b8f4_0_85
    description: Project debrief that provides project context and opportunities for improvements
    date: November 2022
designLibraries:
  0:
    title: GOV.UK Component guide
    link: https://components.publishing.service.gov.uk/component-guide/contents_list
---