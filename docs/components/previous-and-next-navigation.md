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
title: Previous and next navigation

# Description of the component
# This briefly describes what the component is. It is required to display the description on the page, and in the <head> meta description.
description: Navigational links that allow users to navigate within a series of pages or elements.

# Embedding the figma file of the component
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this component.

# When to use this component
# Briefly describe the situation(s) when to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenToUse: 'The previous and next navigation component is used when content is split over multiple pages. Particularly if showing all the content on a single page would take too long to load.'

# When not to use this component
# Briefly describe the situation(s) when not to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenNotToUse: 'This component is not necessary for single pages.'

# How the component works
# Briefly descibe how this component works. For instance, listing out what happens when an end-user interacts with this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks: 'It allows users to step through multiple pages using links to the previous or next page. 


The links are accompanied by a left or right arrow icon as a visual cue to its functionality. 


A single link can be displayed, for example, only a next page link would be necessary on the first page of a sequence.


There is also an option to provide labels for additional context, for example, the title of the page or the page number.  


GA4 tracking is enabled by default, but can be switched off.


View this component and all its variations in the <a class="govuk-link" href="https://components.publishing.service.gov.uk/component-guide/previous_and_next_navigation" rel="noopener noreferrer" target="_blank">Component Guide (opens in a new tab)</a>.'

# Variations for this component
# List out any variations that exist for this component by providing (1) the name of said variation and (2) a brief description of that variation.
variations:
  # To add additional variations duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    title: #Delete this comment before entering the name of the variation that exists for this component.
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      #Delete this comment before entering a description of variation.

# Evidence and insights for this component
# List out all past documentation/supporting material with regards to or realted to this component. It can include (1) past design documentation, (2) research findings, and (3) presentations.
insights:
  # To add additional insights duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # A description is REQUIRED in order for this information to render on the page.
    date: #Delete this comment before entering the date when the document was published.
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      #Delete this comment before entering a brief summary about the document being referred.
    title: #Delete this comment before entering the name of the insight document.
    link: #Delete this comment before entering the URL of the insight document.
    documentFormat: #Delete this comment before entering the format of the insight document. Example: (1) Google Docs, (2) Google Sheets, and (3) Google Slides.

# Accessibilty criteria for this component
# List out the accessibility for this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
accessibilty: 'Icons in the component must not be announced by screen readers.


The component must:

- identify itself as pagination navigation

- provide a distinction between the navigation text and label text of the links both visually and for screenreaders


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


Considerations and criteria taken from the <a class="govuk-link" href="https://components.publishing.service.gov.uk/component-guide/previous_and_next_navigation#accessibility-acceptance-criteria" rel="noopener noreferrer" target="_blank">Component Guide (opens in a new tab)</a>.'

# Other design systems
# List out all the other design systems that have documented this exact same component. This includes the GOV.UK Design System, along with other UK government departments.
designSystems:
  # To add additional design systems duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: Scottish Government Design System
    link: https://designsystem.gov.scot/components/sequential-navigation
  1:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: NHS Design System
    link: https://service-manual.nhs.uk/design-system/components/pagination


# Existing issues with this component
# List of all the issues that are associated with this component, (1) containing the title used to describe the issue on GitHub, and (2) the link to the GitHub issue itself.
issues:
  # To add additional issues duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: #Delete this comment before entering the title of the GitHub issue.
    link: #Delete this comment before entering the URL of the corresponding GitHub issue.
---