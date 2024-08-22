---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: About
title: Topical events
description: The topical event's about page provides  detailed information on what the government is doing about said topical event.
howItWorks:
  "The Topical event About page is a child to the [Topical event frontend template](../../topical-events). For example:
  
  - [The UK government's response to the Russian invasion of Ukraine](https://www.gov.uk/government/topical-events/russian-invasion-of-ukraine-uk-government-response/about) **(child)**
  
  - [Russian invasion of Ukraine: UK government response](https://www.gov.uk/government/topical-events/russian-invasion-of-ukraine-uk-government-response) **(parent)**"
examples:
  0:
    title: European Political Community meeting 2024
    link: https://www.gov.uk/government/topical-events/european-political-community-meeting-2024/about
  1:
    title: The UK government's response to the Russian invasion of Ukraine
    link: https://www.gov.uk/government/topical-events/russian-invasion-of-ukraine-uk-government-response/about
  2:
    title: UK action to combat Daesh
    link: https://www.gov.uk/government/topical-events/daesh/about
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=topical_event_about_page&organisation_id=all
contentSchema:
  title: topical_event_about_page
  link: https://docs.publishing.service.gov.uk/content-schemas/topical_event_about_page.html
contentType:
  title: topical_event_about_page
  link: https://docs.publishing.service.gov.uk/document-types/topical_event_about_page.html
publishingApp: whitehall
renderingApp: government frontend
components:
  0:
    componentName: Layout super navigation header
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_super_navigation_header
    generated: auto
    input:
  1:
    componentName: Breadcrumbs
    componentURL: ../../../components/breadcrumbs
    generated: auto
    input: 
  2:
    componentName: Feedback
    componentURL: https://components.publishing.service.gov.uk/component-guide/feedback
    generated: auto
    input:
  3:
    componentName: Layout footer
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_footer
    generated: auto
    input:
  4:
    componentName: Page title
    componentURL: https://components.publishing.service.gov.uk/component-guide/title
    generated: publisher
    input: Name (required)
  5:
    componentName: Lead paragraph
    componentURL: https://components.publishing.service.gov.uk/component-guide/lead_paragraph
    generated: publisher
    input: Summary (required)
  6:
    componentName: Content list with body
    componentURL: https://govuk-government-frontend.herokuapp.com/component-guide/contents_list_with_body
    generated: publisher
    input: Body (required)
  7:
    componentName: "[Back to top link](https://govuk-government-frontend.herokuapp.com/component-guide/back_to_top) - appears if a [contents list](https://components.publishing.service.gov.uk/component-guide/contents_list) on the page"
    componentURL: 
    generated: auto
    input:
  8:
    componentName: Contextual sidebar
    componentURL: https://components.publishing.service.gov.uk/component-guide/contextual_sidebar
    generated: auto
    input:
  9:
    componentName: Contextual footer
    componentURL: https://components.publishing.service.gov.uk/component-guide/contextual_footer
    generated: auto
    input:
---