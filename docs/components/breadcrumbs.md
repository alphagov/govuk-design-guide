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
title: Breadcrumbs

# Description of the component
# This briefly describes what the component is. It is required to display the description on the page, and in the <head> meta description.
description: The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels by making visible the page hierarchy.

# Embedding the figma file of the component
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this component.

# When to use this component
# Briefly describe the situation(s) when to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenToUse:
  'Breadcrumbs create an explicit path in the hierarchical structure, from the homepage to, but not including, the current page. In most cases, they relate to the topic the relevant content page is tagged as.'

# When not to use this component
# Briefly describe the situation(s) when not to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenNotToUse:
  'Do not use the breadcrumbs component on websites with a flat structure, or to show progress through a linear journey or transaction.


  If you’re using other navigational elements on the page, such as a sidebar, consider whether your users need the additional support of breadcrumbs.'

# How the component works
# Briefly descibe how this component works. For instance, listing out what happens when an end-user interacts with this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  'Breadcrumbs provide a way of navigating and orienting users:
  
  - Each section of the path is a direct link to the page it represents in the hierarchy.
  
  - Links are in consecutive order and separated by a right pointing chevron to denote order.
  
  - The text for each section represents the title of the page it links to.
  
  - Variations include breadcrumbs without Home at the start and breadcrumbs with a single section.

  - On mobile, breadcrumbs are shortened to fit on a single line.
  

  The component accepts an array of breadcrumb objects. Each crumb must have a title and a URL. Links are tracked, but in Universal Analytics, links to the homepage (any link with a url of `/`) will be tracked separately as `homeLinkClicked`.
  
  
  View this component and all its variations in the <a class="govuk-link" href="https://components.publishing.service.gov.uk/component-guide/breadcrumbs" rel="noopener noreferrer" target="_blank">Component Guide (opens in a new tab)</a>.'

# Variations for this component
# List out any variations that exist for this component by providing (1) the name of said variation and (2) a brief description of that variation.
# variations:
#   # To add additional variations duplicate the the fields below (adhering to the formating) but increase the count by one integer.
#   0:
#     title: Breadcrumbs on mobile
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       'On mobile, the breadcrumb is shorted to Home > parent topic for the page.'
#   1:
#     title: Inverse
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       'On a dark background, such as the header of topic pages.'
#   2:
#     title: No breadcrumbs
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   3:
#     title: No home
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   4:
#     title: Stop collapsing on mobile
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       'We recommend that if using the breadcrumbs for navigation purposes, you set collapse_on_mobile to true to make things more readable for mobile users. However, you can specify collapse_on_mobile:false or remove the flag completely to stop this behaviour.'
#   5:
#     title: With border
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       'Set a border below the breadcrumb. Off by default.'

# Evidence and insights for this component
# List out all past documentation/supporting material with regards to or realted to this component. It can include (1) past design documentation, (2) research findings, and (3) presentations.
insights:
  # To add additional insights duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # A description is REQUIRED in order for this information to render on the page.
    date: March 2022
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'The Homepage and Navigation Team did a complete audit of the logic and all iterations of this component.'
    title: Breadcrumbs logic
    link: https://docs.google.com/document/d/10k_LzO_JGqARIccAkL7aEgS0Ft9PSe7D0UC87akaUNo/edit#heading=h.yb5qbwi6tisj
    documentFormat: Google Docs

# Accessibilty criteria for this component
# List out the accessibility for this component.
# You MUST wrap this in double quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
accessibilty:
  'New WCAG 2.2 criteria affects this component. To use ‘Breadcrumbs’ and meet the new Web Content Accessibility Guidelines (WCAG) 2.2 criteria, make sure that users can successfully interact with breadcrumbs.

  
  The breadcrumb links must have a text contrast ratio higher than 4.5:1 against the background colour to meet WCAG AA (this especially applies when using the inverse flag).


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

  - have meaningful text'

# Other design systems
# List out all the other design systems that have documented this exact same component. This includes the GOV.UK Design System, along with other UK government departments.
designSystems:
  # To add additional design systems duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: GOV.UK Design System
    link: https://design-system.service.gov.uk/components/breadcrumbs/
  1:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: NHS Digital service manual
    link: https://service-manual.nhs.uk/design-system/components/breadcrumbs
  2:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: Ministry of Defence Design System
    link: https://design-system.service.mod.gov.uk/components/breadcrumbs/

