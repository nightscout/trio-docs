## Compatible devices

iAPS requires a relatively recent iPhone. The faster the phone, the better for the algorithm and battery life. You need a minimum version of the mobile operating software, called the phone's "iOS", to be installed on your iPhone. iAPS is compatible with iPhones running on iOS 15.1 or newer.

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

<b>Find your iOS version</b>

Your phone's iOS version can be found under the phone Settings -> General -> About display. The iOS number is found on the `Software Version` line. When you start looping, you should delay iOS updates until others have confirmed the software functions as normal on the newest update.

<b>Developer Mode - Mac build</b>

With iOS 16 and watchOS 9, Apple added a feature called "Developer Mode". Your iPhone and Apple Watch need to have this feature enabled in order to allow installation of iAPS. If you want to know more, click on this link: [Apple Link about Developer Mode](https://developer.apple.com/documentation/xcode/enabling-developer-mode-on-a-device).

When you build iAPS on your phone from Xcode directly, you need to have Developer Mode enabled. This is also a requirement to use the iAPS app on a watch paired to your phone.


!!! info "Developer Mode with iOS 16, watchOS 9"
    If you already have iAPS, built with Xcode on a Mac, on your phone/watch when you update to iOS 16/watchOS 9, you will be told that iAPS requires Developer Mode to run.
    
    You will not be able to run iAPS on your phone (or watch) until you have enabled Developer Mode on the device(s).

    ![phone message if trying to run xcode app without developer mode enabled](img/phone-developer-mode-required.jpeg){width="300"}
    {align="center"}

#### Automatic Updates

Apple provides frequent updates to the iOS. Often, these updates include critical security patches in addition to improved new features. Updates to iOS <i>could</i> make iAPS stop working. <b>Minor</b> updates (like 16.5 -> 16.5.1) are usually not an issue. <b>Major</b> updates (like 16.x -> 17.x) often contain changes that iAPS developers need to include in the app.

#### Turn off Automatic Updates!

* Once you accept an iOS update, you cannot go backwards
    * Some iOS updates require updates to Xcode and macOS before people can build iAPS on that device again
    * It is rare, but iOS updates have caused iAPS to stop working until other updates were made and iAPS was rebuilt on that phone
* Turn off automatic updates so you can choose when to update your phone and avoid being caught without a working iAPS app
* Google the instructions for your device:
    1. Configure your phone to automatically download the updates
    1. Choose to perform the installation of the updates manually

#### Battery Health

Make sure the battery on your phone is solid. Your phone will become a critical health device - you want it to keep working.

* Make sure a charger and cord are in your diabetes supplies
* Consider buying a battery pack, keep it charged and add it to your travel bag

!!! tip "Low Power Mode"
    Some people have reported iAPS continues working in the background (phone locked) even in [Low Power Mode](https://support.apple.com/en-us/HT205234). Others, have reported they still get red loops. You can experiment to determine if your phone/iOS/app is able to maintain green loops in low power mode.  Otherwise, best practice is to avoid Low Power Mode.

### Apple Watch

iAPS has a companion app for the Apple Watch. The companion app will show the loop status, and current insulin and carbs onboard. It will also let you add carbs, do a manual bolus and set a temporary target. The companion app only serves as a remote control for the iPhone app; connection to CGM and pump is still done through your iPhone and you will have to bring it with you.

Apple Watch Series 3 and newer are supported. Newer versions of the Apple Watch have better battery life and support always-on display.
