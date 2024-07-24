---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Mainstream browse
title: Level one
description: Mainstream browse is a topic system that groups together content by popular topics on GOV.UK.
howItWorks:

examples:
  0:
    title: Driving and transport
    link: https://www.gov.uk/browse/driving
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=mainstream_browse_page&organisation_id=all
contentSchema:
  title: mainstream_browse_page
  link: https://docs.publishing.service.gov.uk/content-schemas/mainstream_browse_page.html
contentType:
  title: mainstream_browse_page
  link: https://docs.publishing.service.gov.uk/document-types/mainstream_browse_page.html
publishingApp: collections publisher
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
    componentName: Heading
    componentURL: https://components.publishing.service.gov.uk/component-guide/heading
    generated: auto
    input:
  5:
    componentName: H1 styled as a [Page title](https://components.publishing.service.gov.uk/component-guide/title) component
    componentURL:
    generated: publisher
    input: Title (required)
  6:
    componentName: Lead paragraph
    componentURL: https://components.publishing.service.gov.uk/component-guide/lead_paragraph
    generated: publisher
    input: Description (required)
  7:
    componentName: Cards
    componentURL: https://components.publishing.service.gov.uk/component-guide/cards
    generated: publisher
    input: Subtopics
  8:
    componentName: Action link
    componentURL: https://components.publishing.service.gov.uk/component-guide/action_link
    generated: hardcode
    input:


---