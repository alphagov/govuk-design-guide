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
  parent: Frontend templates

# Step 4: Input data points according to fields below to the best of your ability. Any fields without any data points will not be displayed on the website.

# Name of the frontend tempalte
# This is the name of the frontend template (ex. Homepage). It is required to display the title on the page, in the meta data, and in the left-hand navigation menu of the frontend templates page.
title: Detailed guide

# Description of the frontend template
# This briefly describes what the frontend template is. It is required to display the description on the page, and in the <head> meta description.
description: 'Detailed guides tell users the steps they need to take to complete a clearly defined task. They are usually aimed at specialist or professional audiences.'

# Embedding the figma file of the frontend template
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this frontend template.

# How the frontend template works
# Briefly descibe how this frontend template works. For instance, listing out what end-user can do on a page that uses this frontend template, as well as it's relation to other pages and its associated frontend templates on GOV.UK.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  'Use this format for content that is regularly updated, for example if the process to complete a task changes.


  A detailed guide should:

  - answer a specific, task-oriented user need

  - be factual guidance the government has a duty to provide, not advice

  

  ### Audience

  This content is aimed at practitioners, for example teachers or accountants.


  Content containing background information about why a user needs to complete a task or the history behind it should be in a policy paper.


  Consider if the content should be in mainstream guidance instead.'

# Live examples of webpages that use this frontend template
# List out all the pages on GOV.UK that use this frontend template, by providing: (1) the title of the page, (2) the URL of the page, and (3) indicate whether the page is in Welsh in order for assistive technology to read out the page title correctly.
examples:
  # To add additional examples duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Online immigration status (eVisa)'
    link: https://www.gov.uk/guidance/online-immigration-status-evisa
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  1:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Cost of Living Payments 2023 to 2024'
    link: https://www.gov.uk/guidance/cost-of-living-payment
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  2:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Using your UK Visas and Immigration account'
    link: https://www.gov.uk/guidance/using-your-uk-visas-and-immigration-account
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
    
# The Content Data (Production) URL this frontend template
# Filter the document type in content data and copy the URL in your browser's address bar.
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=detailed_guide&organisation_id=all

# How is this frontend template built
# This will display all the underlying technologies that make-up this template.
contentSchema:
  # The GOV.UK [browser extension](https://github.com/alphagov/govuk-browser-extension) can help indentify the content schema for this frontend template.
  title: detailed_guide
  link: https://docs.publishing.service.gov.uk/content-schemas/detailed_guide.html

contentType:
  # The GOV.UK [browser extension](https://github.com/alphagov/govuk-browser-extension) can help indentify the content type (also known as document type) for this frontend template.
  title: detailed_guide
  link: https://docs.publishing.service.gov.uk/document-types/detailed_guide.html

publishingApp:
  # The GOV.UK [browser extension](https://github.com/alphagov/govuk-browser-extension) can help indentify the publishing app associated with adding content to this frontend template.
  # Publishing app options:
    # collections publisher
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
  whitehall

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
  frontend

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
      'Topics taxonomy tags > Change tags'
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
      publisher
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Title (required)'
  3:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Lead paragraph'
    componentURL: https://components.publishing.service.gov.uk/component-guide/lead_paragraph
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      publisher
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      Summary (required)
  4:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Translation navigation'
    componentURL: https://components.publishing.service.gov.uk/component-guide/translation_nav
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      publisher
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Translations > Add translation'
  5:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      '[Metadata block](https://components.publishing.service.gov.uk/component-guide/metadata) is based on the organisation the publisher has set within Whitehall publisher'
    componentURL: #If a URL is not entered in the  field above (componentName) then delete this comment before entering the URL of the documentation for said component.
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      publisher
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Lead organisations > Lead organisation [i] and Supporting organisations'
  6:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Single page notification button'
    componentURL: https://components.publishing.service.gov.uk/component-guide/single_page_notification_button
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      auto
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  7:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      '[Devolved Nations](https://components.publishing.service.gov.uk/component-guide/devolved_nations) component appears if the option `Applies to all UK nations` is not selected'
    componentURL: #If a URL is not entered in the  field above (componentName) then delete this comment before entering the URL of the documentation for said component.
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      publisher
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Excluded nations (required)'
  8:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Contents list with body'
    componentURL: https://govuk-government-frontend.herokuapp.com/component-guide/contents_list_with_body
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      publisher
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Body (required)'
  9:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Print link'
    componentURL: https://components.publishing.service.gov.uk/component-guide/print_link
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
      '[Back to top](https://govuk-government-frontend.herokuapp.com/component-guide/back_to_top) - only appears if the page is extremely long'
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
  11:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      '[Published dates](https://govuk-government-frontend.herokuapp.com/component-guide/published_dates) is generated if content has been published elsewhere'
    componentURL: #If a URL is not entered in the  field above (componentName) then delete this comment before entering the URL of the documentation for said component.
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      publisher
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'First published date (required)'
  12:
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
      publisher
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      'Topical events'
  13:
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
      # Delete this comment before enter how this component is generated on the page.
    input:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.
  14:
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
  15:
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

# Evidence and insights for this frontend template
# List out all past documentation/supporting material with regards to or realted to this frontend template. It can include (1) past design documentation, (2) research findings, and (3) presentations.
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

# Existing issues with this frontend template
# List of all the issues that are associated with this frontend template, (1) containing the title used to describe the issue on GitHub, and (2) the link to the GitHub issue itself.
issues:
  # To add additional issues duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: #Delete this comment before entering the title of the GitHub issue.
    link: #Delete this comment before entering the URL of the corresponding GitHub issue.
---