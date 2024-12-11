---
# This file is a template to document a new component within the GOV.UK Publishing Design Guide website.
layout: component-documentation
sectionKey: Components
eleventyNavigation:
  parent: Components

# Step 1: Duplicate and rename this file to the proposed component you want to include in the Publishing Design Guide website.
# When duplicating and renaming this file use lowercase and replace any spaces with a dash (ie. -)

# Step 2: Set "eleventyExcludeFromCollections" to "false". This will ensure that the code snippet is commented out and this page will be display withinin the Publishing Design Guide.
eleventyExcludeFromCollections: false

# Step 3: Input data points according to fields below to the best of your ability. Any fields without any data points will not be displayed on the website.

# Name of the component
# This is the name of the component (ex. Attachment). It is required to display the title on the page, in the meta data, and in the left-hand navigation menu of the components page.
title: Print link

# Description of the component
# This briefly describes what the component is. It is required to display the description on the page, and in the <head> meta description.
description: A link with a print icon to help users print the current page.

# Embedding the figma file of the component
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this component.

# When to use this component
# Briefly describe the situation(s) when to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenToUse:
  This is only used on pages made in Whitehall publisher.

# When not to use this component
# Briefly describe the situation(s) when not to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenNotToUse:
  #Delete this comment before entering when not to use this component.

# How the component works
# Briefly descibe how this component works. For instance, listing out what happens when an end-user interacts with this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  'When user selects the button the browser’s print modal appears.


  For multi-paged content the end-user is directed to a new page that compiles the multi-page content into a single webpage, followed by the appearance of the browser’s print.


  This component renders two different outputs depending on whether a `href` is specified. By default, when no `href` is given, the component renders as a button and triggers a print action via JavaScript. In this case the component is hidden in environments where JavaScript is disabled and can be used as a progressive enhancement. When a `href` is specified the component renders as an anchor tag and navigates to that `href` without JavaScript, suitable for applications which have paths that trigger a print event on load.
  
  
  View this component and all its variations in the <a class="govuk-link" href="https://components.publishing.service.gov.uk/component-guide/print_link" rel="noopener noreferrer" target="_blank">Component Guide (opens in a new tab)</a>.'

# Variations for this component
# List out any variations that exist for this component by providing (1) the name of said variation and (2) a brief description of that variation.
variations:
  # To add additional variations duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  # 0:
  #   title: With different text
  #   description:
  #     # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
  #     #Delete this comment before entering a description of variation.
  # 1:
  #   title: With different href
  #   description:
  #     # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
  #     'You can specify a alternative `href` URL that will override the default behaviour. When a `href` is specified the print link will render as an anchor tag and be displayed even when JavaScript is disabled.'
  # 2:
  #   title: With data attributes
  #   description:
  #     # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
  #     #Delete this comment before entering a description of variation.
  # 3:
  #   title: With custom margins
  #   description:
  #     # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
  #     'The component accepts a number for margin bottom from `0` to `9` (`0px` to `60px`) using the [GOV.UK Frontend spacing scale](https://design-system.service.gov.uk/styles/spacing/#the-responsive-spacing-scale). It defaults to having margin level `3` on top and bottom.'

# Evidence and insights for this component
# List out all past documentation/supporting material with regards to or realted to this component. It can include (1) past design documentation, (2) research findings, and (3) presentations.
insights:
  # To add additional insights duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: September 2020
    description: 'TBC (Nikin)'
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      #Delete this comment before entering a brief summary about the document being referred.
    title: Analysis of the print button and associated content/document types
    link: https://docs.google.com/spreadsheets/d/1eG2FwIOnWLdhL2QND5Notkc6SB1T7i1WMA_IWl4Rajg/edit?usp=sharing
    documentFormat: Google Sheets
  1:
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: March 2021
    description: 'TBC (Nikin)'
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      #Delete this comment before entering a brief summary about the document being referred.
    title: Analysis of the print button
    link: https://docs.google.com/spreadsheets/d/19GJHEjtv_McS4m_t1fEUAO7KfpqZbepShrp7BiiHbGw/edit?usp=sharing
    documentFormat: Google Sheets
  2:
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: February 2024
    description: 'The border colour was changed to a darker shade of grey to address accessibility concerns as the earlier border had little colour contrast'
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      #Delete this comment before entering a brief summary about the document being referred.
    title: N/A
    link:
    documentFormat:

# Accessibilty criteria for this component
# List out the accessibility for this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
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

# Other design systems
# List out all the other design systems that have documented this exact same component. This includes the GOV.UK Design System, along with other UK government departments.
designSystems:
  # To add additional design systems duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: #Delete this comment before entering the name of the Publishing Design Guide.
    link: #Delete this comment before entering the URL of the corresponding Publishing Design Guide.

# Existing issues with this component
# List of all the issues that are associated with this component, (1) containing the title used to describe the issue on GitHub, and (2) the link to the GitHub issue itself.
issues:
  # To add additional issues duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: Not all pages display the print link.
    link: https://github.com/alphagov/govuk_publishing_components/issues/4266
  1:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: Where print link is repeated at the top and bottom of a page the lock-up is currently inconsistent. 
    link: https://github.com/alphagov/govuk_publishing_components/issues/4267
  2:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: In dark mode the icon is not visible. 
    link: https://github.com/alphagov/govuk_publishing_components/issues/4268
---