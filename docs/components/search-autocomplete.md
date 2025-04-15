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
title: Search autocomplete

# Description of the component
# This briefly describes what the component is. It is required to display the description on the page, and in the <head> meta description.
description: Suggesting search queries in a dropdown as users type in the search bar of GOV.UK

# Embedding the figma file of the component
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this component.

# When to use this component
# Briefly describe the situation(s) when to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenToUse:
  'Use search autocomplete when you are dealing with dynamic data and want to reduce typing effort for users and help them formulate search queries by filling in the blanks (think of Google search).'

# When not to use this component
# Briefly describe the situation(s) when not to use this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenNotToUse:
  '- Do not use search autocomplete when you are dealing with a limited database and users can easily find what they need with a simple search.  

  - Do not use search autocomplete unless the model is properly trained and you have validated it provides relevant and factually correct suggestions.'

# How the component works
# Briefly descibe how this component works. For instance, listing out what happens when an end-user interacts with this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  'The data model behind the autocomplete feature is powered by Google Vertex AI Search, the search product that the Search team launched on GOV.UK in February 2024. This model is trained on anonymised user search queries (from people who have consented to analytics tracking), which Google processes and refines to provide relevant autocomplete suggestions.  
  
  
  The autocomplete suggestions appear underneath the search box after 3 characters have been typed – as suggestions are more relevant after this threshold. The suggested keywords to formulate the new query are highlighted in bold (as it is a standard pattern), and we limit the suggestions to 5 in order to reduce cognitive load and prevent unnecessary scrolling. Selecting a suggestion from the dropdown will update the search query in the search bar and take the user to the search results page – showing results relevant to the selected query.


  ### Useful reads

  - <a class="govuk-link" href="https://design-system.service.gov.uk/" target="_blank" rel="noopener noreferrer">Launch blog post (opens in a new tab)</a>

  - <a class="govuk-link" href="https://govuk-finder-frontend.herokuapp.com/component-guide/search_with_autocomplete" target="_blank" rel="noopener noreferrer">Github page (opens in a new tab)</a>'
  

# Variations for this component
# List out any variations that exist for this component by providing (1) the name of said variation and (2) a brief description of that variation.
variations:
  # To add additional variations duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    title: Differences with how search autocomplete is used on the Design System website
    description:
      'The <a class="govuk-link" href="https://design-system.service.gov.uk/" target="_blank" rel="external"> Design System website (opens in a new tab) </a> uses search autocomplete in a slightly different way – known internally as the <a class="govuk-link" href="https://github.com/alphagov/accessible-autocomplete" target="_blank" rel="noopener noreferrer">accessible autocomplete (opens in a new tab)</a>.
      

      <h4 class="govuk-heading-s">Typing and suggestions behaviour</h4>


      On the GOV.UK search autocomplete, a maximum of 5 search query suggestions appear in a dropdown after typing 3 characters. The suggestions show keywords to add to what the user has typed in the search bar. The dropdown pushes the content down to avoid any overlays – which are a problem for screen readers.
      

      On the other hand, on the Design system page autocomplete you get an unlimited amount of results in a dropdown as soon as you type, and the dropdown overlays the content and includes interal scrolling. The search results (which are NOT search query suggestions) match the keywords typed and are populated from a static data list. For example if I type ‘ra‘, I get the result ‘radio buttons‘.


      <h4 class="govuk-heading-s">Styling</h4>


      - The hover state of the GOV.UK search autocomplete uses a light grey background and underline the text – while the hover state used in the design systems uses a blue background and white text. The reason why the Search team made this change is because on GOV.UK sometimes the search autocomplete dropdown sits on top of a blue background (for example on the homepage), which merges with the blue colour on hover and makes the autocomplete suggestions hard to read. For this reason we changed it to a light grey background with text underline, which passed the DAC usability audit.


      - The horizontal grey lines that separate the suggestions in the dropdown have a 15px padding left and right on GOV.UK – while the lines go edge to edge in the Design System search. The extra space added in the GOV.UK variation allows the list of suggestions breathe more, which contributes to having better visual harmony and a feeling of clean design.


      Our suggestion would be to update the Design System hover state and line separators to the how they work on GOV.UK – so they are more consistent.

      
      <h4 class="govuk-heading-s">Accessibility</h4>


      The Design system team recently iterated the way they present search suggestions (Dec 2024) to make it more accessible for users who use accessibility functionalities that enlarge the content on the screen to make it easier to see and read. <a class="govuk-link" href="https://github.com/alphagov/govuk-design-system/pull/4220" target="_blank" rel="noopener noreferrer"> Read more about this (opens in a new tab)</a>.


      The search autocomplete used on GOV.UK should follow the same approach to improve accessibility and bring consistency.'



# Evidence and insights for this component
# List out all past documentation/supporting material with regards to or realted to this component. It can include (1) past design documentation, (2) research findings, and (3) presentations.
insights:
  # To add additional insights duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # A description is REQUIRED in order for this information to render on the page.
    date: June 2024 
    description:
      Pop up research analysis on autocomplete (and filters) – Search team
    title: GOV.UK Search Autocomplete + filters pop up research findings
    link: https://docs.google.com/presentation/d/1Xkhc5ohCzFBwoFcby1CGfX_FwLRrYjIEf9VdgGVbdtE/edit?pli=1#slide=id.g10d42026b8_2_0
    documentFormat: Google Slides
  1:
    # A description is REQUIRED in order for this information to render on the page.
    date: June 2024 
    description:
      Search team desk research analysis on how search is used on GOV.UK (before autocomplete was implemented) – Search team
    title: Site search desk research and analytics findings
    link: https://docs.google.com/presentation/d/1IoupQiEuCLMc-AOEUntGeKwQPIG-cWmnleuHOgujOuI/edit?pli=1#slide=id.g10d42026b8_2_0
    documentFormat: Google Slides
  2:
    # A description is REQUIRED in order for this information to render on the page.
    date: July 2024
    description:
      Design System DAC audit reporting issues with search autocomplete dropdown – Design System team
    title: Autocomplete - Lack of visual cue for results
    link: https://github.com/alphagov/govuk-design-system/issues/4015
    documentFormat: Github


# Accessibilty criteria for this component
# List out the accessibility for this component.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
accessibilty:
  '<a class="govuk-link" href="https://components.publishing.service.gov.uk/component-guide/search_with_autocomplete" target="_blank" rel="noopener noreferrer"> Read accessibility criteria on Github (opens in a new tab)</a>.'

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