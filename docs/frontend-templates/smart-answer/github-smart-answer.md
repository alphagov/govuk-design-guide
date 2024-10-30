---
# This file is a template to document a new frontend template within the GOV.UK Publishing Design Guide website.
layout: frontend-template-documentation
sectionKey: Frontend templates

# Step 1: Duplicate and rename this file to the proposed frontend template you want to include in the Publishing Design Guide website.
# When duplicating and renaming this file use lowercase and replace any spaces with a dash (ie. -)

# Step 2: Set "eleventyExcludeFromCollections" to "false". This will ensure that the code snippet is commented out and a page will be display withinin the Publishing Design Guide.
eleventyExcludeFromCollections: false

# Step 3: Establish the relationship of this frontend template.
# The relationship between frontend templates will be demonstrated visually via levels on the left-hand navigation menu. For instance, "GitHub smart answers" is only revealed when the end-user selects "Smart answer" since "GitHub smart answers" a child template to the "Smart answer" frontend template.
eleventyNavigation:
  # If this frontend template is not associated with or a child to another frontend template, set the field below ("parent") to "Frontend templates"
  parent: Smart answer

# Step 4: Input data points according to fields below to the best of your ability. Any fields without any data points will not be displayed on the website.

# Name of the frontend tempalte
# This is the name of the frontend template (ex. Homepage). It is required to display the title on the page, in the meta data, and in the left-hand navigation menu of the frontend templates page.
title: GitHub smart answer

# Description of the frontend template
# This briefly describes what the frontend template is. It is required to display the description on the page, and in the <head> meta description.
description: A GitHub smart answer are more complex as it can contain varibles or calculations.

# Embedding the figma file of the frontend template
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this frontend template.

# How the frontend template works
# Briefly descibe how this frontend template works. For instance, listing out what end-user can do on a page that uses this frontend template, as well as it's relation to other pages and its associated frontend templates on GOV.UK.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  'A GitHub smart answer presents the end-user a series of questions, which can contain complicated variables or calculation. Based on their responses, the GitHub smart answer will channel the end-user to a certain outcome.


  Github smart answers are made up of:

  - logic in Ruby (`.rb`) files

  - data in YAML (`.yml`) files
  
  - content in Ruby (`.erb`) templates'

# Live examples of webpages that use this frontend template
# List out all the pages on GOV.UK that use this frontend template, by providing: (1) the title of the page, (2) the URL of the page, and (3) indicate whether the page is in Welsh in order for assistive technology to read out the page title correctly.
examples:
  # To add additional examples duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Check if you need a UK visa'
    link: https://www.gov.uk/check-uk-visa
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  1:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Check your State Pension age'
    link: https://www.gov.uk/state-pension-age
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  2:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Calculate holiday entitlement'
    link: https://www.gov.uk/calculate-your-holiday-entitlement
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
    
# The Content Data (Production) URL this frontend template
# Filter the document type in content data and copy the URL in your browser's address bar.
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=smart_answer&organisation_id=all

# How is this frontend template built
# This will display all the underlying technologies that make-up this template.
contentSchema:
  # The GOV.UK [browser extension](https://github.com/alphagov/govuk-browser-extension) can help indentify the content schema for this frontend template.
  title: smart_answer
  link: https://docs.publishing.service.gov.uk/content-schemas/smart_answer.html

contentType:
  # The GOV.UK [browser extension](https://github.com/alphagov/govuk-browser-extension) can help indentify the content type (also known as document type) for this frontend template.
  title: smart_answer
  link: https://docs.publishing.service.gov.uk/document-types/smart_answer.html

publishingApp:
  # The GOV.UK [browser extension](https://github.com/alphagov/govuk-browser-extension) can help indentify the publishing app associated with adding content to this frontend template.
  # Publishing app options:
    # collections publisher
    # contacts admin
    # content publisher
    # content tagger
    # local links manager
    # mainstream publisher
    # manuals publisher
    # maslow
    # service manual publisher
    # short url manager
    # special route publisher
    # specialist publisher
    # travel advice publisher
    # whitehall
  #Delete this comment before entering the name of the publishing app.

