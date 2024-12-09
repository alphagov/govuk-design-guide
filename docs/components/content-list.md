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
title: Contents list

# Description of the component
# This briefly describes what the component is. It is required to display the description on the page, and in the <head> meta description.
description: The contents list provides a list of links when content is long and needs to be broken up to help users navigate it.

# Embedding the figma file of the component
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this component.

# When to use this component
# Briefly describe the situation(s) when to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenToUse:
  'This component is commonly used to list a page’s contents with links pointing to headings within the document, but can also be used for a list of links to other pages.

  
  Contents lists help users:

  - navigate complex documents that span multiple pages

  - get to a relevant section in a long piece of content
  
  - make sense of what’s in a piece of content.'

# When not to use this component
# Briefly describe the situation(s) when not to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenNotToUse:
  #Delete this comment before entering when not to use this component.

# How the component works
# Briefly descibe how this component works. For instance, listing out what happens when an end-user interacts with this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  'The contents list has options for dashes or numbering. It supports nesting contents one level deep, currently only used by specialist documents. When nesting the top level list items display in bold.


  It depends on the content type it shows on, but usually this component is rendered based on a publisher-provided list of parts in a document.


  View this component and all its variations in the <a class="govuk-link" href="https://components.publishing.service.gov.uk/component-guide/contents_list" rel="noopener noreferrer" target="_blank">Component Guide (open in a new tab)</a>.'

# Variations for this component
# List out any variations that exist for this component by providing (1) the name of said variation and (2) a brief description of that variation.
# variations:
#   # To add additional variations duplicate the the fields below (adhering to the formating) but increase the count by one integer.
#   0:
#     title: Underline links
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   1:
#     title: Long text
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   2:
#     title: Active content link
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   3:
#     title: Nested contents lists
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   4:
#     title: Formats numbers
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   5:
#     title: Formats complex numbers
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   6:
#     title: Nested with formatted numbers
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   7:
#     title: Right to left
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   8:
#     title: Right to left with formatted numbers
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   9:
#     title: Right to left with nested contents lists
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   10:
#     title: With branding
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   11:
#     title: Without ga4 tracking
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.

# Evidence and insights for this component
# List out all past documentation/supporting material with regards to or realted to this component. It can include (1) past design documentation, (2) research findings, and (3) presentations.
insights:
  # To add additional insights duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: May 2024
    description:
     'A research and design project on travel advice identified that the contents list contributes to users struggling to find information they need. In the given context, working with users enabled the team to streamline the content list from 10 items down to 5. This resulted in less confusion, fewer places to look, and Emergency content info more easily found.'
    title: Travel Advice research and design summary 2022 to 23 (pp. 8)
    link: https://docs.google.com/presentation/d/1Qx8o2ppZgnHbXe0UAT1f5XSsTL8-QaCv/edit?usp=sharing&ouid=105832416597570443289&rtpof=true&sd=true
    documentFormat: Google Slides
  1:
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: November 2022
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'A research project in context of a new page level design explored “How are users who need to *advise on a thing* orientating themselves and navigating at a content page level?”. Under “Chapter scanning and hopping” it summarises that “Participants displayed a strong inclination to engage with table-of-contents style links, which allow them to move across different sections within a piece of content.” The research was done on users that advise others on building works.'
    title: Navigational behaviours – Chapter scanning and hopping – GOV.UK Explore – Research Round 5
    link: https://docs.google.com/presentation/d/1wsiH0OJPyS9DtxvUXri-tNkqFhU6N00xjdsWSAHK2Fw/edit#slide=id.g1006224b8f4_0_85
    documentFormat: Google Slides
  2:
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: August 2022
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'The content audit discovery summarised a list of inconsistencies and issues with this component and offers proposed solutions to achieve more consistency across GOV.UK.'
    title: Content Audit Discovery – Component recommendations
    link: https://docs.google.com/document/d/1Gb3P2lQVGjdfhBnz19FDX4coWTpbKGIpZABNnQ7iLl0/edit#heading=h.llzp42bd0b76
    documentFormat: Google Docs

# Accessibilty criteria for this component
# List out the accessibility for this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
accessibilty:
  'The component must be a landmark with a navigation role.

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
  

  Considerations and criteria taken from the <a class="govuk-link" href="https://components.publishing.service.gov.uk/component-guide/contents_list#accessibility-acceptance-criteria" rel="noopener noreferrer" target="_blank">Component Guide (open in a new tab)</a>.'

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
    title: There is no visual differentiation between navigating within a page and across pages.
    link: https://github.com/alphagov/govuk_publishing_components/issues/4261
  1:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: The components gives very low visibility of which page in a list is active.  
    link: https://github.com/alphagov/govuk_publishing_components/issues/4262
  2:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: The contents list is too low in the type hierarchy.
    link: https://github.com/alphagov/govuk_publishing_components/issues/4263
  3:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: The m-dash is unusual as a visual marker on gov.uk.
    link: https://github.com/alphagov/govuk_publishing_components/issues/4264
  4:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: Inconsistent position in source order
    link: https://github.com/alphagov/govuk_publishing_components/issues/4265

---