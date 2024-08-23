---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Smart answer
title: Simple smart answer
description: A simple smart answer are simple in nature and is can be built and managed by publishers.
figmaLink:
howItWorks:
  " A simple smart answer presents the end-user a series of questions that channels them to a certain outcome based on their responses.
  

  Simple smart answers are built and edited in Mainstream Publisher. 


  We use this format if the tool doesn’t need any complicated variables or calculations.


  You don’t need a developer to make changes to a simple smart answer. They’re built and edited in Mainstream Publisher, so they follow the same workflow as any other piece of mainstream content."
examples:
  0:
    title: Tell DVLA you've sold, transferred or bought a vehicle
    link: https://www.gov.uk/sold-bought-vehicle
  1:
    title: Contact UK Visas and Immigration for help
    link: https://www.gov.uk/contact-ukvi-inside-outside-uk
  2:
    title: Contact DVLA
    link: https://www.gov.uk/contact-the-dvla
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=simple_smart_answer&organisation_id=all
contentSchema:
  title: simple_smart_answer
  link: https://docs.publishing.service.gov.uk/content-schemas/simple_smart_answer.html
contentType:
  title: simple_smart_answer
  link: https://docs.publishing.service.gov.uk/document-types/simple_smart_answer.html
publishingApp: mainstream publisher
renderingApp: frontend
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
    input: Tagging > Breadcrumb
  2:
    componentName: Page title
    componentURL: https://components.publishing.service.gov.uk/component-guide/title
    generated: publisher
    input: Title
  3:
    componentName: Govspeak content
    componentURL: https://components.publishing.service.gov.uk/component-guide/govspeak
    generated: publisher
    input: Body
  4:
    componentName: Button
    componentURL: https://components.publishing.service.gov.uk/component-guide/button
    generated: publisher
    input: Start button text
  5:
    componentName: Title for each question is using [Form radio button with page heading and caption](https://components.publishing.service.gov.uk/component-guide/radio/with_page_heading_and_caption) component
    componentURL:
    generated: publisher
    input: Question[i] > Title
  6:
    componentName: "[Govspeak content](https://components.publishing.service.gov.uk/component-guide/govspeak) is used to provide extra information for each question in the smart answer"
    componentURL:
    generated: publisher
    input: Question[i] > Optional extra information
  7:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual footer](https://components.publishing.service.gov.uk/component-guide/contextual_footer)"
    componentURL: 
    generated: publisher
    input: Tagging > Mainstream browse pages
  8:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)"
    componentURL: 
    generated: publisher
    input: Tagging > Related content items
  9:
    componentName: Feedback
    componentURL: https://components.publishing.service.gov.uk/component-guide/feedback
    generated: auto
    input:
  10:
    componentName: Layout footer
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_footer
    generated: auto
    input:
  11:
    componentName: "[Form radio button](https://components.publishing.service.gov.uk/component-guide/radio) can be used in order for end-user to provide their respone"
    componentURL: 
    generated: publisher
    input: Question[i] > Answer[i]
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
issueLink:
---