---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Finder
title: Search
description: Site search is designed to find and list all indexed content on GOV.UK
figmaLink:
howItWorks: The returned results that appear on site search come from search-api. Since it’s a universal search, site search can link out to any GOV.UK page, no matter what the frontend template are for those pages.
examples:
  0:
    title: Search
    link: https://www.gov.uk/search/all
contentDataLink:
contentSchema:
  title: finder
  link: https://docs.publishing.service.gov.uk/content-schemas/finder.html
contentType:
  title: finder
  link: https://docs.publishing.service.gov.uk/document-types/finder.html
renderingApp: finder frontend
components:
  0:
    componentName: Layout super navigation header
    componentURL: https://components.publishing.service.gov.uk/component-guide/layout_super_navigation_header
    generated: auto
    input:
  1:
    componentName: Contextual breadcrumbs
    componentURL: https://components.publishing.service.gov.uk/component-guide/contextual_breadcrumbs
    generated: auto
    input:
  2:
    componentName: Search
    componentURL: https://components.publishing.service.gov.uk/component-guide/search
    generated: auto
    input:
  3:
    componentName: Heading
    componentURL: https://components.publishing.service.gov.uk/component-guide/heading
    generated: auto
    input:
  4:
    componentName: "[Option select](https://components.publishing.service.gov.uk/component-guide/option_select) appears within the search filter"
    componentURL:
    generated: auto
    input:
  5:
    componentName: "[Select](https://components.publishing.service.gov.uk/component-guide/select) appears within the search filter"
    componentURL:
    generated: auto
    input:
  6:
    componentName: "[Form checkboxes](https://components.publishing.service.gov.uk/component-guide/checkboxes) appears within the search filter"
    componentURL:
    generated: auto
    input:
  7:
    componentName: "[Form hint text](https://components.publishing.service.gov.uk/component-guide/hint) appears within the search filter"
    componentURL:
    generated: auto
    input:
  8:
    componentName: "[Date filter](https://govuk-finder-frontend.herokuapp.com/component-guide/date_filter) appears within the search filter"
    componentURL:
    generated: auto
    input:
  9:
    componentName: All the filters are within the [Expander](https://govuk-finder-frontend.herokuapp.com/component-guide/expander)
    componentURL: 
    generated: auto
    input:
  10:
    componentName: "[Previous and next navigation](https://components.publishing.service.gov.uk/component-guide/previous_and_next_navigation) appears if there is more than 20 returned search results"
    componentURL: 
    generated: auto
    input:
  11:
    componentName: Subscription link
    componentURL: https://components.publishing.service.gov.uk/component-guide/subscription_links
    generated: auto
    input:
  12:
    componentName: Document list
    componentURL: https://components.publishing.service.gov.uk/component-guide/document_list
    generated: auto
    input:
  13:
    componentName: Feedback
    componentURL: https://components.publishing.service.gov.uk/component-guide/feedback
    generated: auto
    input:
  14:
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