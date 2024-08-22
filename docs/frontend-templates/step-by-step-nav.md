---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Frontend templates
title: Step by step nav
description: Step by step is primarily navigation and not a content format. It’s not designed to replace or compete with guidance.
figmaLink:
howItWorks:
  "Use step by step navigation to represent end-to-end journeys that:

  - have specific start and end points

  - require the user to interact with several pieces of guidance or transactions on GOV.UK

  - require the user to complete tasks in a specific order

  
  Step by steps can span guidance and transactions that belong to more than one department.

  ### Guidelines for not having a step by step

  Do not use step by step navigation:

  - when a user only needs to read guidance and not take a particular action

  - when the guidance or services that make up the journey aren’t on GOV.UK

  - when the journey isn’t linear, for example if you just want to present users with a series of options or to bring together related tasks


  You should not use step by step inside a service. Use the task list pattern instead. If a department wants to use the step by step pattern inside a service in order to track a user’s progress through a service, they cannot use step by step. 

  

  ### Examples of when not to use step by step

  We wouldn’t create a step by step to help users decide what kind of visa to apply for because it’s not a linear journey, it’s just a collection of options. But we could create one about what to do to come to the UK to study, and one of the tasks might be about finding the right visa to apply for. 


  We wouldn’t create a step by step for teachers on how to manage their workload because because it’s made up of a collection of related tasks. It’s not a linear journey with a start and an end."
examples:
  0:
    title: "Get Tax-Free Childcare: step by step"
    link: https://www.gov.uk/get-tax-free-childcare
  1:
    title: "Tell DVLA you've changed address: step by step"
    link: https://www.gov.uk/tell-dvla-changed-address
  2:
    title: "Set up a limited company: step by step"
    link: https://www.gov.uk/set-up-limited-company
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=step_by_step_nav&organisation_id=all
contentSchema:
  title: step_by_step_nav
  link: https://docs.publishing.service.gov.uk/content-schemas/step_by_step_nav.html
contentType:
  title: step_by_step_nav
  link: https://docs.publishing.service.gov.uk/document-types/step_by_step_nav.html
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
    input: Tags > taken to [content tagger](https://docs.publishing.service.gov.uk/repos/content-tagger.html) > Primary mainstream browse page
  2:
    componentName: Page title
    componentURL: https://components.publishing.service.gov.uk/component-guide/title
    generated: publisher
    input: Title (required)
  3:
    componentName: Govspeak content
    componentURL: https://components.publishing.service.gov.uk/component-guide/govspeak
    generated: publisher
    input: Introduction (required)
  4:
    componentName: Step by step navigation
    componentURL: https://components.publishing.service.gov.uk/component-guide/step_by_step_nav
    generated: auto
    input: Steps > Step title (required) + Step label + Content, tasks and links
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
insights:
  0:
    title:
    link:
    description:
    date:
issues:
  0:
    title:
    link:
issueLink:
---