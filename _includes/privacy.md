## **Privacy policy**

This document describes how the TabFloater browser extension ("**TabFloater**"), the TabFloater Companion application ("**Companion**") and this website ("**Website**") collects and handles your data. Please read this policy carefully.

### TabFloater
---

TabFloater never collects, tracks or sends your personal information, browsing history or website interactions, neither to local storage nor to any remote computer, aside from the two exceptions as follows:

 * Some website titles you visit. When you perform a "Float tab" action, TabFloater captures the title of the currently active browser tab (the one that is moved to the floating window), as well as the title of the tab that becomes active in the main browser window after the float action happens. This information is necessary for the application to function correctly: it is passed on to the Companion (through native messaging), which uses it to identify the windows that need to be attached to each other. Learn more about how the Companion works [here](documentation#why-do-i-need-to-install-an-application-on-my-computer-to-use-tabfloater).
 * User email addresses are collected when creating an account to use the TabFloater application. These email addresses are stored and encrypted, for the sole purpose of authenticating our users' subscription status and periodically soliciting feedback so we may continue to improve TabFloater for their benefit. We do not sell, disclose, or use this information for other purposes.

These window titles are **never** sent to any remote computer.

##### **Logs**

If you enable it explicitly, TabFloater will log debug information to the browser's developer console. This log is not saved or sent anywhere, and is destroyed when you close your browser session. Most of the logged information is internal data, however when you float / unfloat a tab, the application does log the above described window titles.

##### **Anonymous usage statistics**

By default, TabFloater collects anonymous usage statistics and sends this data to Google Analytics. This information is only used to analyze how users interact with the application: for example, to see which features are used frequently. You can opt-out of this data collection on the Options page. The usage statistics are stored on Google Analytics servers, and are never shared with any third party by TabFloater developers.

The following is a list of actions that are reported to Google Analytics. For each event, only the fact that the event happened is reported. Some of the events send additional data, these are described in detail below.
 * When the extension is installed. Extra data: your browser and operating system information (exluding version). Example: Firefox/Windows.
 * When you float a tab
 * When floating a tab resulted in an error. Extra data: the error message
 * When you unfloat a tab (restore it from the floating window)
 * When you move the floating window via the keyboard
 * When you close the Options page. Extra data: your selected preferences (excluding log file location)

**Note:** The first event from the above list is sent before you have a chance to opt-out of usage data collection. By installing TabFloater, you agree to this.

No personal information is ever sent as part of the usage statistics data. TabFloater also instructs Google Analytics to anonymize your IP address, which hides your exact geographic location. <a href="https://support.google.com/analytics/answer/2763052?hl=en" target="_blank" rel="noopener">Click here</a> to learn more about this.

The developers of TabFloater only see an aggregated view of the geographical distribution of users, but cannot tie this, or any other data to a specific user.

##### **Extension permissions**

TabFloater needs the following browser permissions to work:
 * `nativeMessaging`: necessary to communicate with the Companion application
 * `storage`: used to store your preferences and some internal application data
 * `tabs`:  required for moving browser tabs between the floating window and the main browser window
 * `all_urls` (optional): this permission gives TabFloater access to the web pages you visit. This is only required by [Smart Positioning](documentation#how-do-i-use-it) and is used only to analyze the underlying structure of the web page to determine the optimal position for the floating window. The contents of the web page you visit is **never** extracted, analyzed or logged.

##### **Update check**

Apart from the above described usage statistics collection, TabFloater will only ever make a connection to a remote computer to check for new Companion versions. This check happens when you start your browser.

### Companion
---

The only data the Companion has access to is what it receives from TabFloater: these are the window titles described in the above section. Apart from this, the Companion never collects, tracks or sends your personal information, neither to local storage nor to any remote computer.

If you enable it explicitly, the Companion writes application logs to an external file. This log file stays on your computer and you have complete control over it. This log contain the window titles described above, and its location can be found on the TabFloater Options page.

### Website
---

If you explicitly agree by clicking the `Accept` button on our Cookie notice, this website uses Google Analytics to track anonymous visitor statistics. We also instruct Google Analytics to anonymize your IP address, which hides your exact geographic location. <a href="https://support.google.com/analytics/answer/2763052?hl=en" target="_blank" rel="noopener">Click here</a> to learn more about this. The developers of this website only see an aggregated view of the geographical distribution of visitors, but cannot tie this, or any other data to a specific visitor.

Cookies are only ever stored by the Google Analytics client library and are only used to anonymously distinguish between users. <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" rel="noopener">Click here</a> to learn more about the Google Analytics cookies.
