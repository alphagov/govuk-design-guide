/* eslint-disable no-new */

import { createAll } from 'govuk-frontend'

import { loadAnalytics } from './components/analytics.mjs'
import CookieBanner from './components/cookie-banner.mjs'
import {
  getConsentCookie,
  isValidConsentCookie
} from './components/cookie-functions.mjs'
import CookiesPage from './components/cookies-page.mjs'

// Cookies and analytics
createAll(CookieBanner)
createAll(CookiesPage)

// Check for consent before initialising analytics
const userConsent = getConsentCookie()
if (userConsent && isValidConsentCookie(userConsent) && userConsent.analytics) {
  loadAnalytics()
}

// Initialise cookie page
createAll(CookiesPage)
