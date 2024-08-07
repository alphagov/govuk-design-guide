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
    input: Tagging to customise breadcrumbs
  2:
    componentName: Page title
    componentURL: https://components.publishing.service.gov.uk/component-guide/title
    generated: publisher
    input:
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
---