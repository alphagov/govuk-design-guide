---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Frontend templates
title: Special route
description: "Special route frontend templates can perform an array of specific end-user tasks. That may include: finding information about a local council, as well as help users use and navigate GOV.UK itself"
figmaLink:
howItWorks:
    "Special route frontend templates are unique pages that are hardcoded by developers that publishes special routes to the Publishing API on behalf of other apps.


    Any changes, including content, will require developer involvment."
examples:
  0:
    title: Find your local council
    link: https://www.gov.uk/find-local-council
  1:
    title: Find contact details for services
    link: https://www.gov.uk/contact
  2:
    title: Help using GOV.UK
    link: https://www.gov.uk/help
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=special_route&organisation_id=all
contentSchema:
  title: special_route
  link: https://docs.publishing.service.gov.uk/content-schemas/special_route.html
contentType: 
  title: special_route
  link: https://docs.publishing.service.gov.uk/document-types/special_route.html
publishingApp: special route publisher
components:
  0:
    componentName: Layout super navigation header
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_super_navigation_header
    generated: auto
    input:
  1:
    componentName: Contextual breadcrumbs
    componentURL: https://components.publishing.service.gov.uk/component-guide/contextual_breadcrumbs
    generated: hardcode
    input:
  2:
    componentName: Page title
    componentURL: https://components.publishing.service.gov.uk/component-guide/title
    generated: hardcode
    input:
  3:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)"
    componentURL: 
    generated: hardcode
    input:
  4:
    componentName: Feedback
    componentURL: https://components.publishing.service.gov.uk/component-guide/feedback
    generated: auto
    input:
  5:
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
githubIssueLink:
---