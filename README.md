# GOV.UK Design Library
## About
- There is no single source of truth when it comes to design-centric documentation within GOV.UK
- GOV.UK Design System is intended for transactional services used across government departments
- Design library can help mitigate duplicating existing designs, provide insights on past design decisions, and demonstrate the interconnected relationship between our publishing tools and what the end-user interacts with on a GOV.UK page


## Documenation guidance

- [Homepage options](#homepage)
- [Frontend template index options](#frontend-template-index)


### Homepage
```
homepage:
layout:
title:
description:
whatsNewDate:
whatsNew
documentItems:
  0:
    documentItemTitle:
    documentItemDescirption:
    documentItemURL:
```
|Name|Type|Notes|
|---|---|---|
|**homepage**|boolean|Must be set to `true`|
|**layout**|string|Must be set to `homepage`|
|**title**|string|Required to display the title on the page. Plus, this sets the `<title>`, and the `<meta name="title">` within the `<head>`|
|**description**|string|Required to display the description on the page. Plus, this sets the `<meta name="description">` within the `<head>`|
|**whatsNewDate**|string|Required field to display *What's new* section on the homepage|
|**whatsNew**|string|Required field to display *What's new* section on the homepage|
|**documentItems**|object|This displays the different types of documentations available within the design library. See [documentItems options](#documentitems-options)|


#### documentItems options
All options must have a value in order a document item to appear on the homepage.

Name|Type|Notes|
|---|---|---|
|**documentItems[i].documentItemTitle**|string|Required to display the document item on the page|
|**documentItems[i].documentItemDescription**|string|Required to display the document item on the page|
|**documentItems[i].documentItemURL**|string|Required to display the document item on the page|


### Frontend template index
This layout is used to group related frontend templates. For example, *finders* and *mainstream browse*.
```
layout:
sectionKey:
eleventyNavigation:
  parent:
title:
description:
figmaLink: 
howItWorks:
examples:
  0:
    title:
    link:
contentDataLink:
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
```

|Name|Type|Notes|
|---|---|---|
|**layout**|string|Must be set to `frontend-template-index-documentation`|
|**sectionKey**|string|Must be set to `Frontend templates`|
|**eleventyNavigation**|object|See [eleventyNavigation options](#eleventynavigation-options)|
|**title**|string|Required to display the title on the page. Plus, this sets the `<title>`, and the `<meta name="title">` within the `<head>`|
|**description**|string|Required to display the description on the page. Plus, this sets the `<meta name="description">` within the `<head>`|
|**figmaLink**|string|Use the embed link of the artboard to display the Figma embed on the page|
|**howItWorks**|string or markdown|A brief description how the frontend template works and what it does<br><br>If it's written in markdown, the entire content must be wrapped in double quotations (ie. `"`) |
|**examples**|object|See [examples options](#examples-options)|
|**contentDataLink**|string|Required to display the a link to content data on the page|
|**insights**|object|See [insights options](#insight-options)|
|**issues**|object|See [issues options](#issues-options)|
|**issueLink**|string|The URL to the corresponding Github repo where you can create a new issue|


### Frontend template documentation
```
layout:
sectionKey:
eleventyNavigation:
  parent:
title:
description:
figmaLink:
howItWorks:
examples:
  0:
    title:
    link:
contentDataLink:
contentSchema:
  title:
  link:
contentType:
  title:
  link:
publishingApp:
components:
  0:
    componentName:
    componentURL:
    generated:
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
```

|Name|Type|Notes|
|---|---|---|
|**layout**|string|Must be set to `frontend-template-documentation`|
|**sectionKey**|string|Must be set to `Frontend templates`|
|**eleventyNavigation**|object|See [eleventyNavigation options](#eleventynavigation-options)|
|**title**|string|Required to display the title on the page. Plus, this sets the `<title>`, and the `<meta name="title">` within the `<head>`|
|**description**|string|Required to display the description on the page. Plus, this sets the `<meta name="description">` within the `<head>`|
|**figmaLink**|string|Use the embed link of the artboard to display the Figma embed on the page|
|**howItWorks**|string or markdown|A brief description how the frontend template works and what it does<br><br>If it's written in markdown, the entire content must be wrapped in double quotations (ie. `"`) |
|**examples**|object|See [examples options](#examples-options)|
|**contentDataLink**|string|Required to display the a link to content data on the page|
|**contentSchema**|object|See [contentSchema options](#contentschema-options)|
|**contentType**|object|See [contentType options](#contenttype-options)|
|**insights**|object|See [insights options](#insight-options)|
|**issues**|object|See [issues options](#issues-options)|
|**issueLink**|string|The URL to the corresponding Github repo where you can create a new issue|


#### eleventyNavigation options
|Name|Type|Notes|
|---|---|---|
|**parent**|string|Must be set to `Frontend templates`. In the case of some frontend templates (ie. *finders* or *mainstream browse*) it should correspond to the parent frontend template|


#### examples options
|Name|Type|Notes|
|---|---|---|
|**examples[i].title**|string|The page title of the webpage|
|**examples[i].link**|string|This is where the URL of the webpage is entered|


#### contentSchema options
|Name|Type|Notes|
|---|---|---|
|**contentSchema.title**|string|Enter the name of the content schema of the frontend template.<br><br>The [GOV.UK browsser extension](https://github.com/alphagov/govuk-browser-extension) can help indentify the contentSchema of the frontend template|
|**contentSchema.link**|string|Enter the corresponding URL of the content schema's documentation, which can be found in the [developer documenation](https://docs.publishing.service.gov.uk/content-schemas.html)|


#### contentType options
|Name|Type|Notes|
|---|---|---|
|**contentType.title**|string|Enter the name of the content type of the frontend template.<br><br>The [GOV.UK browsser extension](https://github.com/alphagov/govuk-browser-extension) can help indentify the content type (also known as document type) of the frontend template|
|**contentType.link**|string|Enter the corresponding URL of the content type's documentation, which can be found in the [developer documenation](https://docs.publishing.service.gov.uk/document-types.html)|


#### insight options
|Name|Type|Notes|
|---|---|---|
|**insights[i].title**|string|Display the title of the document|
|**insights[i].link**|string|The URL of the document|
|**insights[i].description**|string|A brief description of the what the insight documentation is about|
|**insights[i].date**|string|The date when the document was published|

#### issues options
|Name|Type|Notes|
|---|---|---|
|**issues[i].title**|string|Display the title of the issue, which matches what was recorded on Github|
|**issues[i].link**|string|The link to the Github issue|