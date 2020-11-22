## **General**
---

### What is TabFloater?

TabFloater is a browser extension. It allows you to multitask easily by moving your chosen browser tabs into a floating window. This is similar to the "Picture-in-Picture" mode on TVs: the floating window is positioned as a small window within your browser.

The floating window is "attached" to your browser window, but it's always on top. This means you can easily  interact with both websites at the same time.

### How does it work?

When you float a tab, the following happens: TabFloater creates a new browser window (the same way as if you pressed `Ctrl+N`), moves your chosen tab into that window, and positions it as a smaller window on top of your browser. Then, it will "attach" the floating window to your main browser instance. It will always be on top, but will move with the main window as one unit.

### How do I use it?

To float a tab, simply click on the TabFloater extension icon in your browser in the top-right corner. The tab you're currently on will jump out to a floating window. You can move and resize the window as you please. If you click the icon again, the tab will be restored to its original position.

Alternatively, you can use the hotkey `Alt+K` to float a window and `Alt+I` to restore it. You can also move the window between the four corners with hotkeys - refer to the extension's Options page for details.

With Smart Positioning enabled, TabFloater will analyze the website in the background, and attempt to position the floating window in the largest empty area. This way, you can make sure the window doesn't cover up any content in the background website. Note that moving the window via the hotkeys is not possible in Smart Positioning mode.

## **Companion**
---

### Why do I need to install an application on my computer to use TabFloater?

The companion has one single purpose: this is the component that "attaches" the floating window to your main browser. Unfortunately, browsers do not allow extensions to manipulate the windows themselves: this means that the browser extension by itself is not able to force the floating window to be on top all the time.

The companion is a native application, meaning that you must download and set it up on your machine. It communicates with the browser extension and sets the floating window as a "child window" of your main browser, which will make it "stick" to your browser and will always be on top, making it always visible.

### Can I use TabFloater without installing the Companion?

Yes you can, however your experience won't be great. The floating window is just like any other window on your system. Without the companion, if you click anywhere on your main browser, the floating window will simply drop to the background and it will disappear. You need the companion so that you can use both windows at the same time.

### How do I set up the companion on Windows?

Simply download and run the installer - no other steps are necessary. The extension will automatically find the companion on your computer.

If you prefer not to install it, you can download the portable package as well. Unzip it and follow the instructions in `README.txt`.

### How do I set up the companion on Linux?
*If you use Ubuntu 20.04, make sure to read the section on [browsers installed via Snap](#browsers-installed-via-snap)*

The recommended method for Linux is to use the AppImage, a single-file cross-distribution format. Simply download the file and mark it executable:

```
$ wget -nv {{ site.data.downloads.download_url_prefix }}/{{ site.data.downloads.companion.linux.tag }}/{{ site.data.downloads.companion.linux.appimage }}
$ chmod +x {{ site.data.downloads.companion.linux.appimage }}
```

Alternatively, if you use Ubuntu 20.04, you can [add our PPA and install](download) the companion via `apt`. Once installed, you can interact with the application by running `tabfloater-companion`.

Once you install the application or download the AppImage, you need to register the companion for the browsers you want to use it for. Use the `register` subcommand with the browser you want to use TabFloater with. For example, to register for all browsers, run:

```
$ {{ site.data.downloads.companion.linux.appimage }} register all
```

Check out the command line help for additional subcommands and options. If installed the companion from the PPA, use the `tabfloater-companion` command instead of the AppImage name. You can also read the detailed documentation by running `man tabfloater-companion` (not available for AppImage) or by checking it out [directly on GitHub](https://github.com/tabfloater/tabfloater/blob/master/companion/packaging/linux/ubuntu-ppa/debian/tabfloater-companion.1).

There are plans to add additional Linux distribution methods in the future.

##### **Browsers installed via Snap**

Browsers installed via the Snap package manager require special considerations. This is especially relevant for Ubuntu, because starting version 19.10, Ubuntu ships Chromium exclusively via Snap. This distribution format imposes special restrictions on the browser: communication with other applications is restricted. Therefore, the companion will not work out-of-the-box with browsers installed via Snap.

The AppImage format does not work at all, you must install the companion from the PPA (this is currently only supported for Ubuntu 20.04). Once the application is installed, you must copy the application binary to your home directory, because Snap only allows the browser to invoke executables in your home directory. Note that you must place the binary in a non-hidden directory.

The following command will copy the executable in the `bin` directory in your home:

```
mkdir -p ~/bin && cp `which tabfloater-companion` ~/bin
```

Make sure to invoke the binary in your home directory when you register the companion.

## **Other**
---

#### Can I trust this application?

Yes. Both the browser extension and the companion are [open source](https://github.com/tabfloater/tabfloater), which means you are free to examine the source code to verify it doesn't do any funny business. In addition, the files you download from this website are built publicly using automated tools, so you can be sure they originate from the same open source code.

#### Do you collect any information about me?

Yes, but only anonymous usage information, which can be disabled. For more details, refer to our [privacy policy](privacy).

#### It doesn't work!

The floating window doesn't stay on top? If the extension detects an error, it will display a red `!` next to the icon. You can get more information by hovering over it and/or going to the Options page to learn more about the problem.

If the companion is unavailable, follow these steps:

 * Install the companion, if you haven't already
 * If you are on Windows and using the portable package, ensure you have ran `register_manifests.bat`
 * If you are on Linux, make sure you have [registered](#how-do-i-set-up-the-companion-on-linux) the companion
 * If you are using Ubuntu 20.04 and/or a browser that is installed via Snap, read the [relevant section](#browsers-installed-via-snap)

If you are unable to resolve the problem, refer to the below point.

#### I have a problem / request / feedback

We would love to hear from you. Please head over to GitHub and [open a new issue](https://github.com/tabfloater/tabfloater/issues/new).

> <sup>(Note: you need a GitHub account to open an issue)</sup>
