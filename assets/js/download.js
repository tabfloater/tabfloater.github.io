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

function getOS() {
    const appVersion = navigator.appVersion || "";
    const platform = navigator.platform || "";
    const osInfo = `${appVersion}${platform}`.toLowerCase();

    if (osInfo.indexOf("win") != -1) {
        return "Windows";
    }
    if (osInfo.indexOf("android") != -1) {
        return "Android";
    }
    if (osInfo.indexOf("iphone") != -1) {
        return "iOS";
    }
    if (osInfo.indexOf("mac") != -1) {
        return "macOS";
    }
    if (osInfo.indexOf("linux") != -1 || osInfo.indexOf("x11") != -1) {
        return "Linux";
    }
}

(function () {
    let platformId = 0;

    switch (getOS()) {
        case "Windows": platformId = 0; break;
        case "Linux": platformId = 1; break;
        case "macOS": platformId = 2; break;
    }

    UIkit.switcher(window.platformSwitcher).show(platformId);
})();
