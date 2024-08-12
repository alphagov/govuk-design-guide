# GOV.UK Design Library
## About
- There is no single source of truth when it comes to design-centric documentation within GOV.UK
- GOV.UK Design System is intended for transactional services used across government departments
- Design library can help mitigate duplicating existing designs, provide insights on past design decisions, and demonstrate the interconnected relationship between our publishing tools and what the end-user interacts with on a GOV.UK page

## Documenation guidance

- [Homepage options](#homepage-options)
  - [documentItems options](#documentitems-options)

### Homepage options
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

### documentItems options
All options must have a value in order a document item to appear on the homepage.

Name|Type|Notes|
|---|---|---|
|**documentItems[i].documentItemTitle**|string|Required to display the document item on the page|
|**documentItems[i].documentItemDescription**|string|Required to display the document item on the page|
|**documentItems[i].documentItemURL**|string|Required to display the document item on the page|

### Frontend template index options
This layout is used to group related frontend templates. For example, *finders* and *mainstream browse*.