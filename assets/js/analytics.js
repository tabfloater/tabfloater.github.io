---
---
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

const Environment = "{{ jekyll.environment }}";
const GoogleAnalyticsId = "{{ site.googleAnalyticsId }}";
var initialized = false;

export default function configureAnalytics() {
    if (Environment.toLowerCase() === "production") {
        if (!initialized) {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag("js", new Date());
            gtag("config", GoogleAnalyticsId, { "anonymize_ip": true });
            initialized = true;
        }
    } else {
        console.log("Not running in production - skipping Google Analytics setup");
    }
}

export async function sendEventAsync(eventCategory, eventAction, eventLabel) {
    const requestObject = {
        v: "1",
        aip: 1,  // anonymize IP - see https://support.google.com/analytics/answer/2763052?hl=en
        t: "event",
        ds: "add-on",
        tid: GoogleAnalyticsId,
        cid: null,
        ec: eventCategory,
        ea: eventAction,
        el: eventLabel
    };

    await sendRequestAsync("https://www.google-analytics.com/collect", requestObject);
}

function sendRequestAsync(url, requestObject) {
    return new Promise(function (resolve, reject) {
        const message = new URLSearchParams(requestObject).toString();
        const request = new XMLHttpRequest();
        request.open("POST", url, true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(request.response);
            } else {
                reject({
                    status: this.status,
                    statusText: request.statusText
                });
            }
        };
        request.onerror = function () {
            reject({
                status: this.status,
                statusText: request.statusText
            });
        };
        request.send(message);
    });
}
