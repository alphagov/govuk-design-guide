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
title: Finder

# Description of the frontend template
# This briefly describes what the frontend template is. It is required to display the description on the page, and in the <head> meta description.
description: 'A Finder is a scoped search on a single dataset with filters to modify the results.'

# Embedding the figma file of the frontend template
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this frontend template.

# How the frontend template works
# Briefly descibe how this frontend template works. For instance, listing out what end-user can do on a page that uses this frontend template, as well as it's relation to other pages and its associated frontend templates on GOV.UK.
# You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  '### What is a finder

  Depending on context, “finder” can mean:

  - The “finder pattern”
  
  - The “finder technology”, ie. a product used to generate finders using content-store and finder-frontend)
  
  - A specific finder including the content it exposes is sometimes called a “finder” by editors

  ### What does a finder do?

  Finders allow users to easily browse a comprehensive library of similarly formatted specialist documents relating to a particular topic.


  Finders help users find a specific document, or set of documents, within a topic.


  Finders also help users who need to know when a document is published or updated relating to a specific topic or subtopic.'

# Live examples of webpages that use this frontend template
# List out all the pages on GOV.UK that use this frontend template, by providing: (1) the title of the page, (2) the URL of the page, and (3) indicate whether the page is in Welsh in order for assistive technology to read out the page title correctly.
examples:
  # To add additional examples duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Case studies: Real-life examples of government activity'
    link: https://www.gov.uk/government/case-studies
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  1:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Departments, agencies and public bodies'
    link: https://www.gov.uk/government/organisations
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  2:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Groups'
    link: https://www.gov.uk/government/groups
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  3:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Contact HM Revenue & Customs'
    link: https://www.gov.uk/government/organisations/hm-revenue-customs/contact
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  4:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'All ministers and senior officials on GOV.UK'
    link: https://www.gov.uk/government/people
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  5:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Search'
    link: https://www.gov.uk/search/all
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  6:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'AAIB: Air Accidents Investigation Branch reports'
    link: https://www.gov.uk/aaib-reports
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  7:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Statistical data sets'
    link: https://www.gov.uk/government/statistical-data-sets
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  8:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Guidance and regulation'
    link: https://www.gov.uk/search/guidance-and-regulation
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  9:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Topical Events'
    link: https://www.gov.uk/government/topical-events
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
  10:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: 'Worldwide organisations'
    link: https://www.gov.uk/world/organisations
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      false
    
# The Content Data (Production) URL this frontend template
# Filter the document type in content data and copy the URL in your browser's address bar.
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=finder&organisation_id=all

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
    # A description is REQUIRED in order for this information to render on the page.
    date: May 2024
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'An analysis led to the recommendataion to Migrate 10 finders to Vertex in order to improve keyword search relevance. Some further analysis is needed before a decision can be made.'
    title: 'Should we move finders to Google Vertex AI Search?'
    link: https://docs.google.com/document/d/1x84j4IvpQcXy8WpG2Mx9YrO5GFZeOYOToiSzK9ax6Uk/edit?usp=sharing
    documentFormat: Google Docs
  1:
    # A description is REQUIRED in order for this information to render on the page.
    date: July 2024
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'This document outlines the reasons and benefits to improve specialist finder'
    title: 'Proposal to improve Specialist Finder development and efficiency'
    link: https://docs.google.com/document/d/1hZD3eJjX3qWL6ntWV_aUq0U43m5LIEblwAeIRoUY7x0/edit?usp=sharing
    documentFormat: Google Docs
  2:
    # A description is REQUIRED in order for this information to render on the page.
    date: November 2025
    description:
      # You MUST wrap this in single quotation marks (ie. ' '), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      'Following the brand refresh, the page headers, which use the brand blue background, didn’t contrast well visually with the new Welcome to GOV.UK  header. Several options were explored, as shown in the attached Figma file, and the header was updated to a 95% tint of the brand blue for a more balanced look.'
    title: 'Blue header with blue banners'
    link: https://www.figma.com/design/MVhsnvkYk12VSNnxTyeYaI/Blue-header-with-blue-banners?node-id=0-1&p=f
    documentFormat: Figma 

# Existing issues with this frontend template
# List of all the issues that are associated with this frontend template, (1) containing the title used to describe the issue on GitHub, and (2) the link to the GitHub issue itself.
issues:
  # To add additional issues duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: Different component is being used as the page title on Site search finder
    link: #Delete this comment before entering the URL of the corresponding GitHub issue.
  1:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: Inconsistent top-margin and bottom-margin for page title
    link: #Delete this comment before entering the URL of the corresponding GitHub issue.
---