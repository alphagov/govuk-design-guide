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
title: Global banner

# Description of the component
# This briefly describes what the component is. It is required to display the description on the page, and in the <head> meta description.
description: Used to communicate important information on throughout GOV.UK.

# Embedding the figma file of the component
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this component.

# When to use this component
# Briefly describe the situation(s) when to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenToUse:
  'The global banner is activated in the following event:

  - General election

  - Special topic that Number 10 wants us to promote'

# When not to use this component
# Briefly describe the situation(s) when not to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenNotToUse:
  #Delete this comment before entering when not to use this component.

# How the component works
# Briefly descibe how this component works. For instance, listing out what happens when an end-user interacts with this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  'A site-wide (global) banner can be activated to convey important information on GOV.UK which is not deemed emergency-level information. Unlike the emergency banner, we show a user the global banner no more than 3 times, by storing the view count in a cookie.


  Information and image of this component is available on the <a class="govuk-link" href="https://docs.publishing.service.gov.uk/manual/global-banner.html" rel="noopener noreferrer" target="_blank">Developer docs (opens in a new tab)</a>.'

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
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: May 2020
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Performance of the global banner during COVID and Brexit'
    title: Global banner performance
    link: https://docs.google.com/document/d/1ltH8ydXj_W_clYimAtf1MGwQksITxz-q5Yk9E9H5yBY/edit?usp=sharing
    documentFormat: Google Docs
  1:
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: May 2024
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Information regarding the site-wide banner during the 2024 General Election'
    title: Site-wide banner and featured homepage promo for the 2024 General Election
    link: https://docs.google.com/document/d/16B-lygYgDHT-gwbjTHQaNsdx9_y2Ikdg2wiU5ekio4w/edit?usp=sharing
    documentFormat: Google Docs

# Accessibilty criteria for this component
# List out the accessibility for this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
accessibilty:
  #Delete this comment before entering the accessibility criteria for this component.

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
    title: #Delete this comment before entering the title of the GitHub issue.
    link: #Delete this comment before entering the URL of the corresponding GitHub issue.
---