// Disable navigation.instant if Google Translate is active
// (translate.goog or browser extension)
(function () {
  const isGoogleTranslateProxy =
    window.location.hostname.includes("translate.goog");

  // Google Translate browser extension detection:
  // It injects `translated-ltr` or `translated-rtl` class on <html>
  const htmlClassList = document.documentElement.classList;
  const isGoogleTranslateExtension =
    htmlClassList.contains("translated-ltr") ||
    htmlClassList.contains("translated-rtl");

  if (isGoogleTranslateProxy || isGoogleTranslateExtension) {
    // Disable Material instant navigation
    document.documentElement.removeAttribute("data-md-instant");

    // Optional: log for debugging
    console.log(
      "Instant loading disabled because Google Translate is active (proxy or extension).",
    );
  }
})();
