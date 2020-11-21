## **General**
---

### What is TabFloater?

TabFloater is a browser extension. It allows you to multitask easily by moving your chosen browser tabs into a floating window. This is similar to the "Picture-in-Picture" mode on TVs: the floating window is positioned as a small window within your browser.

The floating window is "attached" to your browser window, but it's always on top. This means you can easily  interact with both websites at the same time.

### How does it work?

When you float a tab, the following happens: TabFloater creates a new browser window (the same way as if you pressed `CTRL+N`), moves your chosen tab into that window, and positions it as a smaller window on top of your browser. Then, it will "attach" the floating window to your main browser instance. It will always be on top, but will move with the main window as one unit.

### How do I use it?



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

The recommended method for Linux is to use the AppImage, a single-file cross-distribution format. Simply download the file and mark it executable:

```
$ wget -nv {{ site.data.downloads.download_url_prefix }}/{{ site.data.downloads.companion.linux.tag }}/{{ site.data.downloads.companion.linux.appimage }}
$ chmod +x {{ site.data.downloads.companion.linux.appimage }}
```

Alternatively, if you use Ubuntu 20.04, you can [add our PPA and install](download) the companion via `apt`. Once installed, you can interact with the application by running `tabfloater-companion`.

Once you install the application or download the AppImage, you need to register the companion for the browsers you want to use it for. Use the `register` subcommand with the browser you want to use TabFloater with. To register for all browsers, run:

```
$ {{ site.data.downloads.companion.linux.appimage }} register all
```

Check out the command line help for additional subcommands and options. If you used the PPA to install the companion, use the `tabfloater-companion` command instead of the AppImage name. You can also read the detailed documentation by running `man tabfloater-companion` (not available for AppImage) or by checking it out [directly on GitHub](https://github.com/tabfloater/tabfloater/blob/master/companion/packaging/linux/ubuntu-ppa/debian/tabfloater-companion.1).

There are plans to add additional Linux distribution methods in the future.

##### **Chromium Snap warning**

On Ubuntu 19.10 and up, the Chromium browser is only available via the Snap package manager. Due to Snap's confinement rules, Chromium is not able to invoke every executable on the machine. The only binaries allowed to be invoked are the ones that are located somewhere within the user's home directory. Therefore, to use the companion with Chromium Snap, you need to copy it to your home directory, run it from there and register for Chromum Snap. Note that if you copy the executable to a hidden directory (e.g. `~/.tabfloater-companion/`), Chromium Snap will not be able to use it. The application must reside in a regular, non-hidden directory.

Example:

```
mkdir ~/bin && cp `which tabfloater-companion` ~/bin
```

## **Other**
---

#### Can I trust this application?

Yes. Both the browser extension and the companion are [open source](https://github.com/tabfloater/tabfloater), which means you are free to examine the source code to verify it doesn't do any funny business. In addition, the files you download from this website are built publicly using automated tools, so you can be sure they originate from the same open source code.

#### Do you collect any information about me?

Yes, but only anonymous usage information, which can be disabled. For more details, refer to our [privacy policy](privacy).

#### I have an issue / request / feedback

Great! We would love to hear from you. Please head over to GitHub and [open a new issue](https://github.com/tabfloater/tabfloater/issues/new).

> <sup>(Note: you need a GitHub account to open an issue)</sup>

## **Troubleshooting**
---

#### blahj
