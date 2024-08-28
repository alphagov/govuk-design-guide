---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Frontend templates
title: Topical events
description: Topical event are used to communicate government activity about high-profile events or in response to a major crisis.
howItWorks:
 "Topical events pages used to communicate government activity about high-profile events or in response to a major crisis. Can be used for an event or crisis that is:

  - of high profile

  - that is current or relevant only for a short time (for example Ebola virus: UK government response)

  - of significance to the majority of GOV.UK’s users (ie the event is receiving extensive coverage by major news media such as the Today programme)

  - the responsibility of central government

  - linked to more than one government department or agency

  - likely to generate a high volume of content (not just one or two news stories)
  

  Also worth noting that there may be a corresponding topical event's about page, which is made using the [topical event about frontend template](../about/topical-events)."
examples:
  0:
    title: D-Day 80
    link: https://www.gov.uk/government/topical-events/d-day-80
  1:
    title: Election 2024
    link: https://www.gov.uk/government/topical-events/election-2024
  2:
    title: "Russian invasion of Ukraine: UK government response"
    link: https://www.gov.uk/government/topical-events/russian-invasion-of-ukraine-uk-government-response
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=topical_event&organisation_id=all
contentSchema:
  title: topical_event
  link: https://docs.publishing.service.gov.uk/content-schemas/topical_event.html
contentType:
  title: topical_event
  link: https://docs.publishing.service.gov.uk/document-types/topical_event.html
publishingApp: whitehall
renderingApp: collections
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
    componentName: Section break
    componentURL: https://design-system.service.gov.uk/styles/section-break/
    generated: auto
    input:
  3:
    componentName: Heading
    componentURL: https://components.publishing.service.gov.uk/component-guide/heading
    generated: auto
    input:
  4:
    componentName: Subscription links
    componentURL: https://components.publishing.service.gov.uk/component-guide/subscription_links
    generated: auto
    input:
  5:
    componentName: Feedback
    componentURL: https://components.publishing.service.gov.uk/component-guide/feedback
    generated: auto
    input:
  6:
    componentName: Layout footer
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_footer
    generated: auto
    input:
  7:
    componentName: Page title
    componentURL: https://components.publishing.service.gov.uk/component-guide/title
    generated: publisher
    input: Name (required)
  8:
    componentName: Lead paragraph
    componentURL: https://components.publishing.service.gov.uk/component-guide/lead_paragraph
    generated: publisher
    input: Summary (required)
  9:
    componentName: Govspeak content
    componentURL: https://components.publishing.service.gov.uk/component-guide/govspeak
    generated: publisher
    input: Description (required)
  10:
    componentName: Metadata block
    componentURL: https://components.publishing.service.gov.uk/component-guide/metadata
    generated: publisher
    input: Organisation
  11:
    componentName: Share links
    componentURL: https://components.publishing.service.gov.uk/component-guide/share_links
    generated: publisher
    input: Social media accounts
  12:
    componentName: Image card
    componentURL: https://components.publishing.service.gov.uk/component-guide/image_card
    generated: publisher
    input: Currently featured
  13:
    componentName: Document list
    componentURL: https://components.publishing.service.gov.uk/component-guide/document_list
    generated: publisher
    input: Documents
  14:
    componentName: "[Organisation logo](https://components.publishing.service.gov.uk/component-guide/organisation_logo) - only appears if lead organisation"
    componentURL:
    generated: publisher
    input: Organisation
insights:
  0:
    title: Research interview about Topical Events & Campaign sites 
    link: https://app.mural.co/t/govukdelivery7534/m/govukdelivery7534/1674139116917/714724969d90020cd15e1ce41153c4c43fca5101?sender=u5494c2264a5f0c5c71eb1671
    description:
      "Mural board with a collection of findings regarding Topical Events and Campaign sites"
    date: January 2023
---