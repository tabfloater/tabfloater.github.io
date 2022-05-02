## **General**
---

### What is TabFloater?

TabFloater is a browser extension that improves your productivity by allowing you to turn any browser tab into a floating window. This is similar to the "Picture-in-Picture" functionality on TVs: the floating window is positioned as a small overlay window within your browser. You can keep browsing the web in all windows at the same time.

### How does it work?

When you float a tab, TabFloater creates a new browser window (the same way as if you pressed `Ctrl+N`), positions it as a smaller window on top of your browser and moves your chosen tab into it. Then, TabFloater will "attach" the floating window to the main one: it will always be on top and it will minimize or drop to background with the main window. No more switching back and forth!

### How do I use it?

To float a tab, simply click on the TabFloater extension icon in your browser in the top-right corner. The tab you're currently on will jump out to the floating window. You can move and resize the window as you please. If you click the icon again, the tab will be restored to its original position.

Alternatively, you can use the hotkey `Alt+K` to float a window and `Alt+I` to restore it. You can also move the window between the four corners with hotkeys - refer to the extension's Options page for details.

With Smart Positioning enabled, TabFloater will analyze the website in the main window and attempt to position the floating window in the largest empty area. This way, the floating window doesn't cover up any content in the main window's website. Note that moving the window via the hotkeys is not possible in Smart Positioning mode.

## **Companion**
---

### Why do I need to install an application on my computer to use TabFloater?

The companion has one single purpose: it is responsible for "attaching" the floating window to your main browser. Unfortunately, browsers do not allow extensions to manipulate the window - this means that the browser extension by itself is not able to force the floating window to be on top all the time.

The companion is a native application - you must download and set it up on your machine. It communicates with the browser extension and sets the floating window as a "child window" of your main browser, which will make it "stick" to your browser and will always be on top, making it always visible.

### Can I use TabFloater without installing the Companion?

Yes you can, however you will miss out on the main value of TabFloater. The floating window is just like any other window on your system. Without the companion, if you click anywhere on your main browser, the floating window will simply drop to the background and it will disappear. You need the companion so that you can use both windows at the same time.

### How do I set up the companion on Windows?

Simply download and run the installer. The extension will automatically find the companion on your computer.

If you prefer not to install it, you can download the portable package as well. Unzip it and follow the instructions in `README.txt`.

### How do I set up the companion on Linux?

##### **AppImage**

The recommended method for Linux is to use the AppImage, a single file cross-distribution format. Simply download the file and mark it executable:

```
$ wget -nv {{ site.data.downloads.download_url_prefix }}/{{ site.data.downloads.companion.linux.tag }}/{{ site.data.downloads.companion.linux.appimage }}
$ chmod +x {{ site.data.downloads.companion.linux.appimage }}
```

Then, [register](#register) the companion. Note that the AppImage format does not work with [browsers installed via Snap](#browsers-installed-via-snap).

##### **PPA**

If you use Ubuntu 20.04 or above, you can also [add our PPA and install](download) the companion via `apt`. Note that starting version 19.10, Ubuntu ships Chromium exclusively via Snap. *If you'd like to use TabFloater with Chromium on Ubuntu 20.04+, you must install via PPA and also make sure to follow the instructions below*.

##### **Browsers installed via Snap**

Browsers installed via the Snap package manager require special considerations. This distribution format imposes special restrictions on the browser: communication with other applications is restricted. Therefore, the companion will not work out-of-the-box with browsers installed via Snap.

The AppImage format does not work at all. Therefore, you must install the companion from the PPA (currently only supported on Ubuntu 20.04), or alternatively, compile it yourself from source.

Once the application is installed, you must copy the binary to your home directory, because Snap only allows the browser to invoke executables in your home directory. Note that you must place the binary in a non-hidden directory.

The following command will copy the executable into the `bin` directory in your home:

```
mkdir -p ~/bin && cp `which tabfloater-companion` ~/bin
```

Then, follow the below instructions to register the companion, but use the `~/bin/tabfloater-companion` executable instead of the one in the system directories.


##### **Register**

After you installed the application or downloaded the AppImage, you need to register the companion for the browsers you want to use it with. Use the `register` subcommand with the desired browser name. For example, to register for all browsers, run:

```
$ ./{{ site.data.downloads.companion.linux.appimage }} register all
```

Check out the command line help for additional subcommands and options. If you installed the companion from the PPA, use the `tabfloater-companion` command instead of the AppImage name. You can also read the detailed documentation by running `man tabfloater-companion` (not available for AppImage) or by checking it out <a href="https://github.com/tabfloater/tabfloater/blob/master/companion/packaging/linux/ubuntu-ppa/debian/tabfloater-companion.1" target="_blank" rel="noopener">directly on GitHub</a>.


## **Other**
---

#### Can I trust this application?

Both the browser extension and the companion are <a href="https://github.com/tabfloater/tabfloater" target="_blank" rel="noopener">open source</a>, which means you are free to examine the source code to verify it doesn't do any funny business. The browser extensions are reviewed by the owners of the Chrome Web Store and Firefox. In addition, the files you download from this website are built using automated tools which you can also double check, so you can be sure they originate from the same open source code.

The companion installation files will also contain a digital signature in the future.

#### Do you collect any information about me?

Yes, but only anonymous usage information, which can be disabled. For more details, refer to our [privacy policy](privacy).

#### Troubleshooting

If the extension detects an error, it will display a red `!` next to the icon. You can get more information by hovering over it and/or going to the Options page to learn more about the problem.

If the companion is unavailable, follow these steps:

 * Install the companion, if you haven't already
 * If you are on Windows and use the portable package, ensure you have ran `register_manifests.bat` as administrator
 * If you are on Linux, make sure you have registered the companion
 * If you are on Linux and use a browser installed via Snap, read the [relevant section](#browsers-installed-via-snap)

If you are unable to resolve the problem or if the companion returns an error (as opposed to being unavailable), refer to the below point.

#### I have a problem / request / feedback

We would love to hear from you. Please head over to GitHub and <a href="https://github.com/tabfloater/tabfloater/issues/new/choose" target="_blank" rel="noopener">open a new issue</a>.

> <sup>(Note: you need a GitHub account to open an issue)</sup>
