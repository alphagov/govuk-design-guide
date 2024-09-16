// This will check if javascript is enabled on the site.
// If javascript is enabled, show cookie controls.
// If javascript is disabled, don't show cookie controls.

const body = document.querySelector("body");
const jsEnabled = body.classList.contains("js-enabled");

if (jsEnabled) {
  const form = document.querySelector("form");
  const refreshMessage = document.getElementById("refresh-page-message");
  form.classList.remove("govuk-visually-hidden");
  refreshMessage.remove();
}