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

ubuntuPpaCodeContainer.onclick = async function() {
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

window.onload = function() {
    setPlatformSwitcher();
}
