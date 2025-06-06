import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin';
import { rollup } from 'rollup';
import rollupConfig from './rollup.config.js';

const { output } = rollupConfig;

export default function(eleventyConfig) {

  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/assets')
  eleventyConfig.addPassthroughCopy('./docs/humans.txt')

  // Build and watch JavaScript
  eleventyConfig.addWatchTarget('./docs/javascripts/')
  
  eleventyConfig.on('beforeBuild', async () => {
    const bundle = await rollup(rollupConfig)
    await bundle.write(output)
  })
  
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    homeKey: "",
    showBreadcrumbs: false,
    stylesheets: [
      '/assets/styles.css' // Renamed from application.css --> Looks like if you remove this it won't appear borked...
    ],
    titleSuffix: 'GOV.UK Publishing Design Guide',
    opengraphImageUrl: '/assets/images/opengraph.png',
    header: {
      productName: "Publishing Design Guide"
    },
    serviceNavigation: {
      navigation: [
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