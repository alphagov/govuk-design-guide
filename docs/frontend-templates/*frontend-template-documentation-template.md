---
# This file is a template to document a new frontend template within the GOV.UK Design Library website.
layout: frontend-template-documentation
sectionKey: Frontend templates

# Step 1: Duplicate and rename this file to the proposed frontend template you want to include in the Design Library website.
# When duplicating and renaming this file use lowercase and replace any spaces with a dash (ie. -)

# Step 2: Set "eleventyExcludeFromCollections" to "false". This will ensure that the code snippet is commented out and a page will be display withinin the design library.
eleventyExcludeFromCollections: true

# Step 3: Establish the relationship of this frontend template.
# The relationship between frontend templates will be demonstrated visually via levels on the left-hand navigation menu. For instance, "GitHub smart answers" is only revealed when the end-user selects "Smart answer" since "GitHub smart answers" a child template to the "Smart answer" frontend template.
eleventyNavigation:
  # If this frontend template is not associated with or a child to another frontend template, set the field below ("parent") to "Frontend templates"
  parent: #Delete this comment before entering the name of the parent frontend template.

# Step 4: Input data points according to fields below to the best of your ability. Any fields without any data points will not be displayed on the website.

# Name of the frontend tempalte
# This is the name of the frontend template (ex. Homepage). It is required to display the title on the page, in the meta data, and in the left-hand navigation menu of the frontend templates page.
title: #Delete this comment before entering the name of the frontend template.

# Description of the frontend template
# This briefly describes what the frontend template is. It is required to display the description on the page, and in the <head> meta description.
description: #Delete this comment before entering the description of the frontend template.

# Embedding the figma file of the frontend template
# This will display a Figma embed on the page.
# To add a Figma embed, copy only the URL within the embed snippet.
figmaLink: #Delete this comment before entering the Figma embed URL of the Figma representaiton of this frontend template.

# How the frontend template works
# Briefly descibe how this frontend template works. For instance, listing out what end-user can do on a page that uses this frontend template, as well as it's relation to other pages and its associated frontend templates on GOV.UK.
# You MUST wrap this in double quotation marks (ie. " "), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  #Delete this comment before entering how this frontend template works.

# Live examples of webpages that use this frontend template
# List out all the pages on GOV.UK that use this frontend template, by providing: (1) the title of the page, (2) the URL of the page, and (3) indicate whether the page is in Welsh in order for assistive technology to read out the page title correctly.
examples:
  # To add additional examples duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: #Delete this comment before entering the page title of the webpage that uses this frontend template.
    link: #Delete this comment before entering the URL of the webpage that uses this frontend template.
    welsh:
      # Options on whether the webpage using this frontend template is in Welsh:
        # true = The webpage is in Welsh
        # false = The webpage is not in Welsh, but rather in English
      #Delete this comment before entering whether the webpage is in Welsh or not.
    
# The Content Data (Production) URL this frontend template
# Filter the document type in content data and copy the URL in your browser's address bar.
contentDataLink:  #Delete this comment before entering Content Data URL assocaited with this frontend template.

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
      # You MUST wrap this in double quotation marks (ie. " "), since markdown can be used to enter this information.
      #Delete this comment before entering the name of the component used within this pattern.
    componentURL: #If a URL is not entered in the  field above (componentName) then delete this comment before entering the URL of the documentation for said component.
    generated:
      # Options how said component is generated page:
        # auto = "Autogenerated in frontend template"
        # publisher = "Customized by publisher"
        # hardcode = "Hardcoded by developer"
      # Delete this comment before enter how this component is generated on the page.
    input:
      # You MUST wrap this in double quotation marks (ie. " "), since markdown can be used to enter this information.
      #If this component can be generated by a publisher via a publihing app the delete this comment before entering that infomration.

# Evidence and insights for this frontend template
# List out all past documentation/supporting material with regards to or realted to this frontend template. It can include (1) past design documentation, (2) research findings, and (3) presentations.
insights:
  # To add additional insights duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: #Delete this comment before entering the name of the insight document.
    link: #Delete this comment before entering the URL of the insight document.
    documentFormat: #Delete this comment before entering the format of the insight document. Example: (1) Google Doc, (2) Google Sheets, and (3) Google Slides.
    description:
      # You MUST wrap this in double quotation marks (ie. " "), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      #Delete this comment before entering a brief summary about the document being referred.
    date: #Delete this comment before entering the date when the document was published.

# How to report an issue with this frontend template
# This will display instrucions on how to report an issue via GitHub.
# Consult with a developer to confirm the GitHub where the frontend template's codebase exists.
githubIssueLink: #Delete this comment before entering the URL of the page to create a new GitHub issue.

# Existing issues with this frontend template
# List of all the issues that are associated with this frontend template, (1) containing the title used to describe the issue on GitHub, and (2) the link to the GitHub issue itself.
issues:
  # To add additional issues duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: #Delete this comment before entering the title of the GitHub issue.
    link: #Delete this comment before entering the URL of the corresponding GitHub issue.
---