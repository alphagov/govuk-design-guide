---
layout: component-documentation
sectionKey: Components
eleventyNavigation:
  parent: Components
title: Attachment
description: The attachment component allows users to download documents and presents information about a document. It also allows users to request an accessible format.
whenToUse:
  This component is exclusively used on guidance pages with document attachments. 

whenNotToUse: 
accessibilty:
  "The thumbnail image, and the link wrapping it, must not focusable or shown to screenreaders.


  Links in the component must:

  - accept focus

  - be focusable with a keyboard

  - be usable with a keyboard

  - indicate when they have focus

  - change in appearance when touched (in the touch-down state)

  - change in appearance when hovered
  
  - be usable with touch
  
  - be usable with voice commands
  
  - have visible text
  
  - have meaningful text
  


  Considerations and Criteria taken from the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment#accessibility-acceptance-criteria)"
howItWorksSummary:
  This component displays a link to a document that is attached to GOV.UK content along with a thumbnail and relevant file data (title of the document, format type, file size, link to view online, and request accessible format details). 


  It is intended to be rendered in Govspeak and as an attachment ‘preview’ in Content Publisher. It is not as rich in features as the attachment rendering provided by Whitehall, it lacks support for multiple languages, CSV previews and publication fields.
  
variations:
  0:
    title: With number of page
    description: 
      More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/with_number_of_pages).
  1:
      title: Opendocument
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/opendocument).
        
  2:
      title: Help text disabled
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/help_text_disabled).
        
  3:
      title: Embedded in govspeak
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/embedded_in_govspeak).
        
  4:
      title: With contact email
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/with_contact_email).
        
  5:
      title: With contact email and ga4 tracking
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/with_contact_email_and_ga4_tracking).
        
  6:
      title: With data attributes
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/with_data_attributes).
        
  7:
      title: With margin bottom
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/with_margin_bottom).
        
  8:
      title: Command paper numbered
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/act_paper_numbered).
        
  9:
      title: Command paper unnumbered
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/command_paper_unnumbered).
  10:
      title: Act paper numbered
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/act_paper_numbered).
  11:
      title: Act paper unnumbered
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/act_paper_unnumbered).
  12:
      title: Hide order a copy
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/hide_order_a_copy).
  13:
      title: With custom heading level
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/with_custom_heading_level).
  14:
      title: With custom thumbnail
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/with_custom_thumbnail).
  15:
      title: Pdf attachment
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/pdf_attachment).
  16:
      title: With preview link
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/with_preview_link).
  17:
      title: Html attachment
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/html_attachment).
  18:
      title: External attachment
      description: 
        More info can be found in the [component guide](https://components.publishing.service.gov.uk/component-guide/attachment/external_attachment).
designLibaries:
  0:
    title: GOV.UK Component guide
    link: https://components.publishing.service.gov.uk/component-guide/attachment

---