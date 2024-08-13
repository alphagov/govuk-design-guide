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
|**insights**|object|See [insights options]()|



#### eleventyNavigation options
|Name|Type|Notes|
|---|---|---|
|**parent**|string|Must be set to `Frontend templates`|


#### examples options
|Name|Type|Notes|
|---|---|---|
|**examples[i].title**|string|The page title of the webpage|
|**examples[i].link**|string|This is where the URL of the webpage is entered|

#### insight options
|Name|Type|Notes|
|---|---|---|
|**insights[i].title**|string|Display the title of the document|
|**insights[i].link**|string|The URL of the document|
|**insights[i].description**|string|A brief description of the what the insight documentation is about|
|**insights[i].date**|string|The date when the document was published|