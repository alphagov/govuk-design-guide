---
# This file is a template to document a new component within the GOV.UK Design Library website.
layout: component-documentation
sectionKey: Components
eleventyNavigation:
  parent: Components

# Step 1: Duplicate and rename this file to the proposed component you want to include in the Design Library website.
# When duplicating and renaming this file use lowercase and replace any spaces with a dash (ie. -)

# Step 2: Set "eleventyExcludeFromCollections" to "false". This will ensure that the code snippet is commented out and this page will be display withinin the design library.
eleventyExcludeFromCollections: false

# Step 3: Input data points according to fields below to the best of your ability. Any fields without any data points will not be displayed on the website.

# Name of the component
# This is the name of the component (ex. Attachment). It is required to display the title on the page, in the meta data, and in the left-hand navigation menu of the components page.
title: Subscription links

# Description of the component
# This briefly describes what the component is. It is required to display the description on the page, and in the <head> meta description.
description: Links to ‘Get emails’ and ‘Subscribe to feed’

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
  The component is made up of two links with icons that allow you to access the functions subscribing to email and the feed.
  
  
  To subscribe to some emails (page updates) you need to sign in to your gov.uk account or create one.


  This component includes a h2 heading by default but can be suppressed by using hide_heading option.

  
  View this component and all its variations in the <a class="govuk-link" href="https://components.publishing.service.gov.uk/component-guide/subscription_links" rel="noopener noreferrer" target="_blank">Component Guide (open in a new tab)</a>.

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
    date: 2021
    description:
      Research showed that users do not make much use of 'subscribe to feed' leading to the proposal to remove it but to keep the underlying feeds for specialists and consisting users. It was suggested that the Find and View team own this roll out, as owners of the front-end applications.
    title: A case for removing ‘subscribe to feed’ links
    link: https://docs.google.com/document/d/1bYeieDqn_trm1cgTU6AxCyfhcc2nUCEi6fBuugKUWlI/edit#heading=h.y0vsas8r9tzf 
    documentFormat: google doc

# Accessibilty criteria for this component
# List out the accessibility for this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
accessibilty:
  'Icons in subscription links must be presentational and ignored by screen readers.

  Toggle elements in the component must:

  - be usable with a keyboard
  
  - be usable with touch
  
  - be recognised by screen readers as a button
  
  - announce to screen readers whether they are expanded or collapsed
  
  - show hidden elements by default when JavaScript is disabled
  
  
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
    title: #Delete this comment before entering the name of the design library.
    link: #Delete this comment before entering the URL of the corresponding design library.

# How to report an issue with this component
# This will display instrucions on how to report an issue via GitHub.
# Consult with a developer to confirm the GitHub where the component's codebase exists.
githubIssueLink: https://github.com/alphagov/govuk_publishing_components/issues/new

# Existing issues with this component
# List of all the issues that are associated with this component, (1) containing the title used to describe the issue on GitHub, and (2) the link to the GitHub issue itself.
issues:
  # To add additional issues duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: #Delete this comment before entering the title of the GitHub issue.
    link: #Delete this comment before entering the URL of the corresponding GitHub issue.
---