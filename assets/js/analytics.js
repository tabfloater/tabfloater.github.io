---
---
/*
 * Copyright 2020 Balazs Gyurak
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
var initialized = false;

export default function configureAnalytics() {
    if (Environment.toLowerCase() == "production") {
        if (!initialized) {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag("js", new Date());
            gtag("config", "UA-175107528-3", { "anonymize_ip": true });
            initialized = true;
        }
    } else {
        console.log("Not running in production - skipping Google Analytics setup");
    }
}
