## Compatible devices

Trio requires a relatively recent iPhone. The faster the phone, the better for the algorithm and battery life. You need a minimum version of the mobile operating software, called the phone's "iOS", to be installed on your iPhone. Trio is compatible with iPhones running on iOS 15.1 or newer.

### iPhone

These devices are compatible with iOS 16 and newer iOS.

- iPhone 14, all variants
- iPhone 13, all variants
- iPhone 12, all variants
- iPhone 11, all variants
- iPhone X, all variants
- iPhone 8, all variants
- iPhone SE (3rd generation or later model; 2022 first release)
- iPhone SE (2nd generation; 2020 first release)

#### iOS version and Developer Mode

**Find your iOS version**

Your phone's iOS version can be found under the phone Settings -> General -> About display. The iOS number is found on the `Software Version` line. When you start looping, you should delay iOS updates until others have confirmed the software functions as normal on the newest update.

**Developer Mode - Mac build**

With iOS 16 and watchOS 9, Apple added a feature called "Developer Mode." This feature must be enabled on your iPhone and Apple Watch to allow the installation of Trio. To learn more, click on this link: [Apple Link about Developer Mode](https://developer.apple.com/documentation/xcode/enabling-developer-mode-on-a-device).

When you build Trio on your phone from Xcode directly, you must enable Developer Mode. This is also required in order to use the Trio app on a watch paired to your phone.

:::{admonition} Developer Mode with iOS 16, watchOS 9
:class: tip
If you already have Trio, built with Xcode on a Mac, on your phone/watch, when you update to iOS 16/watchOS 9, you will be told that Trio requires Developer Mode to run.

You cannot run Trio on your phone (or watch) until you have enabled Developer Mode on the device(s).
:::

#### Automatic Updates

Apple provides frequent updates to the iOS. These updates often include critical security patches and improved new features. Updates to iOS _could_ make Trio stop working.\
**Minor** updates (like 16.5 -> 16.5.1) are usually not an issue.\
**Major** updates (like 17.x -> 18.x) often contain changes that Trio developers need to include in the app.

#### Turn off Automatic Updates!

* Once you accept an iOS update, you cannot go backward
    * Some iOS updates require updates to Xcode and macOS before people can build Trio on that device again
    * It is rare, but iOS updates have caused Trio to stop working until other updates were made and Trio was rebuilt on that phone
* Turn off automatic updates so you can choose when to update your phone and avoid being caught without a working Trio app
* Google the instructions for your device:
    1. Configure your phone to download the updates automatically
    1. Choose to perform the installation of the updates manually

#### Battery Health

Make sure your phone's battery is functioning optimally. Your phone will become a critical health device, and you want it to keep working.

* Make sure a charger and cord are in your diabetes supplies
* Consider buying a battery pack, keep it charged, and add it to your travel bag

:::{admonition} **Low Power Mode**
:class: tip
Some people have reported that Trio continues working in the background (phone locked) even in [Low Power Mode](https://support.apple.com/en-us/HT205234). Others have reported that they still get red loops. You can experiment to determine if your phone/iOS/app is able to maintain green loops in low-power mode. Otherwise, the best practice is to avoid Low-Power Mode.
:::

### Apple Watch

Trio has a companion app for the Apple Watch. The companion app shows the loop status and current insulin and carbs onboard. It also lets you add carbs, do a manual bolus, and set a temporary target. However, the companion app only serves as a remote control for the iPhone app; connection to the CGM and pump is still done through your iPhone, and you will have to bring it with you.

Apple Watch Series 3 and newer are supported. Newer versions of the Apple Watch have better battery life and support always-on display.
