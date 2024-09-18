---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Frontend templates
title: Guide
description: Guides are designed to present complicated and long subjects by breaking them up into separate pages.
figmaLink:
howItWorks: Guides have multiple parts (or chapters). Each part has a title, a body and a slug.
examples:
  0:
    title: "HMRC online services: sign in or set up an account"
    link: https://www.gov.uk/log-in-register-hmrc-online-services
  1:
    title: Tax overpayments and underpayments
    link: https://www.gov.uk/tax-overpayments-and-underpayments/if-youre-due-a-refund
  2:
    title: Universal Credit
    link: https://www.gov.uk/universal-credit
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=guide&organisation_id=all
contentSchema:
  title: guide
  link: https://docs.publishing.service.gov.uk/content-schemas/guide.html
contentType:
  title: guide
  link: https://docs.publishing.service.gov.uk/document-types/guide.html
publishingApp: mainstream publisher
renderingApp: government frontend
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
    input: Tagging > Breadcrumbs
  2:
    componentName: Page title
    componentURL: https://components.publishing.service.gov.uk/component-guide/title
    generated: publisher
    input: Title (required)
  3:
    componentName: Contents list
    componentURL: https://components.publishing.service.gov.uk/component-guide/contents_list
    generated: publisher
    input: Parts
  4:
    componentName: Heading
    componentURL: https://components.publishing.service.gov.uk/component-guide/heading
    generated: publisher
    input: Parts > Part[i] > Title
  5:
    componentName: Govspeak content
    componentURL: https://components.publishing.service.gov.uk/component-guide/govspeak
    generated: publisher
    input: Parts > Part[i] > Body
  6:
    componentName: Previous and next navigation
    componentURL: https://components.publishing.service.gov.uk/component-guide/previous_and_next_navigation
    generated: auto
    input:
  7:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual footer](https://components.publishing.service.gov.uk/component-guide/contextual_footer)"
    componentURL: 
    generated: publisher
    input: Mainstream browse
  8:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)"
    componentURL: 
    generated: publisher
    input: Related content items
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
insights:
  0:
    title: "Guides: Click-thru (any page in guide)"
    link: https://docs.google.com/spreadsheets/d/1nMZ4yU0wOhQtPwa78n4i8GKmMuCEYvQTVtKPPVCCbk0/edit?usp=sharing
    description: A spreadsheet outlining the total number of sessions in which any page from a guide was viewed
    date: May 28, 2024
  1:
    title: "Guides: usage across chapters"
    link: https://docs.google.com/spreadsheets/d/1lW8AJ1HbnFv06gkDB6OUGFPZjeXQbaECWW3t4AT2YPk/edit?gid=0#gid=0
    description: Data shows how many sessions included any page from each chapter and then breaks down that figure by the number of sessions for each chapter within the guide
    date: May 28, 2024
issues:
  0:
    title: Can make a guide with one part… Is that intended?
    link:
githubIssueLink:
---