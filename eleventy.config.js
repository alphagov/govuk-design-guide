const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    homeKey: "",
    showBreadcrumbs: false,
    header: {
      productName: "Publishing Design System"
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
          },
          {
            href: "/cookies",
            text: "Cookies"
          },
          {
            href: "https://github.com/nnagewad/DesignLibrary",
            text: "View this project on GitHub"
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