---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Finder
title: Departments, agencies and public bodies
description: A directory of all the departments, agencies and public bodies within the UK government
howItWorks:
  This finder lists all the departments, agencies and public bodies within the UK government. End-users can use the search component to filter the returned results on the page.
examples:
  0:
    title: Departments, agencies and public bodies
    link: https://www.gov.uk/government/organisations
contentSchema:
  title: organisations_homepage
  link: https://docs.publishing.service.gov.uk/content-schemas/organisations_homepage.html
contentType:
  title: finder
  link: https://docs.publishing.service.gov.uk/document-types/finder.html
components:
  0:
    componentName: Layout super navigation header
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_super_navigation_header
    generated: auto
    input: 
  1:
    componentName: Breadcrumbs
    componentURL: https://components.publishing.service.gov.uk/component-guide/breadcrumbs
    generated: auto
    input: 
  2:
    componentName: Heading
    componentURL: https://components.publishing.service.gov.uk/component-guide/heading
    generated: auto
    input:
  3:
    componentName: "[Form input](https://components.publishing.service.gov.uk/component-guide/input) is being used as search field"
    componentURL:
    generated: auto
    input:
  4:
    componentName: Feedback
    componentURL: https://components.publishing.service.gov.uk/component-guide/feedback
    generated: auto
    input:
  5:
    componentName: Layout footer
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_footer
    generated: auto
    input:
  6:
    componentName: Page title
    componentURL: https://components.publishing.service.gov.uk/component-guide/title
    generated: auto
    input:
  7:
    componentName: "[Details](https://components.publishing.service.gov.uk/component-guide/details) is displayed if an  organization is sponsored by another organization"
    componentURL:
    generated: publisher
    input: Sponsoring organisation
  8:
    componentName: Big number
    componentURL: https://components.publishing.service.gov.uk/component-guide/big_number
    generated: auto
    input:
  9:
    componentName: Organisation logo
    componentURL: https://components.publishing.service.gov.uk/component-guide/organisation_logo
    generated: publisher
    input: Logo formatted name (required), Logo crest (required), and Brand color
---