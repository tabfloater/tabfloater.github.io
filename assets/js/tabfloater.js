function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getOS() {
    const platformOrAppVersion = navigator.platform || navigator.appVersion;
    const osInfo = platformOrAppVersion.toString().toLowerCase();

    if (osInfo.indexOf("win") != -1) {
        return "Windows";
    }
    if (osInfo.indexOf("linux") != -1 || osInfo.indexOf("x11") != -1) {
        return "Linux";
    }
    if (osInfo.indexOf("mac") != -1) {
        return "macOS";
    }
}

function setPlatformSwitcher() {
    let platformId = 0;

    switch (getOS()) {
        case "Windows": platformId = 0; break;
        case "Linux": platformId = 1; break;
        case "macOS": platformId = 2; break;
    }

    UIkit.switcher(window.platformSwitcher).show(platformId);
}

async function codeContainerClickedAsync(codeBlock, copyIcon, copySuccessIcon, copySuccessPopup) {
    function showCopySuccessIndicators(visible) {
        copyIcon.hidden = visible;
        copySuccessIcon.hidden = !visible;
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

        const copySuccessPopupContainer = document.createElement("div");
        copySuccessPopupContainer.classList.add("uk-width-auto");
        copySuccessPopupContainer.setAttribute("uk-drop", "pos: bottom-center; toggle: #dropTarget");

        const copySuccessPopup = document.createElement("div");
        copySuccessPopup.classList.add("uk-card-small", "uk-card-default", "uk-padding-small");
        copySuccessPopup.textContent = "Copied!";

        copySuccessPopupContainer.appendChild(copySuccessPopup);

        const dropTarget = document.createElement("div");
        dropTarget.id = "dropTarget";
        dropTarget.classList.add("uk-position-center-right", "uk-padding-small");
        dropTarget.setAttribute("hidden", "");

        codeContainer.appendChild(iconsContainer);
        codeContainer.appendChild(copySuccessPopupContainer);
        codeContainer.appendChild(dropTarget);

        codeContainer.onclick = async function() {
            const codeBlock = preBlock.children[0];
            await codeContainerClickedAsync(codeBlock, copyIcon, copySuccessIcon, copySuccessPopupContainer);
        }
    }
}

if (window.platformSwitcher) {
    setPlatformSwitcher();
}

addCopyElementsToPreBlocks();
