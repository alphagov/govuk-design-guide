---
layout: pattern-documentation
sectionKey: Patterns
eleventyNavigation:
  parent: Patterns
title: Search filter
description: Search filters are used to help refine search results
whenToUse: Used exclusively for [finders](/frontend-templates/finders).
accessibilty: There was an accessibility driven design change made to the mobile filters around 2021.
howItWorksSummary:
  Search filters are used to help refine search results which appear on the right side of the page.


  They display search facets which allow the user to drill deeper down into search results. Helping a user to create a smaller list of things to scan through.


  There are four types of filters currently. One with a dropdown of options. One with checkboxes. One with a search bar and checkboxes. And one with open text fields.


  On specialist finders, you can also find a small search bar.


  As a user interacts with the filters, the search results on the right auto-refresh automatically.


  On mobile the same functionality occurs, however the filters move into an accordion and a ‘Go to search results’ call to action appears to help users jump down to the top of their search results. In the past the filters have lived in an interstitial page, this changed around 2021 to the accordion interaction due to accessibility issues with interstitial pages.
components:
  0:
    title: Search
    link: https://components.publishing.service.gov.uk/component-guide/search
  1:
    title: Expander
    link: https://govuk-finder-frontend.herokuapp.com/component-guide/expander
  2:
    title: Form date input
    link: https://components.publishing.service.gov.uk/component-guide/date_input
  3:
    title: Option select
    link: https://components.publishing.service.gov.uk/component-guide/option_select
  4:
    title: Form radio button
    link: https://components.publishing.service.gov.uk/component-guide/radio
---