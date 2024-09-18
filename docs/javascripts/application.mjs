/* eslint-disable no-new */

import { createAll } from 'govuk-frontend'

import { loadAnalytics } from './components/analytics.mjs'
import CookieBanner from './components/cookie-banner.mjs'
import {
  getConsentCookie,
  isValidConsentCookie,
  removeUACookies
} from './components/cookie-functions.mjs'
import CookiesPage from './components/cookies-page.mjs'

// Cookies and analytics
createAll(CookieBanner)
createAll(CookiesPage)

// Check for consent before initialising analytics
const userConsent = getConsentCookie()
if (userConsent && isValidConsentCookie(userConsent) && userConsent.analytics) {
  loadAnalytics()

  // Remove UA cookies if the user previously had them set or Google attempts
  // to set them
  removeUACookies()
}

// Initialise cookie page
createAll(CookiesPage)
