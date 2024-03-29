/*
 * Copyright 2022 SNSJ LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import configureAnalytics from "/assets/js/analytics.js";
import Cookies from "/assets/js/lib/js.cookie.min.mjs";

const CookieName = "CookiesAllowed";
const TenYearsInDays = 3650;

function areCookiesAllowed() {
    return Cookies.get(CookieName);
}

function saveCookiePreference(allowed) {
    if (allowed) {
        Cookies.set(CookieName, true, { expires: TenYearsInDays });
    } else {
        Cookies.remove(CookieName);
    }
}

function setCookieBannerVisibility(visible) {
    window.cBanner.hidden = !visible;
}

function showCookieBanner() {
    setCookieBannerVisibility(true);
}

function hideCookieBanner() {
    setCookieBannerVisibility(false);
}

function manageCookiePreferences() {
    window.allowCookiesCheckbox.checked = areCookiesAllowed();
    UIkit.modal(window.cookiePreferencesDialog).show();
}

function applyCookiePreferences(allowed) {
    saveCookiePreference(allowed);
    hideCookieBanner();

    if (allowed) {
        configureAnalytics();
    }
}

window.manageCookiePrefencesBannerButton.onclick = manageCookiePreferences;
window.manageCookiePrefencesFooterButton.onclick = manageCookiePreferences;

window.saveCookiePreferencesButton.onclick = function () {
    applyCookiePreferences(window.allowCookiesCheckbox.checked);
    UIkit.modal(window.cookiePreferencesDialog).hide();
}

window.acceptCookiesButton.onclick = function () {
    applyCookiePreferences(true);
}

if (areCookiesAllowed()) {
    configureAnalytics();
} else {
    showCookieBanner();
}
