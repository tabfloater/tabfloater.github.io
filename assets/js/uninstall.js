---
---
/*
 * Copyright 2021 Balazs Gyurak
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

import * as Analytics from "/assets/js/analytics.js";

const Environment = "{{ jekyll.environment }}";
const MaxCommentLength = 500;

function byteCount(str) {
    return encodeURI(str).split(/%..|./).length - 1;
}

function showElement(element) {
    element.hidden = false;
    element.classList.add("uk-animation-fade", "uk-animation-fast");
}

function getSelectedReason() {
    if (window.reason_noUse.checked) return "dontUseIt";
    if (window.reason_error.checked) return "errorEncountered";
    if (window.reason_noClearDocs.checked) return "docsNotClearEnough";
    if (window.reason_noCompanionInstall.checked) return "dontWantToInstallCompanion";
    if (window.reason_noCompanionPlatform.checked) return "companionNotAvailableOnPlatform";
    if (window.reason_otherExtension.checked) return "foundAnotherExtension";
    if (window.reason_other.checked) return "other";
}

function setSubmitbuttonState() {
    const reasonSelected = getSelectedReason();
    const commentValid = byteCount(window.commentsTextArea.value) <= MaxCommentLength;
    window.submitButton.disabled = !reasonSelected || !commentValid;
}

function reasonChanged(event) {
    let placeholderText = "Any additional thoughts?";
    window.docsLabel.hidden = true;
    window.troubleShootingLabel.hidden = true;
    setSubmitbuttonState();

    switch (event.target) {
        case window.reason_noUse: placeholderText = "Any feature we could add for you to reconsider?"; break;
        case window.reason_error: {
            placeholderText = "What went wrong?";
            showElement(window.troubleShootingLabel);
        } break;
        case window.reason_noClearDocs: {
            showElement(window.docsLabel);
        } break;
        case window.reason_otherExtension: placeholderText = "Do you mind sharing which extension you switched to?"; break;
        case window.reason_other: placeholderText = "Please share your reason..."; break;
    }

    window.commentsTextArea.placeholder = placeholderText;
}

function commentChanged() {
    const length = byteCount(window.commentsTextArea.value);
    window.charCount.textContent = `${length}/${MaxCommentLength}`;

    if (length > MaxCommentLength) {
        window.commentsTextArea.classList.add("uk-form-danger");
        window.charCount.classList.add("uk-form-danger");
    } else {
        window.commentsTextArea.classList.remove("uk-form-danger");
        window.charCount.classList.remove("uk-form-danger");
    }

    setSubmitbuttonState();
}

async function sendToGoogleAnalyticsAsync(reason, comments) {
    if (Environment.toLowerCase() === "production") {
        await Analytics.sendEventAsync("UninstallEvent", reason, comments);
    } else {
        console.log("Not running in production - not sending uninstall survey results to Google Analytics. Would send the following data:");
        console.log(`Reason: '${reason}'`);
        console.log(`Comments: '${comments}'`);
    }
}

window.reason_noUse.onchange = reasonChanged;
window.reason_error.onchange = reasonChanged;
window.reason_noClearDocs.onchange = reasonChanged;
window.reason_noCompanionInstall.onchange = reasonChanged;
window.reason_noCompanionPlatform.onchange = reasonChanged;
window.reason_otherExtension.onchange = reasonChanged;
window.reason_other.onchange = reasonChanged;

window.commentsTextArea.oninput = commentChanged;
window.commentsTextArea.onchange = function () {
    window.commentsTextArea.value = window.commentsTextArea.value.trim();
    commentChanged();
}

window.submitButton.onclick = async function () {
    const reason = getSelectedReason();
    const comments = window.commentsTextArea.value;

    try {
        await sendToGoogleAnalyticsAsync(reason, comments);
        window.uninstallForm.hidden = true;
        window.responseSuccess.hidden = false;
    } catch (error) {
        window.uninstallForm.hidden = true;
        window.responseError.hidden = false;
        window.responseErrorCodeArea.textContent = `Reason: ${reason}\nComments: '${comments}'\nError: '${error.message}'\n${error.stack}`;
    }
}
