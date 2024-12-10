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
title: Feedback

# Description of the component
# This briefly describes what the component is. It is required to display the description on the page, and in the <head> meta description.
description: The feedback component invites user feedback on the current page they are on.

# Embedding the figma file of the component
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this component.

# When to use this component
# Briefly describe the situation(s) when to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenToUse:
  This component existing on all pages across GOV.UK.

# When not to use this component
# Briefly describe the situation(s) when not to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenNotToUse:
  #Delete this comment before entering when not to use this component.

# How the component works
# Briefly descibe how this component works. For instance, listing out what happens when an end-user interacts with this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  'There are multiple journeys in this component:
  
  - Users say ‘yes’ the page is useful and get the response ‘Thank you for your feedback’.
  
  - Users say ‘no’ and it opens to allow the user to enter their email address where they will be able to input their email address to receive a feedback form.
  
  - Users say ‘Report a problem with this page’ and we ask them ‘what were you doing?’ and ‘what went wrong?’.

  
  This component is designed to sit at the bottom of pages on GOV.UK to allow users to submit feedback on that page.


  This component uses JavaScript for expanding and collapsing and also for submitting form responses.
  
  
  View this component and all its variations in the <a class="govuk-link" href="https://components.publishing.service.gov.uk/component-guide/feedback" rel="noopener noreferrer" target="_blank">Component Guide (open in a new tab)</a>.'

# Variations for this component
# List out any variations that exist for this component by providing (1) the name of said variation and (2) a brief description of that variation.
# variations:
#   # To add additional variations duplicate the the fields below (adhering to the formating) but increase the count by one integer.
#   0:
#     title: With GA4 tracking disabled
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       'This varation disables GA4 tracking on the feedback component. Tracking is enabled by default, which adds a data module and data-attributes with JSONs to the feedback buttons. See the [ga4-event-tracker documentation](https://github.com/alphagov/govuk_publishing_components/blob/main/docs/analytics-ga4/ga4-event-tracker.md) for more information.'

# Evidence and insights for this component
# List out all past documentation/supporting material with regards to or realted to this component. It can include (1) past design documentation, (2) research findings, and (3) presentations.
insights:
  # To add additional insights duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order for this information to render on the page.
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

# Other design systems
# List out all the other design systems that have documented this exact same component. This includes the GOV.UK Design System, along with other UK government departments.
designSystems:
  # To add additional design systems duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: #Delete this comment before entering the name of the Publishing Design Guide.
    link: #Delete this comment before entering the URL of the corresponding Publishing Design Guide.
    external:
      # Options on whether the webpage is an external:
        # true = The link is outside the Publishing Design Guide
        # false = The link is within the Publishing Design Guide
      #Delete this comment before entering whether the link is external or not.

# Existing issues with this component
# List of all the issues that are associated with this component, (1) containing the title used to describe the issue on GitHub, and (2) the link to the GitHub issue itself.
issues:
  # To add additional issues duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: #Delete this comment before entering the title of the GitHub issue.
    link: #Delete this comment before entering the URL of the corresponding GitHub issue.
    external:
      # Options on whether the webpage is an external:
        # true = The link is outside the Publishing Design Guide
        # false = The link is within the Publishing Design Guide
      #Delete this comment before entering whether the link is external or not.
---