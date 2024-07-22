const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    homeKey: "",
    header: {
      productName: 'Design Library'
    },
    navigation: {
      items: [
        { 
          text: "Frontend templates",
          href: "/frontend-templates"
        },
        {
          text: "Components",
          href: "/components"
        } 
      ]
    }
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // The folder where all your content will live:
      input: 'app',
      // Use layouts from the plugin
      // layouts: '../node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
      includes: '../_includes'
    }
  }
};