const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Copy `assets/images` to `_site/assets/images`
  eleventyConfig.addPassthroughCopy("assets/images");
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    homeKey: "",
    showBreadcrumbs: false,
    header: {
      productName: 'Design Library'
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
    }
  });

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