---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Frontend templates
title: Transaction
description: Transactions are used to point the user towards an online service, usually on another website.
howItWorks:
  "The introductory text within the transaction frontend template explains to end users what they are about to experience and what they’ll achieve."
examples:
  0:
    title: Sign in to your Universal Credit account
    link: https://www.gov.uk/sign-in-universal-credit
  1:
    title: Check the MOT history of a vehicle
    link: https://www.gov.uk/check-mot-history
  2:
    title: Register to vote
    link: https://www.gov.uk/register-to-vote
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=transaction&organisation_id=all
contentSchema:
  title: transaction
  link: https://docs.publishing.service.gov.uk/content-schemas/transaction.html
contentType:
  title: transaction
  link: https://docs.publishing.service.gov.uk/document-types/transaction.html
publishingApp: mainstream publisher
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
    input: Breadcrumb
  2:
    componentName: Page title
    componentURL: https://components.publishing.service.gov.uk/component-guide/title
    generated: publisher
    input: Title (required)
  3:
    componentName: Govspeak content
    componentURL: https://components.publishing.service.gov.uk/component-guide/govspeak
    generated: publisher
    input: Introductory paragraph
  4:
    componentName: Govspeak content
    componentURL: https://components.publishing.service.gov.uk/component-guide/govspeak
    generated: publisher
    input: Other ways to apply
  5:
    componentName: Govspeak content
    componentURL: https://components.publishing.service.gov.uk/component-guide/govspeak
    generated: publisher
    input: What you need to know
  6:
    componentName: Button
    componentURL: https://components.publishing.service.gov.uk/component-guide/button
    generated: publisher
    input: Radio options (1) Start now & (2) Sign in. Start button text if "start now" selected
  7:
    componentName: Start now button with info text
    componentURL: https://components.publishing.service.gov.uk/component-guide/button/start_now_button_with_info_text
    generated: publisher
    input: Will continue on
  8:
    componentName: "[Tabs](https://components.publishing.service.gov.uk/component-guide/tabs) - activated when at least two of the corresponding input fields have content inside them"
    componentURL: 
    generated: publisher
    input: (1) More information, (2) Other ways to apply and (3) What you need to know
  9:
    componentName: Heading
    componentURL: https://components.publishing.service.gov.uk/component-guide/heading
    generated: publisher
    input:
  10:
    componentName: Govspeak content
    componentURL: https://components.publishing.service.gov.uk/component-guide/govspeak
    generated: publisher
    input: More information
  11:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual footer](https://components.publishing.service.gov.uk/component-guide/contextual_footer)"
    componentURL:
    generated: publisher
    input: Mainstream browse page
  12:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)"
    componentURL:
    generated: publisher
    input: Related content items
  13:
    componentName: "[Step by step navigation](https://components.publishing.service.gov.uk/component-guide/step_by_step_nav) when displayed within [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)"
    componentURL: 
    generated: publisher
    input: "[collections-publisher](https://docs.publishing.service.gov.uk/repos/collections-publisher.html) > Where to show this step by step > Sidebar settings > Sidebar content of page"
  14:
    componentName: Feedback
    componentURL: https://components.publishing.service.gov.uk/component-guide/feedback
    generated: auto
    input:
  15:
    componentName: Layout footer
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_footer
    generated: auto
    input:
---