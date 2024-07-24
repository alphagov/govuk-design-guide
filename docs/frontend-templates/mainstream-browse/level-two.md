---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Mainstream browse
title: Level two
description: Mainstream browse is a topic system that groups together content by popular topics on GOV.UK.
howItWorks:
  Level 2 pages link to mostly mainstream content or they can also include Whitehall content, where there is a user need. Level 2 pages can be curated or alphabetical.
examples:
  0:
    title: Curated level 2 browse page - Vehicle, tax MOT and insurance
    link: https://www.gov.uk/browse/driving/vehicle-tax-mot-insurance
  1:
    title: Alphabetical level 2 browse page - School admissions and transport to school
    link: https://www.gov.uk/browse/education/school-admissions-transport
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
    generated: publisher
    input: Title (required)
  5:
    componentName: Lead paragraph
    componentURL: https://components.publishing.service.gov.uk/component-guide/lead_paragraph
    generated: publisher
    input: Description (required)
  6:
    componentName: List component
    componentURL: https://components.publishing.service.gov.uk/component-guide/list
    generated: publisher
    input: Add link to current list
  7:
    componentName: Heading
    componentURL: https://components.publishing.service.gov.uk/component-guide/heading
    generated: publisher
    input: Subtopic title (required)

---