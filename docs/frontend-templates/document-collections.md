---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Frontend templates
title: Document collections
description: Document collections group related documents on a single page that are aimed for a specific audience or around a specific theme or topic.
howItWorks:
  "A document collection could be used to publish:

  - a set of forms

  - publications in the same series

  - a mix of document types related to the same task or event
  
  ### Contextual sidebar
  
  If a page is part of a document collection, the document collection that it’s part of will automatically appear in the sidebar under the related content section. 


  If a page is part of multiple collections, all the collections are displayed. Examples: [Register a trademark](https://www.gov.uk/how-to-register-a-trade-mark), [Self Assessment forms and helpsheets for trusts and estates](https://www.gov.uk/government/collections/self-assessment-helpsheets-trusts-and-estates)
  
  ### Rules on how multiple collections are ordered

  If more than one collection page is listed, the collections appear in the order of their relative positions within the document collections they belong to. 
  
  Example: [National curriculum in England: framework for key stages 1 to 4](https://www.gov.uk/government/publications/national-curriculum-in-england-framework-for-key-stages-1-to-4) - The content item belongs to 3 document collections. It's the first item in ‘National curriculum’, so that document collection appears first in the list. It's the 17th item in the ‘Schools: statutory guidance’ document collection - so is the second link in the sidebar. It is the 54th item in the ‘Local-authority-maintained schools: governance’ collection - so that is the third link.

  ### Email sign up links on document collections

  Document collections have a ‘Get emails about this page’ button which allows users to sign up for email updates when:

  - there’s a major change to any of the tagged content items listed on the document collection

  - there’s a major change to the document collection page itself

  - the document collection is unpublished and redirected


  There’s an exception on some HMRC document collections where users will get emails about the topic instead of the document collection. [Find out why they were set up like this](https://docs.google.com/document/d/1MR5OaFG_DOCmWGL9o9MSGIPLMFe2mmSrV6Va-99cSzw/edit#heading=h.jbja48mpt1t7).
  "
examples:
  0:
    title: "Self Assessment: detailed information"
    link: https://www.gov.uk/government/collections/self-assessment-detailed-information
  1:
    title: Multiplication tables check
    link: https://www.gov.uk/government/collections/multiplication-tables-check
  2:
    title: "Intellectual property: Trade marks"
    link: https://www.gov.uk/government/collections/intellectual-property-trade-marks
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=document_collection&organisation_id=all
contentSchema:
  title: document_collection
  link: https://docs.publishing.service.gov.uk/content-schemas/document_collection.html
contentType:
  title: document_collection
  link: https://docs.publishing.service.gov.uk/document-types/document_collection.html
publishingApp: whitehall
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
    input: Topics taxonomy tags to customise breadcrumbs
  2:
    componentName: Section break
    componentURL: https://design-system.service.gov.uk/styles/section-break/
    generated: auto
    input:
  3:
    componentName: Single page notification button
    componentURL: https://components.publishing.service.gov.uk/component-guide/single_page_notification_button
    generated: auto
    input:
  4:
    componentName: Published dates
    componentURL: https://govuk-government-frontend.herokuapp.com/component-guide/published_dates
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
    componentName: "[Contents list](https://components.publishing.service.gov.uk/component-guide/contents_list) - only appears if 3 or more collections"
    componentURL:
    generated: auto
    input:
  8:
    componentName: "[Back to top](https://govuk-government-frontend.herokuapp.com/component-guide/back_to_top) - only appears if the page is extremely long"
    componentURL:
    generated: auto
    input:
  9:
    componentName: Page title
    componentURL: https://components.publishing.service.gov.uk/component-guide/title
    generated: publisher
    input: Title (required)
  10:
    componentName: Lead paragraph
    componentURL: https://components.publishing.service.gov.uk/component-guide/lead_paragraph
    generated: publisher
    input: Summary (required)
  11:
    componentName: Metadata block
    componentURL: https://components.publishing.service.gov.uk/component-guide/metadata
    generated: publisher
    input: "First published date & Associations: Lead organisations"
  12:
    componentName: Govspeak content
    componentURL: https://components.publishing.service.gov.uk/component-guide/govspeak
    generated: publisher
    input: Body
  13:
    componentName: Related navigation
    componentURL: https://components.publishing.service.gov.uk/component-guide/related_navigation
    generated: publisher
    input: Taxonomy
  14:
    componentName: Published dates
    componentURL: https://govuk-government-frontend.herokuapp.com/component-guide/published_dates
    generated: publisher
    input: First published date & Change note (required)
  15:
    componentName: "[Heading](https://components.publishing.service.gov.uk/component-guide/heading) - title for individual collection"
    componentURL:
    generated: publisher
    input:
  16:
    componentName: "[Govspeak content](https://components.publishing.service.gov.uk/component-guide/govspeak) - description for the individual collection"
    componentURL:
    generated: publisher
    input:
  17:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual footer](https://components.publishing.service.gov.uk/component-guide/contextual_footer)"
    componentURL:
    generated: publisher
    input: Taxonomy
  18:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)"
    componentURL:
    generated:
    input:
  19:
    componentName: Signup link
    componentURL: https://components.publishing.service.gov.uk/component-guide/signup_link
    generated:
    input:
insights:
  0:
    title: Prototype testing specialist topics
    link: https://docs.google.com/presentation/d/1pqbXzYPbVs11fuOpa4P9sRv7TLT8wbRTniuO_ANC7sM/edit#slide=id.g10d42026b8_2_0
    description: Collections pages were used as navigation pages for specialist topics (the equivalent of a mainstream browse topic or sub-topic page). We tested with 5 accountants, frequent users of GOV.UK, and using desktop. Users had no difficulties with the page design, and successfully used the page to navigate. Including a short description under each link within the collection helped users to choose between the options and aided navigation. 
    Relevant people or team: Rob Sewell, Navigation and Presentation team
    date: September 2022
---