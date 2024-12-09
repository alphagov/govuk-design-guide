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
title: Mainstream browse

# Description of the frontend template
# This briefly describes what the frontend template is. It is required to display the description on the page, and in the <head> meta description.
description: Mainstream browse is a topic system that groups together content by popular topics on GOV.UK.

# Embedding the figma file of the frontend template
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this frontend template.

# How the frontend template works
# Briefly descibe how this frontend template works. For instance, listing out what end-user can do on a page that uses this frontend template, as well as it's relation to other pages and its associated frontend templates on GOV.UK.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  'There are two levels of mainstream browse pages:
    
    - [Level one](./level-one) - Topic (parent)
    
    - [Level two](./level-two) - Subtopic (child) 
  
  
    Mainstream browse topics are listed in the main menu and on the GOV.UK homepage under ‘Services and information’ heading.'

# Live examples of webpages that use this frontend template
# List out all the pages on GOV.UK that use this frontend template, by providing: (1) the title of the page, (2) the URL of the page, and (3) indicate whether the page is in Welsh in order for assistive technology to read out the page title correctly.
examples:
  # To add additional examples duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Driving and transport - Level one browse page'
    link: https://www.gov.uk/browse/driving
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  1:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Vehicle, tax MOT and insurance - Curated level two browse page'
    link: https://www.gov.uk/browse/driving/vehicle-tax-mot-insurance
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  2:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'School admissions and transport to school - Alphabetical level two browse page'
    link: https://www.gov.uk/browse/education/school-admissions-transport
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
    
# The Content Data (Production) URL this frontend template
# Filter the document type in content data and copy the URL in your browser's address bar.
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=mainstream_browse_page&organisation_id=all

# How is this frontend template built
# This will display all the underlying technologies that make-up this template.
contentSchema:
  # The GOV.UK [browser extension](https://github.com/alphagov/govuk-browser-extension) can help indentify the content schema for this frontend template.
  title: #Delete this comment before entering the name of the content schema.
  link: #Delete this comment before entering the developer docs URL of this content schema.

contentType:
  # The GOV.UK [browser extension](https://github.com/alphagov/govuk-browser-extension) can help indentify the content type (also known as document type) for this frontend template.
  title: #Delete this comment before entering the name of the content type (also known as document type).
  link: #Delete this comment before entering the developer docs URL of this content type/document type.

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
  #Delete this comment before entering the name of the rendering app.

# Components that make-up this frontend template
# List out all the components that make-up this frontend template, by (1) providing the name of the component, (2) a link to the documentation for said component, (3) how is this component generated on the page and (4) the associated publishing input fields within the publishing app.
components:
  # To add additional components duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # The componentName is REQUIRED in order for this information to be displayed on the page.
    componentName:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information.
      #Delete this comment before entering the name of the component used within this pattern.
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

# Evidence and insights for this frontend template
# List out all past documentation/supporting material with regards to or realted to this frontend template. It can include (1) past design documentation, (2) research findings, and (3) presentations.
insights:
  # To add additional insights duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: July 2023
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Guidance on how to curate mainstream browse pages'
    title: 'How to curate mainstream browse pages'
    link: https://docs.google.com/presentation/d/1Kp69ojze0kbyIaE2rAyyMIB9hfOBiXNCwbQ37TxQyYQ/edit
    documentFormat: Google Slides
  1:
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: August 2022
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
     'Findings after A/B test with introduction of accordion component to Mainstream browse page'
    title: 'GOV.UK Navigation mainstream browse follow-up A/B test'
    link: https://docs.google.com/presentation/d/1poSeFuf2KMR2gzMI3A2ePT2xWi7n6QXMf6cBo8aHiZ4/edit?usp=sharing
    documentFormat: Google Slides
  2:
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: June 2022
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'This document sets out how the new topic pages will look and work, why we are replacing the current Mainstream Browse topic page, and what we plan to do in the future'
    title: 'GOV.UK Navigation mainstream browse A/B test'
    link: https://docs.google.com/presentation/d/1s1d4BYJZaZmt5J0CFORRmMTKPush88_yiT7_OR8WxHw/edit?usp=sharing
    documentFormat: Google Slides
  3:
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: January 2022
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Early-thinking overhaul design of Mainstream browse page replacing miller columns and merging Specialist topics into updated topic pages'
    title: 'Topic page design implementation'
    link: https://docs.google.com/document/d/1MbhUjXLMUvEvqRU_w5S7RD9_wVhB3LkcdfDIxnSOz4g/edit?usp=sharing
    documentFormat: Google Docs
  4:
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: August 2018
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Replacing Mainstream Browse taxonomy and replace with new site-wide taxonomy'
    title: What is Mainstream Browse
    link: https://docs.google.com/document/d/13IkO2ZnknFDiNTn-z9E4LwCbTTN1Dnw2xcfO3iU_v9E/edit#heading=h.yw8vk47ou0r5
    documentFormat: Google Docs
  5:
    # Both title and link are REQUIRED in order for this information to render on the page.
    date: August 2018
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'How the design sprint will run for Mainstream Browse pages'
    title: 'Mainstream Browse design sprint'
    link: https://docs.google.com/document/d/1aCUbrdqaCCF6mblDfddw1Wck_DmTsHADMYR-Ny-9Xw4/edit#heading=h.yo2pwekzv7t0
    documentFormat: Google Docs

# Existing issues with this frontend template
# List of all the issues that are associated with this frontend template, (1) containing the title used to describe the issue on GitHub, and (2) the link to the GitHub issue itself.
issues:
  # To add additional issues duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: #Delete this comment before entering the title of the GitHub issue.
    link: #Delete this comment before entering the URL of the corresponding GitHub issue.
---