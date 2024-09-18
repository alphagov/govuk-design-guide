---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Smart answer
title: GitHub smart answer
description: A GitHub smart answer are more complex as it can contain varibles or calculations.
figmaLink:
howItWorks:
  "A GitHub smart answer presents the end-user a series of questions, which can contain complicated variables or calculation. Based on their responses, the GitHub smart answer will channel the end-user to a certain outcome.


  Github smart answers are made up of:

  - logic in Ruby (`.rb`) files

  - data in YAML (`.yml`) files
  
  - content in Ruby (`.erb`) templates"
examples:
  0:
    title: Check if you need a UK visa
    link: https://www.gov.uk/check-uk-visa
  1:
    title: Check your State Pension age
    link: https://www.gov.uk/state-pension-age
  2:
    title: Calculate holiday entitlement
    link: https://www.gov.uk/calculate-your-holiday-entitlement
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=smart_answer&organisation_id=all
contentSchema:
  title: smart_answer
  link: https://docs.publishing.service.gov.uk/content-schemas/smart_answer.html
contentType:
  title: smart_answer
  link: https://docs.publishing.service.gov.uk/document-types/smart_answer.html
publishingApp:
renderingApp: smart answers
components:
  0:
    componentName: Layout super navigation header
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_super_navigation_header
    generated: auto
    input:
  1:
    componentName: Contextual breadcrumbs
    componentURL: https://components.publishing.service.gov.uk/component-guide/contextual_breadcrumbs
    generated: auto
    input:
  2:
    componentName: Page title
    componentURL: https://components.publishing.service.gov.uk/component-guide/title
    generated: hardcode
    input:
  3:
    componentName: Govspeak content
    componentURL: https://components.publishing.service.gov.uk/component-guide/govspeak
    generated: hardcode
    input:
  4:
    componentName: Button
    componentURL: https://components.publishing.service.gov.uk/component-guide/button
    generated: hardcode
    input:
  5:
    componentName: Heading
    componentURL: https://components.publishing.service.gov.uk/component-guide/heading
    generated: hardcode
    input:
  6:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual footer](https://components.publishing.service.gov.uk/component-guide/contextual_footer)"
    componentURL: 
    generated: hardcode
    input:
  7:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)"
    componentURL: 
    generated: hardcode
    input:
  8:
    componentName: Feedback
    componentURL: https://components.publishing.service.gov.uk/component-guide/feedback
    generated: auto
    input:
  9:
    componentName: Layout footer
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_footer
    generated: auto
    input:
  10:
    componentName: "[Select](https://components.publishing.service.gov.uk/component-guide/select) can be used in order for end-user to provide their respone"
    componentURL: 
    generated: hardcode
    input:
  11:
    componentName: "[Form radio button](https://components.publishing.service.gov.uk/component-guide/radio) can be used in order for end-user to provide their respone"
    componentURL: 
    generated: hardcode
    input:
  12:
    componentName: "[Summary list](https://components.publishing.service.gov.uk/component-guide/summary_list) can be used in order for end-user to provide their respone"
    componentURL: 
    generated: auto
    input:
  13:
    componentName: "[Error summary](https://components.publishing.service.gov.uk/component-guide/error_summary) appears whenever a required field is not entered or the incorrect information is entered by the end-user"
    componentURL: 
    generated: auto
    input:
  14:
    componentName: "[Step by step navigation](https://components.publishing.service.gov.uk/component-guide/step_by_step_nav) when displayed within [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)"
    componentURL: 
    generated: publisher
    input: "[collections-publisher](https://docs.publishing.service.gov.uk/repos/collections-publisher.html) > Where to show this step by step > Sidebar settings > Sidebar content of page"
  15:
    componentName: "[Form date input](https://components.publishing.service.gov.uk/component-guide/date_input) can be used in order for end-user to provide their respone"
    componentURL: 
    generated: hardcode
    input:
insights:
  0:
    title:
    link:
    description:
    date:
issues:
  0:
    title:
    link:
githubIssueLink:
---