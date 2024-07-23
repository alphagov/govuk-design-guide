---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Frontend templates
title: Mainstream browse
description: Mainstream browse is a topic system that groups together content by popular topics on GOV.UK.
examples:
  0:
    title: Level 1 browse page - Driving and transport
    link: https://www.gov.uk/browse/driving
  1:
    title: Curated level 2 browse page - Vehicle, tax MOT and insurance
    link: https://www.gov.uk/browse/driving/vehicle-tax-mot-insurance
  2:
    title: Alphabetical level 2 browse page - School admissions and transport to school
    link: https://www.gov.uk/browse/education/school-admissions-transport
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
    componentURL: https://components.publishing.service.gov.uk/component-guide/breadcrumbs
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
designData:
  0:
    title: How to curate mainstream browse pages 
    link: https://docs.google.com/presentation/d/1Kp69ojze0kbyIaE2rAyyMIB9hfOBiXNCwbQ37TxQyYQ/edit
    description: Guidance on how to curate mainstream browse pages
    date: July 2023
  1:
    title: Topic page design implementation 
    link: https://docs.google.com/document/d/1MbhUjXLMUvEvqRU_w5S7RD9_wVhB3LkcdfDIxnSOz4g/edit?usp=sharing
    description: This document sets out how the new topic pages will look and work, why we are replacing the current Mainstream Browse topic page, and what we plan to do in the future
    date: January 26, 2022
  2:
    title: What is Mainstream Browse 
    link: https://docs.google.com/document/d/13IkO2ZnknFDiNTn-z9E4LwCbTTN1Dnw2xcfO3iU_v9E/edit#heading=h.yw8vk47ou0r5
    description: Replacing Mainstream Browse taxonomy and replace with new site-wide taxonomy
    date: August 20, 2018
  3:
    title: Mainstream Browse design sprint 
    link: https://docs.google.com/document/d/1aCUbrdqaCCF6mblDfddw1Wck_DmTsHADMYR-Ny-9Xw4/edit#heading=h.yo2pwekzv7t0
    description: How the design sprint will run for Mainstream Browse pages
    date: August 9, 2018

---