# Existing issues with this component
# List of all the issues that are associated with this component, (1) containing the title used to describe the issue on GitHub, and (2) the link to the GitHub issue itself.
issues:
  # To add additional issues duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: Breadcrumbs don't show the page you are on. Is that a problem?
    link: https://github.com/alphagov/govuk_publishing_components/issues/4257
  1:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: We can’t give specialist document finders a parent taxonomy topic, because there’s no route back. 
    link: https://github.com/alphagov/govuk_publishing_components/issues/4258
  2:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: Parts or all of breadcrumbs missing on some pages
    link: https://github.com/alphagov/govuk_publishing_components/issues/4259
  3:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: When content is tagged to multiple topics the breadcrumb component selects one in alphabetical order. Are there alternatives that would work better for users?
    link: https://github.com/alphagov/govuk_publishing_components/issues/4260
  4:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: Manual sections should have a parent of the manual, and a grandparent of a topic.
    link: https://github.com/alphagov/govuk-design-guide/issues/140
  5:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: HMRC manuals should have breadcrumbs
    link: https://github.com/alphagov/govuk-design-guide/issues/141
  6:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: Corporate information pages should have a parent of an org page
    link: https://github.com/alphagov/govuk-design-guide/issues/142
  7:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: Worldwide offices and worldwide organisations do not have a breadcrumb
    link: https://github.com/alphagov/govuk-design-guide/issues/143
  8:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: Are there alternatives to ordering breadcrumbs alphabetically when content is tagged to more than one topic?
    link: https://github.com/alphagov/govuk-design-guide/issues/144


# Kati's additional suggestions
#   0:
#     title: Mainstream tagged to mainstream browse
#     description:
#       "Content designers choose which browse section appears in the breadcrumb. They select this in Publisher or Content Tagger.

      
#       Example: 
      
#       [www.gov.uk/access-to-work](https://www.gov.uk/access-to-work) is tagged to [www.gov.uk/browse/benefits/disability](https://www.gov.uk/browse/benefits/disability) AND [www.gov.uk/browse/disabilities/work](https://www.gov.uk/browse/disabilities/work). 
      
#       The breadcrumb includes the former category -- benefits.
      
      
#       Example of [what it looks like in Publisher](https://publisher.integration.publishing.service.gov.uk/editions/60eefff6d3bf7f1f63ea03aa/tagging)."

#   1:
#     title: Mainstream content that’s part of a step by step
#     description: "The super breadcrumb is displayed instead of the breadcrumb. The  super breadcrumb is the step by step the page if part of.


#       Example: 
      
#       [https://www.gov.uk/book-theory-test](https://www.gov.uk/book-theory-test)"
#   2:
#     title: Mainstream content that’s tagged to a taxonomy topic
#     description: "Mainstream content that has [topic taxonomy in the breadcrumb](https://www.gov.uk/find-a-visa-application-centre) (this is rare)."
#   3:
#     title: Specialist (Whitehall) content – topic taxonomy page in the breadcrumb
#     description: "
#     **Overall**
    
#     All specialist (Whitehall) content is tagged to the topic taxonomy. The topic taxonomy appears in the breadcrumb on specialist (Whitehall) pages:


#     Home > Level 1 > Level 2 > Level 3  


#     Example:

#     [Abandoned asylum appeals > caseworker guidance](https://www.gov.uk/government/publications/abandoned-appeals-process)


    
    
#     **Exception**
    
#     If specialist content is tagged to multiple topics -- what gets shown in the breadcrumb is based on alphabetical order. 


#     Example:

#     [Guidance on access agreements](https://www.gov.uk/guidance/guidance-on-access-agreements) is tagged to:

#     - Business and industry > Media and communications > Broadband investment

#     - Business and industry > Media and communications > Communications and telecoms

#     - Government > Government technology and digital services > Networks and telecommunications >Telecommunications
    
#     - Government > Public sector land use"
#   4:
#     title: Specialist content – html publication pages (these have a different behaviour)
#     description: "The default breadcrumb for an HTML publication is its parent, in in addition to the topic the parent is tagged to.


#     Home > level 1 > level 2 > level 3  > **publication parent page**


#     Examples:

#     - [Income Tax rates and allowances for current and past years](https://www.gov.uk/government/publications/rates-and-allowances-income-tax/income-tax-rates-and-allowances-current-and-past)
    
#     - [Visiting the UK: guide to supporting documents](https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk)"

---