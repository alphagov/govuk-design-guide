---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Frontend templates
title: Answer
description: Answers are designed to provide all the information the user needs to answer a simple and specific question.
figmaLink:
howItWorks: There is only 1 body field for a quick answer. This contains all the content for a page.
examples:
  0:
    title: "Personal tax account: sign in or set up"
    link: https://www.gov.uk/personal-tax-account
  1:
    title: Benefits calculators
    link: https://www.gov.uk/benefits-calculators
  2:
    title: File your Self Assessment tax return online
    link: https://www.gov.uk/log-in-file-self-assessment-tax-return 
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=answer&organisation_id=all
contentSchema:
  title: answer
  link: https://docs.publishing.service.gov.uk/content-schemas/answer.html
contentType:
  title: answer
  link: https://docs.publishing.service.gov.uk/document-types/answer.html
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
    componentName: Govspeak content
    componentURL: https://components.publishing.service.gov.uk/component-guide/govspeak
    generated: publisher
    input: Body
  4:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual footer](https://components.publishing.service.gov.uk/component-guide/contextual_footer)"
    componentURL: 
    generated: publisher
    input: Mainstream browse
  5:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)"
    componentURL: 
    generated: publisher
    input: Related content items
  6:
    componentName: Feedback
    componentURL: https://components.publishing.service.gov.uk/component-guide/feedback
    generated: auto
    input:
  7:
    componentName: Layout footer
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_footer
    generated: auto
    input:
insights:
  0:
    title: "Answer page: categorising data"
    link:  https://docs.google.com/spreadsheets/d/18osY2da0SKhSTdY9FAIhKBwCd3HMKw_jqpZS-1mu8gA/edit?usp=sharing
    description: List of all the answer pages and its associated data
    date:
  1:
    title: "Answer pages: exits"
    link: https://docs.google.com/spreadsheets/d/1f4fSsIxkCfWiKNV9qgE_sep61f5EbKxU58wTWCsGw60/edit?gid=2140166644#gid=2140166644
    description: Data on exiting from DWP answer pages
    date:
  2:
    title: "Answer pages: average engagement time/word count"
    link: https://docs.google.com/spreadsheets/d/1rJTOD69386X1lnpUpih3eXZoeX54kNB4u7dqIQA2oBg/edit?gid=132520947#gid=132520947 
    description: Time on page against word count for DWP answer pages
    date:
  3:
    title: "Answer pages: pages visited after"
    link: https://docs.google.com/spreadsheets/d/1bxdQQvSUIfNdmuyF1Ws7RwZARIdgU9eQTN5jYrJeXkU/edit?gid=1433864911#gid=1433864911
    description: Pages visited after an Answer page - figures are no. of sessions
    date:
issues:
  0:
    title:
    link:
githubIssueLink:
---