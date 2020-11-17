function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showCopySuccessIndicators(visible) {
    copyUbuntuPpaCodeIcon.hidden = visible;
    copyUbuntuPpaCodeSuccessIcon.hidden = !visible;
    copyUbuntuPpaCodeSuccessPopup.hidden = !visible;
    if (visible) {
        UIkit.drop(window.copyUbuntuPpaCodeSuccessPopup).show();
    } else {
        UIkit.drop(window.copyUbuntuPpaCodeSuccessPopup).hide();
    }
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
    console.log("switching");

    switch (getOS()) {
        case "Windows": platformId = 0; break;
        case "Linux": platformId = 1; break;
        case "macOS": platformId = 2; break;
    }

    UIkit.switcher(window.platformSwitcher).show(platformId);
}

async function codeAreaClickedAsync() {
    const textToCopy = window.ubuntuPpaCode.textContent.replaceAll("$ ", "") + "\n";

    try {
        await navigator.clipboard.writeText(textToCopy);
        showCopySuccessIndicators(true);
        await delay(1500);
    } catch (error) {
        console.error(`Unable to copy to clipboard. The error was: ${JSON.stringify(error)}`);
    } finally {
        showCopySuccessIndicators(false);
    }
}

function qq() {
    const codeBlocks = document.getElementsByTagName('pre');

    debugger;
    for (const block of codeBlocks) {
        const parentDiv = block.parentElement;
        parentDiv.classList.add("codeContainer", "uk-visible-toggle", "uk-position-relative");

        const iconsContainer = document.createElement("div");
        iconsContainer.classList.add("uk-position-center-right", "uk-flex-middle");

        const copyIcon = document.createElement("div");
        copyIcon.classList.add("uk-padding-small", "uk-invisible-hover");
        copyIcon.setAttribute("uk-icon", "icon: copy");

        const copySuccessIcon = document.createElement("div");
        copySuccessIcon.classList.add("uk-animation-fade", "uk-amination-fast", "uk-alert-success", "uk-border-pill");
        copySuccessIcon.setAttribute("uk-icon", "icon: check");
        copySuccessIcon.setAttribute("hidden", "");


        iconsContainer.appendChild(copyIcon);
        iconsContainer.appendChild(copySuccessIcon);


// <div uk-drop="pos: bottom-center; toggle: #dropTarget" id="copyUbuntuPpaCodeSuccessPopup" class="uk-width-auto">
//                             <div class="uk-card-small uk-card-default uk-padding-small">Copied!</div>
//                         </div>
//                         <div hidden id="dropTarget" class="uk-position-center-right uk-padding-small"></div>


        const successPopupContainer = document.createElement("div");
        successPopupContainer.classList.add("uk-width-auto");
        successPopupContainer.setAttribute("uk-drop", "pos: bottom-center; toggle: #dropTarget");

        const successPopup = document.createElement("div");
        successPopup.classList.add("uk-card-small", "uk-card-default", "uk-padding-small");
        successPopup.textContent = "Copied!";

        successPopupContainer.appendChild(successPopup);

        const dropTarget = document.createElement("div");
        dropTarget.classList.add("uk-position-center-right", "uk-padding-small");
        dropTarget.setAttribute("hidden", "");


        parentDiv.appendChild(iconsContainer);
        parentDiv.appendChild(successPopupContainer);
        parentDiv.appendChild(dropTarget);
        var q= 1;
        q=2;

    }

}

if (window.ubuntuPpaCodeContainer) {
    window.ubuntuPpaCodeContainer.onclick = codeAreaClickedAsync;
}

setPlatformSwitcher();
qq();