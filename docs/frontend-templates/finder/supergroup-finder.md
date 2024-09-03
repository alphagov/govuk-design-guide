---
layout: frontend-template-documentation
sectionKey: Frontend templates
eleventyNavigation:
  parent: Finder
title: Supergroup finder
description: A finder for documents that are part of the content purpose supertypes
figmaLink:
howItWorks: "Supergroup finders find most GOV.UK content that belongs in one of the [content purpose supertypes](https://github.com/alphagov/govuk_document_types/blob/master/data/content_purpose_supergroups.md).


Results come from search-api."
examples:
  0:
    title: Guidance and regulation
    link: https://www.gov.uk/search/guidance-and-regulation
  1:
    title: News and communications
    link: https://www.gov.uk/search/news-and-communications
  2:
    title: Policy papers and consultations
    link: https://www.gov.uk/search/policy-papers-and-consultations
  3:
    title: Research and statistic
    link: https://www.gov.uk/search/research-and-statistics
  4:
    title: Services
    link: https://www.gov.uk/search/services
  5:
    title: Transparency and freedom of information releases
    link: https://www.gov.uk/search/transparency-and-freedom-of-information-releases
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
    componentName: The [Search](https://components.publishing.service.gov.uk/component-guide/search) component is above the filters, which occupies `1/3` of the page
    componentURL: 
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
  15:
    componentName: Page title
    componentURL: https://components.publishing.service.gov.uk/component-guide/title
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