const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')
const { rollup } = require('rollup')
const rollupConfig = require('./rollup.config.js')

module.exports = function(eleventyConfig) {

  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/assets')
  eleventyConfig.addPassthroughCopy('./docs/humans.txt')

  // Build and watch JavaScript
  eleventyConfig.addWatchTarget('./docs/javascripts/')
  
  eleventyConfig.on('beforeBuild', async () => {
    const bundle = await rollup(rollupConfig)
    await bundle.write(rollupConfig.output)
  })
  
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    homeKey: "",
    showBreadcrumbs: false,
    stylesheets: ['/assets/application.css'],
    titleSuffix: 'GOV.UK Publishing Design Guide',
    opengraphImageUrl: '/assets/images/opengraph.png',
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
          },
          {
            href: "/cookies",
            text: "Cookies"
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