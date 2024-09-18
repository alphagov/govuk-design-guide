---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Frontend templates
title: Completed transaction
description: The completed transaction frontend template is what an end-user interacts with once they have completed all the necessary tasks/actions within an individual government service
figmaLink:
howItWorks:
  "Any service starting on GOV.UK should have a feedback page, it doesn’t need to have a start page.


  After an end-user completes a transaction on an online service they are directed to the completed transaction frontend template where they relay their experience using a service. The results are in Feedex. Satisfaction scores used to be on the performance platform, where you could compare scores across different services.


  Also, there is an option for a promotional banner to appear within the interface. Examples include but not limited to:

  - Organ donation

  - Reminder to bring id in order to vote

  - MOT reminders

  - Electric vehicles


  The domain for every completed transaction must have a `/done` prefix."
examples:
  0:
    title: Give feedback on Tax your vehicle
    link: https://www.gov.uk/done/vehicle-tax
  1:
    title: You've completed your transaction
    link: https://www.gov.uk/done/transaction-finished
  2:
    title: Give feedback on Check if a vehicle is taxed
    link: https://www.gov.uk/done/check-vehicle-tax
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=completed_transaction&organisation_id=all
contentSchema:
  title: completed_transaction
  link: https://docs.publishing.service.gov.uk/content-schemas/completed_transaction.html
contentType:
  title: completed_transaction
  link: https://docs.publishing.service.gov.uk/document-types/completed_transaction.html
publishingApp: mainstream publisher
renderingApp: feedback
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
    componentName: Generated on page via custom styling, without using any pre-existing components
    componentURL: 
    generated: publisher
    input: Promotions
  4:
    componentName: Heading
    componentURL: https://components.publishing.service.gov.uk/component-guide/heading
    generated: publisher
    input: Parts > Part[i] > Title
  5:
    componentName: Form radio button
    componentURL: https://components.publishing.service.gov.uk/component-guide/radio
    generated: auto
    input:
  6:
    componentName: Form character count
    componentURL: https://components.publishing.service.gov.uk/component-guide/character_count
    generated: auto
    input:
  7:
    componentName: Button
    componentURL: https://components.publishing.service.gov.uk/component-guide/button
    generated: auto
    input:
  8:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual footer](https://components.publishing.service.gov.uk/component-guide/contextual_footer)"
    componentURL: 
    generated: publisher
    input: Mainstream browse
  9:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)"
    componentURL: 
    generated: publisher
    input: Related content items
  10:
    componentName: Feedback
    componentURL: https://components.publishing.service.gov.uk/component-guide/feedback
    generated: auto
    input:
  11:
    componentName: Layout footer
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_footer
    generated: auto
    input:
insights:
  0:
    title: 
    link: 
    description: 
    date: 
issues:
  0:
    title: Why is it that a component is not being used to show a promotional feature?
    link:
githubIssueLink:
---