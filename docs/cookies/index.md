---
layout: about
title: Cookies
description: How we use cookies on the GOV.UK Design Library. 
---
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/button/macro.njk" import govukButton %}

## What are cookies
Cookies are small files saved on your phone, tablet or computer when you visit a website.

We use cookies to make this site work and collect information about how us use our service.

## Change your cookie settings
<form action="/form-handler" method="post" novalidate>
  {{ govukRadios({
    classes: "govuk-radios--inline",
    name: "cookies[functional]",
    idPrefix: "cookies-functional",
    fieldset: {
      legend: {
        text: "Do you want to accept functional cookies?",
        classes: "govuk-fieldset__legend--s"
      }
    },
    items: [
      {
        value: "yes",
        text: "Yes"
      },
      {
        value: "no",
        text: "No",
        checked: true
      }
    ]
  }) }}

  {{ govukRadios({
    classes: "govuk-radios--inline",
    name: "cookies[analytics]",
    idPrefix: "cookies-analytics",
    fieldset: {
      legend: {
        text: "Do you want to accept analytics cookies?",
        classes: "govuk-fieldset__legend--s"
      }
    },
    items: [
      {
        value: "yes",
        text: "Yes"
      },
      {
        value: "no",
        text: "No",
        checked: true
      }
    ]
  }) }}

  {{ govukButton({
    text: "Save cookie settings"
  }) }}
</form>