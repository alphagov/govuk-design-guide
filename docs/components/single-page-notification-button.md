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
title: Single page notification button

# Description of the component
# This briefly describes what the component is. It is required to display the description on the page, and in the <head> meta description.
description: A button that subscribes the user to email notifications to a page

# Embedding the figma file of the component
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this component.

# When to use this component
# Briefly describe the situation(s) when to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenToUse:
  #Delete this comment before entering when to use this component.

# When not to use this component
# Briefly describe the situation(s) when not to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenNotToUse:
  #Delete this comment before entering when not to use this component.

# How the component works
# Briefly descibe how this component works. For instance, listing out what happens when an end-user interacts with this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  'By default, the component displays with the “Get emails about this page” state.


  Once a user selects the button, they are redirected to a page where they can create a GOV.UK One Login.
  <a class="govuk-link" href="https://www.gov.uk/email/subscriptions/single-page/new?topic_id=download-the-hmrc-app" rel="noopener noreferrer" target="_blank">Example (opens in a new tab)</a>


  If the user has already subscribed to email notifications about the current page, display the “Stop getting emails about this page” state.


  View this component and all its variations in the <a class="govuk-link" href="https://components.publishing.service.gov.uk/component-guide/single_page_notification_button" rel="noopener noreferrer" target="_blank">Component Guide (opens in a new tab)</a>.'

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
    date: February 2024
    description:
      'A write up of the Email notification sign-up journey.'
    title: Email notification sign-up journeys
    link: https://docs.google.com/document/d/1aJneeN0aPZxVwPVt1bPZItVjiJwsGQX_GZoq4WB0OMA/edit?tab=t.0
    documentFormat: Google Doc

# Accessibilty criteria for this component
# List out the accessibility for this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
accessibilty:
  'The bell icon must be presentational and ignored by screen readers.'

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
    title: Does the fact that you need a GOV.UK account keep people from signing up for updates? 
    link: https://github.com/alphagov/govuk-design-guide/issues/164
  1:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: The difference between this component and the Subscription Link is unclear.
    link: https://github.com/alphagov/govuk-design-guide/issues/165
  2:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: The component lives in context of other components but the lockup is inconsistent.
    link: https://github.com/alphagov/govuk-design-guide/issues/166
  3:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: #Delete this comment before entering the title of the GitHub issue.
    link: #Delete this comment before entering the URL of the corresponding GitHub issue.
---
