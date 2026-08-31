## Overview

!!! info "Time Estimate"
    
    - 15-20 minutes to complete the enrollment forms.
    - Up to 2 days to wait for a confirmation email that enrollment has been activated.

!!! abstract "Summary"
    
    - There are two options: Paid ($99/year) or Free (rebuild weekly, Xcode only).
    - Paid Developer Account: Go to the [Apple Developer website](https://developer.apple.com/programs/enroll/) to enroll in an individual account.
    - Free: No action is required at this time. Continue to [Prepare your Computer](../mac/computer.md).
    
!!! question "FAQs"

    - **How long does activating my Apple Development account after enrolling take?** After you enroll, make sure you look for a confirmation email. Apple says confirming and setting up a new Apple developer account can take 24-48 hours. However, some people have had the process take minutes. One sure way to make it take longer is to use a different credit card to pay for the Apple Developer account enrollment than is already associated with that Apple ID. When you do that, finishing the enrollment process may be a hassle.
    - **Do I use my Apple ID or my child's Apple ID to enroll in the Apple Developer program?** The Apple ID you use to enroll in the developer program must be associated with an adult. It does not need to be the same Apple ID the PWD uses on their iPhone. For example, a parent installing the *Trio* app on their child's iPhone should configure a separate Apple ID for their child but use their own Apple ID to build the Trio app for that child.

## Apple Developer Program

To build the Trio app on a phone, you must use an Apple developer account associated with an adult (minimum age of 18). The Apple Developer account is tied to the email address associated with your Apple ID. You can build apps on phones for everyone in your family with a single Apple Developer Account tied to the Apple ID of an adult.

You have two options for an individual account: free or paid.

### Free Developer Account

If you decide to use a **FREE** developer account, here's what you need to know:

- You can only use the [Build Trio with Mac](../mac/overview.md) method to build Trio.
- Apps signed with a free developer account will expire after 7 days. On the 7th day, your Trio app will turn white when you open it and immediately close. To rebuild Trio, you must find a computer and rebuild the app onto your iPhone again. You cannot rebuild the app on day 5, hoping to reset the 7-day clock. The app will still expire on the 7th day from when it was first signed and created.
- If you switch to a paid account after trying out the free account, you must rebuild your Trio app to sign it with the new paid account. Furthermore, switching from a free account requires entering all the settings again and starting a fresh pod.
- You will have to do an extra step during the build process to remove Siri and Apple Push capabilities to build with free accounts. Because free accounts do not have access to Apple Push notifications, you will also not be able to use Remote Commands through Nightscout.

!!! important "Most Libre Sensors Require a Paid Account"
    Pairing a sensor directly to *Trio* — Libre 2 / 2 Plus using Libre 2 Direct, or Libre 3 / 3 Plus — requires the Near Field Communication (NFC) capability, because your phone must scan the sensor itself to start it. That capability is not available with a free account. Each new sensor needs its own scan, not just the first one, so this is not a step you can work around.

    Libre 1 and Libre 2 / 2 Plus sensors read through a third-party transmitter (Miao Miao, Bubble, etc. — now uncommon) do not use your phone's NFC and can be used with a free account. Some Libre models cannot be used with *Trio* at all — see [Compatible CGM](devices/cgm.md).

!!! warning "Live Activity Requires Paid Account"
    The Live Activity feature for *Trio* is not available with a free account.

### Paid Developer Account

If you decide to use a **PAID** developer account, here's what you need to know:

- The paid developer account is $99 per year. The default setting is to auto-renew annually. You can change that selection in your developer account settings at any time.
- It can take up to two days for your Apple Developer account to become active.
- If your household has multiple Trio users, only one developer account is needed. This account can be used to build Trio on multiple phones; however, each phone must have its own Apple ID.
- If you use the [Build Trio with Browser](../browser/browser-build-overview.md) method you must update the build once every 90 days.
- If you use the [Build Trio with Mac](../mac/overview.md) method, you must build it at least once a year.

### Enrolling in the Apple Developer Program

To enroll, go to the Apple Developer Program website [Apple Developer website](https://developer.apple.com/programs/enroll/).

!!! tip
    Make sure you use the credit card already associated with the Apple ID. Switching credit cards can cause delays.

If you choose to use the free account, you don't have to do anything on that website.

