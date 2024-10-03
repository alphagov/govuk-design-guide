const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/assets')
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    homeKey: "",
    showBreadcrumbs: false,
    stylesheets: ['/assets/application.css'],
    titleSuffix: 'GOV.UK Publishing Design Guide',
    header: {
      productName: "Publishing Design Guide"
    },
    navigation: {
      items: [
        {
          text: "Components",
          href: "/components"
        },
        {
          text: "Patterns",
          href: "/patterns"
        },
        { 
          text: "Frontend templates",
          href: "/frontend-templates"
        },
        {
          text: "Community",
          href: "/community"
        },
        {
          text: "About",
          href: "/about"
        }
      ]
    },
    footer: {
      meta: {
        items: [
          {
            href: "/accessibility-statement",
            text: "Accessibility statement"
          }
        ]
      }
    }
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // The folder where all your content will live:
      input: 'docs',
      includes: '../_includes',
      layouts: '../_includes/layouts'
    }
  }
};