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

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function codeContainerClickedAsync(codeBlock, copyIcon, copySuccessIcon, copySuccessPopup) {
    function showCopySuccessIndicators(visible) {
        copyIcon.hidden = visible;
        copySuccessIcon.hidden = !visible;
        copySuccessPopup.hidden = !visible;
        if (visible) {
            UIkit.drop(copySuccessPopup).show();
        } else {
            UIkit.drop(copySuccessPopup).hide();
        }
    }

    const codeToCopy = codeBlock.textContent.replaceAll("$ ", "").trim() + "\n";

    try {
        await navigator.clipboard.writeText(codeToCopy);
        showCopySuccessIndicators(true);
        await delay(1500);
    } catch (error) {
        console.error(`Unable to copy to clipboard. The error was: ${JSON.stringify(error)}`);
    } finally {
        showCopySuccessIndicators(false);
    }
}

function addCopyElementsToPreBlocks() {
    // The documentation page is generated from markdown, so we inject
    // the copy functionality dynamically into those divs

    let counter = 1;

    for (const preBlock of document.getElementsByTagName("pre")) {
        const codeContainer = preBlock.parentElement;
        codeContainer.classList.add("codeContainer", "uk-visible-toggle", "uk-position-relative");

        const iconsContainer = document.createElement("div");
        iconsContainer.classList.add("uk-position-center-right", "uk-flex-middle");

        const copyIcon = document.createElement("div");
        copyIcon.classList.add("uk-padding-small", "uk-invisible-hover");
        copyIcon.setAttribute("uk-icon", "icon: copy");

        const copySuccessIcon = document.createElement("div");
        copySuccessIcon.classList.add("uk-animation-fade", "uk-amination-fast", "uk-alert-success",
            "uk-border-pill", "copyCodeSuccessIcon");
        copySuccessIcon.setAttribute("uk-icon", "icon: check");
        copySuccessIcon.setAttribute("hidden", "");

        iconsContainer.appendChild(copyIcon);
        iconsContainer.appendChild(copySuccessIcon);

        const dropTargetId = `dropTarget_${counter++}`;

        const copySuccessPopupContainer = document.createElement("div");
        copySuccessPopupContainer.classList.add("uk-width-auto");
        copySuccessPopupContainer.setAttribute("uk-drop", `pos: bottom-center; toggle: #${dropTargetId}`);

        const copySuccessPopup = document.createElement("div");
        copySuccessPopup.classList.add("uk-card-small", "uk-card-default");
        copySuccessPopup.textContent = "Copied!";

        copySuccessPopupContainer.appendChild(copySuccessPopup);

        const dropTarget = document.createElement("div");
        dropTarget.id = dropTargetId;
        dropTarget.classList.add("uk-position-center-right", "uk-padding-small");
        dropTarget.setAttribute("hidden", "");

        codeContainer.appendChild(iconsContainer);
        codeContainer.appendChild(copySuccessPopupContainer);
        codeContainer.appendChild(dropTarget);

        codeContainer.onclick = async function () {
            const codeBlock = preBlock.children[0];
            await codeContainerClickedAsync(codeBlock, copyIcon, copySuccessIcon, copySuccessPopupContainer);
        }
    }
}

addCopyElementsToPreBlocks();
