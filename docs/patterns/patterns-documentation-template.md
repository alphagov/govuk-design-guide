---
# This file is a template to document a new pattern within the GOV.UK Design Library website.
layout: pattern-documentation
sectionKey: Patterns
eleventyNavigation:
  parent: Patterns

# Step 1: Duplicate and rename this file to the proposed pattern you want to include in the Design Library website.
# When duplicating and renaming this file use lowercase and replace any spaces with a dash (ie. -)

# Step 2: Add a hash (ie. #) in front of the line "eleventyExcludeFromCollections: true". This will ensure that the page will appear in the design library.
eleventyExcludeFromCollections: true

# Step 3: Input data points according to fields below to the best of your ability. Any fields without any data points will not be displayed on the page.

# Name of the pattern
# This is the name of the pattern (ex. Search filter). It is required to display the title on the page, in the meta data, and in the left-hand navigation menu of the patterns page.
title: #Delete this comment before entering the name of the pattern.

# Description of the pattern
# This briefly describes what the pattern is. It is required to display the description on the page, and in the <head> meta description.
description: #Delete this comment before entering the description of the pattern.

# When to use this pattern
# Briefly describe the situation(s) when to use this pattern.
# You MUST wrap this in double quotation marks (ie. " "), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenToUse:
  #Delete this comment before entering when to use this pattern.

# When not to use this pattern
# Briefly describe the situation(s) when not to use this pattern.
# You MUST wrap this in double quotation marks (ie. " "), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
whenNotToUse:
  #Delete this comment before entering when not to use this pattern.

# Accessibilty criteria for this pattern
# List out the accessibility for this pattern.
# You MUST wrap this in double quotation marks (ie. " "), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
accessibilty:
  #Delete this comment before entering the accessibility criteria for this pattern.

# How the pattern works
# Briefly descibe how this pattern works. For instance, listing out what happens when an end-user interacts with this pattern.
# You MUST wrap this in double quotation marks (ie. " "), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
howItWorks:
  #Delete this comment before entering how this pattern works.

# Variations for this pattern
# List out any variations that exist for this pattern by providing (1) the name of said variation and (2) a brief description of that variation.
variations:
  # To list out additional variations duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    title: #Delete this comment before entering the name of the variation that exists for this pattern.
    description:
      # You MUST wrap this in double quotation marks (ie. " "), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      #Delete this comment before entering a description of variation.

# Components that make-up this pattern
# List out all the components that make-up this single pattern, by (1) providing the name of the component and (2) a link to the documentation for said component.
components:
  # To list out additional components duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order for this information to be displayed on the page.
    title: #Delete this comment before entering the name of the component used within this pattern.
    link: #Delete this comment before entering the URL of the documentation for said component.

# Evidence and insights for this pattern
# List out all past documentation/supporting material with regards to or realted to this pattern. It can include (1) past design documentation, (2) research findings, and (3) presentations.
insights:
  # To list out additional insights duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order for this information to render on the page.
    title: #Delete this comment before entering the name of the insight document.
    link: #Delete this comment before entering the URL of the insight document.
    documentFormat: #Delete this comment before entering the format of the insight document. Example: (1) Google Doc, (2) Google Sheets, and (3) Google Slides.
    description:
      # You MUST wrap this in double quotation marks (ie. " "), since markdown can be used to enter this information. To create a heading, use three hashes (ie. ###).
      #Delete this comment before entering a brief summary about the document being referred.
    date: #Delete this comment before entering the date when the document was published.

# How to report an issue with this pattern
# This will display instrucions on how to report an issue via GitHub.
# Consult with a developer to confirm the GitHub where the pattern's codebase exists.
githubIssueLink: #Delete this comment before entering the URL of the page to create a new GitHub issue.

# Existing issues with this pattern
# List of all the issues that are associated with this pattern, (1) containing the title used to describe the issue on GitHub, and (2) the link to the GitHub issue itself.
issues:
  # To list out additional issues duplicate the the fields below (adhering to the formating) but increase the count by one integer.
  0:
    # Both title and link are REQUIRED in order to display this information on the page.
    title: #Delete this comment before entering the title of the GitHub issue.
    link: #Delete this comment before entering the URL of the corresponding GitHub issue.
---