renderingApp:
  # The GOV.UK [browser extension](https://github.com/alphagov/govuk-browser-extension) can help indentify which rendering app is used to generate this frontend template.
  # Rendring app options:
    # collections
    # email alert frontend
    # feedback
    # finder frontend
    # frontend
    # government frontend
    # smart answers
    # static
  smart answers

# Components that make-up this frontend template
# List out all the components that make-up this frontend template, by (1) providing the name of the component, (2) a link to the documentation for said component, (3) how is this component generated on the page and (4) the associated publishing input fields within the publishing app.
components:
  # To add additional components duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Layout super navigation header'
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_super_navigation_header
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      auto
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  1:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Contextual breadcrumbs'
    componentURL: https://components.publishing.service.gov.uk/component-guide/contextual_breadcrumbs
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      auto
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  2:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Page title'
    componentURL: https://components.publishing.service.gov.uk/component-guide/title
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      hardcode
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  3:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Govspeak content'
    componentURL: https://components.publishing.service.gov.uk/component-guide/govspeak
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      hardcode
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  4:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Button'
    componentURL: https://components.publishing.service.gov.uk/component-guide/button
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      hardcode
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  5:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Heading'
    componentURL: https://components.publishing.service.gov.uk/component-guide/heading
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      hardcode
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  6:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      '[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual footer](https://components.publishing.service.gov.uk/component-guide/contextual_footer)'
    componentURL: #If a URL is not entered in the  field above (componentName) then delete this comment before entering the URL of the documentation for said component.
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      hardcode
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  7:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      '[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)'
    componentURL: #If a URL is not entered in the  field above (componentName) then delete this comment before entering the URL of the documentation for said component.
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      hardcode
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  8:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Feedback'
    componentURL: https://components.publishing.service.gov.uk/component-guide/feedback
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      auto
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  9:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Layout footer'
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_footer
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      auto
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  10:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      '[Select](https://components.publishing.service.gov.uk/component-guide/select) can be used in order for end-user to provide their respone'
    componentURL: #If a URL is not entered in the  field above (componentName) then delete this comment before entering the URL of the documentation for said component.
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      hardcode
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  11:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      '[Form radio button](https://components.publishing.service.gov.uk/component-guide/radio) can be used in order for end-user to provide their respone'
    componentURL: #If a URL is not entered in the  field above (componentName) then delete this comment before entering the URL of the documentation for said component.
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      hardcode
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  12:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      '[Summary list](https://components.publishing.service.gov.uk/component-guide/summary_list) can be used in order for end-user to provide their respone'
    componentURL: #If a URL is not entered in the  field above (componentName) then delete this comment before entering the URL of the documentation for said component.
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      auto
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  13:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      '[Error summary](https://components.publishing.service.gov.uk/component-guide/error_summary) appears whenever a required field is not entered or the incorrect information is entered by the end-user'
    componentURL: #If a URL is not entered in the  field above (componentName) then delete this comment before entering the URL of the documentation for said component.
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      auto
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  14:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      '[Step by step navigation](https://components.publishing.service.gov.uk/component-guide/step_by_step_nav) when displayed within [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)'
    componentURL: #If a URL is not entered in the  field above (componentName) then delete this comment before entering the URL of the documentation for said component.
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      publisher
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      '[collections-publisher](https://docs.publishing.service.gov.uk/repos/collections-publisher.html) > Where to show this step by step > Sidebar settings > Sidebar content of page'
  15:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      '[Form date input](https://components.publishing.service.gov.uk/component-guide/date_input) can be used in order for end-user to provide their respone'
    componentURL: #If a URL is not entered in the  field above (componentName) then delete this comment before entering the URL of the documentation for said component.
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      hardcode
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.

# Evidence and insights for this frontend template
# List out all past documentation/supporting material with regards to or realted to this frontend template. It can include (1) past design documentation, (2) research findings, and (3) presentations.
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

# Existing issues with this frontend template
# List of all the issues that are associated with this frontend template, (1) containing the title used to describe the issue on GitHub, and (2) the link to the GitHub issue itself.
issues:
  # To add additional issues duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: #Delete this comment before entering the title of the GitHub issue.
    link: #Delete this comment before entering the URL of the corresponding GitHub issue.
---