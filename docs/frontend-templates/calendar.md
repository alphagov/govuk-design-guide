---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Frontend templates
title: Calendar
description: The calendar is designed to inform GOV.UK end-users important dates in the United Kingdom. For instance, upcoming bank holidays and when the clocks change.
figmaLink:
howItWorks:
  "According to the [wiki post](https://gov-uk.atlassian.net/wiki/spaces/CC/pages/2293202956/Updating+the+GOV.UK+bank+holidays+page), Blue team are responsible for working with developers in the homepage and navigation team to add bank holiday information on /bank-holidays. They should arrange for `/when-do-the-clocks-change` to be updated at the same time, including its meta description.


  Blue team adds new dates to the page the October or November 2 years in advance. For example, we added all the 2020 bank holiday dates in November 2018. We should also remove the oldest year of past bank holidays from the page.


  Blue team will raise a Content Storytime ticket.


  The developers will then draft the changes and blue team fact check them using legislation and this guidance."
examples:
  0:
    title: UK bank holidays
    link: https://www.gov.uk/bank-holidays 
  1:
    title: When do the clocks change?
    link: https://www.gov.uk/when-do-the-clocks-change
  2:
    title: Gwyliau banc y DU
    link: https://www.gov.uk/gwyliau-banc
contentDataLink: https://content-data.publishing.service.gov.uk/content?submitted=true&date_range=past-30-days&search_term=&document_type=calendar&organisation_id=all
contentSchema:
  title: calendar
  link: https://docs.publishing.service.gov.uk/content-schemas/calendar.html
contentType:
  title: calendar
  link: https://docs.publishing.service.gov.uk/document-types/calendar.html
publishingApp: 
renderingApp: frontend
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
    componentName: Tabs
    componentURL: https://components.publishing.service.gov.uk/component-guide/tabs
    generated: hardcode
    input:
  4:
    componentName: Panel
    componentURL: https://components.publishing.service.gov.uk/component-guide/panel
    generated: hardcode
    input:
  5:
    componentName: Calendar
    componentURL: https://govuk-frontend.herokuapp.com/component-guide/calendar
    generated: hardcode
    input:
  6:
    componentName: Subscribe
    componentURL: https://govuk-frontend.herokuapp.com/component-guide/subscribe
    generated: hardcode
    input:
  7:
    componentName: Metadata block
    componentURL: https://components.publishing.service.gov.uk/component-guide/metadata
    generated: hardcode
    input:
  8:
    componentName: "[Related navigation](https://components.publishing.service.gov.uk/component-guide/related_navigation) when displayed within [contextual sidebar](https://components.publishing.service.gov.uk/component-guide/contextual_sidebar)"
    componentURL:
    generated: hardcode
    input:
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