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
title: Related navigation

# Description of the component
# This briefly describes what the component is. It is required to display the description on the page, and in the <head> meta description.
description: Component showing related content, including topics, guidance and collections

# Embedding the figma file of the component
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this component.

# When to use this component
# Briefly describe the situation(s) when to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenToUse:
  This is used on most content pages. Different page types include different types of related navigation. The most common ones are related content and collection links.
# When not to use this component
# Briefly describe the situation(s) when not to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenNotToUse:
  #Delete this comment before entering when not to use this component.

# How the component works
# Briefly descibe how this component works. For instance, listing out what happens when an end-user interacts with this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  'The component displays as a list of links to information related to the page. It sits in the right hand side bar next to the main content. 
  
  
  It can appear: 

  - by itself (usually in the sidebar)

  - as part of the [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)  or [contextual footer](https://components.publishing.service.gov.uk/component-guide/contextual_footer)

  
  View this component in the [Component Guide](https://components.publishing.service.gov.uk/component-guide/related_navigation) and the [Developer Docs](https://docs.publishing.service.gov.uk/manual/related-links.html).

  
  The component can be used with a variation of contents listed below. Find out more in the [navigational elements document](https://docs.google.com/document/d/1G8wz6D8O1B8wd77NPTr2iNqSV4tktO164GRL_cgK6Cw/edit#heading=h.khn7dphyjgi1).'

# Variations for this component
# List out any variations that exist for this component by providing (1) the name of said variation and (2) a brief description of that variation.
variations:
  # To add additional variations duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    title: Related content
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Related content links are either:

      - created by the algorithm (currently broken)
      
      - added by a content designer 

      
      Find out more in the [navigational elements document](https://docs.google.com/document/d/1G8wz6D8O1B8wd77NPTr2iNqSV4tktO164GRL_cgK6Cw/edit#heading=h.khn7dphyjgi1).'
  1:
    title: Document collections
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Collections appear under the related content section on specialist and mainstream content.


      If a content item is part of a collection, the collection pages it appear in the right-hand column. 


      If the content item is part of multiple collections, all the collections are displayed.

      
      Find out more in the [navigational elements document](https://docs.google.com/document/d/1G8wz6D8O1B8wd77NPTr2iNqSV4tktO164GRL_cgK6Cw/edit#heading=h.khn7dphyjgi1).'
  2:
    title: Explore the topic
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Explore the topic shows the topics the content has been tagged to. This appears on mainstream content pages as well as specialist content pages. It is usually displayed in the Contextual Footer component. E.g. Mainstream guide: <a class="govuk-link" href="https://www.gov.uk/pay-corporation-tax" rel="noopener noreferrer" target="_blank">Pay your Corporation Tax bill: Overview - GOV.UK (opens in a new tab)</a>.
      

      Find out more in the [navigational elements document](https://docs.google.com/document/d/1G8wz6D8O1B8wd77NPTr2iNqSV4tktO164GRL_cgK6Cw/edit#heading=h.khn7dphyjgi1).'
  3:
    title: Topical event
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Goverment publishers can add a link to a topical event page on the content page in Whitehall when needed. This can be done on most content types. Some examples are:

      - Policy papers, e.g. <a class="govuk-link" href="https://www.gov.uk/government/publications/charter-for-budget-responsibility-autumn-2022-update" rel="noopener noreferrer" target="_blank">Charter for Budget Responsibility: Autumn 2022 update (opens in a new tab)</a>
      
      - Detailed guides, e.g.  <a class="govuk-link" href="https://www.gov.uk/government/publications/the-demise-of-her-majesty-queen-elizabeth-ii-national-mourning-guidance" rel="noopener noreferrer" target="_blank">National Mourning Guidance (opens in a new tab)</a>
      
      - Official statistics, e.g. <a class="govuk-link" href="https://www.gov.uk/government/statistics/national-norovirus-and-rotavirus-surveillance-reports-2022-to-2023-season" rel="noopener noreferrer" target="_blank">National norovirus and rotavirus surveillance (opens in a new tab)</a>'
  4:
    title: World locations
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Can appear on certain content types such as news articles; taking users back to a  <a class="govuk-link" href="https://www.gov.uk/world/india/news" rel="noopener noreferrer" target="_blank">World location news page for that country (opens in a new tab)</a>.'
  5:
    title: Statistical data set
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Appears on certain specialist content types, such as some:

      - <a class="govuk-link" href="https://www.gov.uk/government/statistics/local-authority-collected-waste-management-annual-results-202122" rel="noopener noreferrer" target="_blank">National statistics (opens in a new tab)</a>

      - <a class="govuk-link" href="https://www.gov.uk/government/statistics/local-authority-collected-waste-for-england-quarterly-estimates" rel="noopener noreferrer" target="_blank">Official statistics (opens in a new tab)</a>
'
  6:
    title: Elsewhere on the web
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Appears on, for example:

      - Mainstream smart answers, e.g. <a class="govuk-link" href="https://www.gov.uk/find-a-job" rel="noopener noreferrer" target="_blank">Find a job (opens in a new tab)</a>
      
      - Mainstream guides, e.g. <a class="govuk-link" href="https://www.gov.uk/power-of-attorneyn" rel="noopener noreferrer" target="_blank">Make, register or end a lasting power of attorney (opens in a new tab)</a>'
  7:
    title: Other contacts
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Appears on, for example Mainstream answers, e.g. contact pages like <a class="govuk-link" href="https://www.gov.uk/government/organisations/hm-revenue-customs/contact/employer-paye-payment" rel="noopener noreferrer" target="_blank">Employer PAYE and National Insurance: payments (opens in a new tab)</a> and <a class="govuk-link" href="https://www.gov.uk/government/organisations/hm-revenue-customs/contact/self-assessment" rel="noopener noreferrer" target="_blank">Self Assessment: general enquiries (opens in a new tab)</a>.'

# Evidence and insights for this component
# List out all past documentation/supporting material with regards to or realted to this component. It can include (1) past design documentation, (2) research findings, and (3) presentations.
insights:
  # To add additional insights duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # A description is REQUIRED in order for this information to render on the page.
    date: November 2021
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'This research explored how users who advise others interact with and navigate GOV.UK content page.


      Users were found to have varied expectations for what "related content" might mean.
      The phrase "related content" means different things to users depending on their prior experience of the content and of other resources.


      "I do not know if these are maybe ones that have been recently clicked on by someone"


      "[related content] might be things that are referred to in that document that if you want more detail on, you click into those pages"


      "you need to click on all of these [related links] anyway, even if you do not understand what they are... because obviously there could be information there that you are missing that could help you".'

    title: 'GOV.UK Explore: page level nav (advisers) - Research round 5'
    link: https://docs.google.com/presentation/d/1wsiH0OJPyS9DtxvUXri-tNkqFhU6N00xjdsWSAHK2Fw/edit#slide=id.g1006224b8f4_0_113
    documentFormat: Google Slides
  1:
    # A description is REQUIRED in order for this information to render on the page.
    date: February 2023
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'This report expains what related links are and how they are generated, both algorythmically and manually.'
    title: Related links and how they are generated
    link: https://docs.google.com/presentation/d/1-_u-00zColPLAwUw1iYTBWiTa1O2OdUAx1Jie_Pn9Qg/edit#slide=id.g10d42026b8_2_0
    documentFormat: Google Slides
  2:
    # A description is REQUIRED in order for this information to render on the page.
    date: April 2023
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'A details analysis showed:

      
      43% of all clicks are of the first related link - this shows that lots of users only click the first link in ‘Related content’


      Most users do not click more than 3 links
      

      Some advisers (‘advise a thing’ users) struggle to grasp the distinction between related content and ‘also part of’ links'
    title: 'Page-level navigation: analytics findings'
    link: https://docs.google.com/document/d/1MzjBel00jgYYWSxkc5-nwspmncEA0X2FuBVk36ubQmI/edit?tab=t.0#heading=h.qkwgyf3zus86
    documentFormat: Google Docs
  insights:
  # To add additional insights duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  3:
    # A description is REQUIRED in order for this information to render on the page.
    date: December 2024
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Only GDS can remove automatic related links. This wiki entry explains how the algorithm generated links are updated by GDS content designers'
    title: 'Wiki entry: Related links on Whitehall content'
    link: https://gov-uk.atlassian.net/wiki/spaces/CC/pages/138674387/2nd+line+-+government+support+queue#Related-links-on-Whitehall-content
    documentFormat: GOV.UK wiki

# Accessibilty criteria for this component
# List out the accessibility for this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
accessibilty:
  'Should have a role of ‘navigation’ on any navigation elements inside the component
  Should be marked up as navigation and not as tangential content


  Links in the component must:

  - accept focus

  - be focusable with a keyboard

  - be usable with a keyboard

  - indicate when they have focus

  - change in appearance when touched (in the touch-down state)

  - change in appearance when hovered

  - be usable with touch

  - be usable with voice commands <a class="govuk-link" href="https://www.w3.org/WAI/perspective-videos/voice/" rel="noopener noreferrer" target="_blank">voice commands (opens in a new tab)</a>

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
    title: 'Accessibility: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination (landmark-unique)'
    link: https://github.com/alphagov/govuk-design-guide/issues/171
  1:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: If the content is part of a collection, the collection page appears in the related content section and it’s not possible to remove this link.
    link: https://github.com/alphagov/govuk-design-guide/issues/172
  2:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: We could create an 'escape hatch' from specialist to mainstream content for people who end up 'too deep' in GOV.UK content
    link: https://github.com/alphagov/govuk-design-guide/issues/173
  3:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: There are too many things in the sidebar. Users tend to click on the top 3 links so there’s an opportunity to simplify
    link: https://github.com/alphagov/govuk-design-guide/issues/174
  4:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: The algorithm to generate related content links for Whitehall content is broken
    link: https://github.com/alphagov/govuk-design-guide/issues/175
  5:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: We should explore how effective or confusing related links are. Are they worth keeping?
    link: https://github.com/alphagov/govuk-design-guide/issues/176
---