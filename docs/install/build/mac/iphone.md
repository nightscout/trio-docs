## Overview

!!! info "Time Estimate"

    - 5 minutes, to check your device and iOS.
    - 20 minutes to update your compatible device to a new iOS.
    - 0 minutes, if you own an Android and will not use Apple products; check out [AndroidAPS Documention](https://androidaps.readthedocs.io/en/latest/)

!!! abstract "Summary"

    - Check your phone against the compatible device list.
    - Make sure the phone has good battery life.
    - Activate `Developer Mode`.
    - Turn off automatic updates.

!!! question "FAQs"

    - **Can I use an Android?** No. Check out [AndroidAPS Documention](https://androidaps.readthedocs.io/en/latest/).
    - **Does my phone need a cell plan?** No. Trio works using your phone's Bluetooth communications with your CGM and your insulin pump; no internet connection is required. However, an active internet connection is required if access to Dexcom Follow or Nightscout monitoring is a priority. 
    - **What watches work with Trio?** Trio has a companion application for the Apple Watch. The Trio watch app can add carbs and boluses, set temporary targets, and visualize your glucose, insulin, and carbs onboard. This application works only with the Apple Watch. Some Garmin watches are also compatible but only display data. 

## Compatible iPhones

Trio requires a relatively recent phone. The faster the phone, the better for the algorithm and battery life. You need a minimum version of the mobile operating software, called the phone's 'iOS', to be installed on your phone. Trio is compatible with phones running on iOS 17 or newer.

These devices are compatible with iOS 17 and newer iOS.

- iPhone 16, all variants
- iPhone 15, all variants
- iPhone 14, all variants
- iPhone 13, all variants
- iPhone 12, all variants
- iPhone 11, all variants
- iPhone XS Max
- iPhone XS
- iPhone XR
- iPhone SE (3rd generation; 2022 first release)
- iPhone SE (2nd generation; 2020 first release)

!!! info "iOS Version"
    If your iOS is not listed, e.g., 17.6.1, choose the first row that is less than your iOS.

| iOS Version | minimum Xcode | minimum macOS | 
|:---:|:---:|:---:|
| 18.1 | 16.1 | 14.5 |
| 18.0 | 15.4 | 14.5 |
| 17.5 | 15.4 | 14.0 |
| 17.4 | 15.3 | 14.0 |
| 17.0 | 15.0 | 13.5 |

## Find your iOS Version 

!!! warning "Warning"

    **Your phone iOS dictates your MacOS and Xcode requirements**  - The more up-to-date you keep your phone iOS, the more up-to-date your computer and MacOS must be to build Trio with Xcode.
    
1. On your phone, click on the 'Settings' application.

2. Next,  select the 'General' option.

3. Then, select the 'About' option.

4. Review and take note of your 'iOS Version' at the top of the page.

5. Compare your 'iOS Version' with the above table to confirm what "macOS" your computer requires. 

    ![Screenshot: iOS Version Image](img/ios-version.png){width="481"}
      {align= "center"}

!!! warning

    iOS Beta versions are untested with Trio. Therefore, they should never be on your device. Limited support will be available for beta version users. 
    
## Automatic Updates

Apple frequently updates iOS, often including critical security patches and improved new features. In some instances, iOS updates can make Trio stop working. ** Minor ** updates (like 16.5 -> 16.5.1) are usually not an issue. Whereas, **Major** updates (like 17.x -> 18.x) often contain changes that Trio developers need to include in the app.

!!! warning "Turn Off Automatic Updates!"

    - Once you accept an iOS update, you cannot go backward.
    - Some iOS updates require updates to Xcode and macOS before people can build Trio on that device again.
    - It is rare, but iOS updates have caused Trio to stop working until other updates were made and Trio was rebuilt on that phone.
    - Turn off automatic updates so you can choose when to update your phone and avoid being caught without a working Trio app.
    - Google the instructions for your device:  
        1) Configure your phone to download the updates automatically.    
        2) Choose to install the updates manually.

## Developer Mode

All devices using Trio must have 'Developer Mode' activated. This change came with iOS 16 and watchOS 9. This feature must be activated to allow Trio to install on the device. To learn more, click on this link: [Apple Developer Mode](https://developer.apple.com/documentation/xcode/enabling-developer-mode-on-a-device).

### Activate Developer Mode - iPhone

1. To activate 'Developer Mode', your phone must be turned on and plugged into the computer with the Xcode application open.

2. Your phone will then prompt you to trust the computer. Select 'Trust'.

3. Next, open your phone's 'Settings' application.

4. In the 'Settings' application, scroll and choose 'Privacy & Security'.

5. Scroll to the bottom of the page, and under the 'Security' banner, you will see an option for 'Developer Mode';
    - If it says On - no further action is required.
    - If it says Off, tap on the row and slide the slider to the green (enabled) position.
    
6. Your phone will then prompt you to restart the device.

7. After the restart, you will be prompted to turn on 'Developer Mode'.

8. You are now ready to begin building from Xcode onto this phone.

### Activate Developer Mode - Watch

!!! warning "Build, Enable, Build"

    Users' reports indicate that when building a new Apple Watch, you must first build the app with Xcode before the developer mode becomes available. So, plan to build with the watch paired, and then enable <code>Developer Mode</code> and build again.

In addition to your phone, if you plan on using an Apple Watch, then you must activate 'Developer Mode' on the watch itself. To determine if 'Developer Mode' is activated, follow the following instructions:

1. Open the 'Settings' application on the watch.

2. In the 'Settings' application, scroll and choose 'Privacy & Security'.

3. Scroll to the bottom of the page, and under the 'Security' banner, you will see an option for 'Developer Mode';
    - If it says On - no further action is required.
    - If it says Off, tap on the row and slide the slider to the green (enabled) position.
    
4. Your watch will then prompt you to restart the device.

5. After the restart, you will be prompted to turn on 'Developer Mode'.

6. You are now ready to begin building from Xcode onto this watch.

### Enable Watch WidgetKit

There are now options that appear after you enable 'Developer Mode'. Go on and configure those now. 
1. Open the 'Settings' application on your watch.

2. Next, scroll to the bottom of the page and tap on the 'Developer' option.

3. Scroll until you see WigetKid Developer Mode and enable the option. This will allow faster updates of watch complications.

