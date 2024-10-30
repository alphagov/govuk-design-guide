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
title: Attachment

# Description of the component
# This briefly describes what the component is. It is required to display the description on the page, and in the <head> meta description.
description: The attachment component allows users to download documents and presents information about a document. It also allows users to request an accessible format.

# When to use this component
# Briefly describe the situation(s) when to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenToUse:
  This component is exclusively used on guidance pages with document attachments

# When not to use this component
# Briefly describe the situation(s) when not to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenNotToUse:
  #Delete this comment before entering when not to use this component.

# How the component works
# Briefly descibe how this component works. For instance, listing out what happens when an end-user interacts with this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  'This component displays a link to a document that is attached to GOV.UK content along with a thumbnail and relevant file data (title of the document, format type, file size, link to view online, and request accessible format details). 


  It is intended to be rendered in Govspeak and as an attachment ‘preview’ in Content Publisher. It is not as rich in features as the attachment rendering provided by Whitehall, it lacks support for multiple languages, CSV previews and publication fields.
  

  View this component and all its variations in the <a class="govuk-link" href="https://components.publishing.service.gov.uk/component-guide/attachment" rel="noopener noreferrer" target="_blank">Component Guide (open in a new tab)</a>.'

# Variations for this component
# List out any variations that exist for this component by providing (1) the name of said variation and (2) a brief description of that variation.
# variations:
#   # To add additional variations duplicate the the fields below (adhering to the formating) but increase the count by one integer.
#   0:
#     title: With number of page
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   1:
#     title: Opendocument
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   2:
#     title: Help text disabled
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   3:
#     title: Embedded in govspeak
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   4:
#     title: With contact email
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   5:
#     title: With contact email and ga4 tracking
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   6:
#     title: With data attributes
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   7:
#     title: With margin bottom
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   8:
#     title: Command paper numbered
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   9:
#     title: Command paper unnumbered
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   10:
#     title: Act paper numbered
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   11:
#     title: Act paper unnumbered
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   12:
#     title: Hide order a copy
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   13:
#     title: With custom heading level
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   14:
#     title: With custom thumbnail
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   15:
#     title: Pdf attachment
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   16:
#     title: With preview link
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   17:
#     title: Html attachment
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.
#   18:
#     title: External attachment
#     description:
#       # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
#       #Delete this comment before entering a description of variation.

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
  'The thumbnail image, and the link wrapping it, must not focusable or shown to screenreaders.


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
  

  Considerations and criteria taken from the <a class="govuk-link" href="https://components.publishing.service.gov.uk/component-guide/attachment#accessibility-acceptance-criteria" rel="noopener noreferrer" target="_blank">Component Guide (open in a new tab)</a>.'

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
    title: Audit of all attachment component variations
    link: https://github.com/alphagov/govuk_publishing_components/issues/4146
---