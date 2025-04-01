# Smart Watch

## Apple Watch

On an Apple Watch, you can add carbs and boluses, set a temporary target, and display BG, IOB, COB, etc.

Trio has a companion app for the Apple Watch. The companion app shows the loop status and current insulin and carbs onboard. It also lets you add carbs, do a manual bolus, and set a temporary target. However, the companion app only serves as a remote control for the iPhone app; connection to the CGM and pump is still done through your iPhone, and you will have to bring it with you.

Apple Watch Series 3 and newer are supported. Newer versions of the Apple Watch have better battery life and support always-on display.

### Confirm Bolus Faster
<!-- TODO: Add description of confirm bolus faster -->

### Contacts Configuration
<!-- TODO: Add contacts configuration instructions -->

Continue to [Step 2: Enter Preferred Units and Safety Limits](/configuration/new_user_setup/#step-2-enter-preferred-units-and-safety-limits) in New User Setup
- - -

## Garmin

Garmin watches only display data and do not allow interaction for adding carbs or insulin. There are two components that can be installed on Garmin watches: a watch face that continuously displays information, and a data field that shows glucose information during activities. Both components are independent of each other and need to be sideloaded onto the watch as described below. No need for Garmin Connect in the background — the watch just needs to be connected to the phone that runs Trio. The watch face updates with Trio loob cycles.

### Releases
As long as nothing is published in Garmin Connect IQ, every garmin watch needs be individually compiled. You can do this yourself using VS Code with monkeyC plugin and a Garmin SDK. If not see the link below for the released watches.

### How to do it
1. Choose a folder on your Mac and get the latest release from [this GitHub repo](https://github.com/mountrcg/garminWatch).
2. You need `*.prg` files for your watch model from the release and OpenMTP from [OpenMTP](https://openmtp.ganeshrvel.com) to transfer them to the watch.
3. Install and start OpenMTP.
4. Connect your Garmin watch via a data USB cable to the MacBook and allow the USB connection. The Garmin watch USB mode should be set to MTP.
5. Transfer `*.prg` files for your watch model to the `/GARMIN/APPS` folder.
6. Wait for the transfer to finish and disconnect the watch.
7. Add the Garmin watch in Trio settings: `Settings -> Watch -> Garmin Watch -> Add Devices`.
8. Choose the Trio watch face on the watch and enjoy.

### Hints
The watch face will not display information after another has been used. In that case, you have to uninstall the Trio watch face and reinstall it. No similar side effects occur with the data field.

If your watch is not listed in the Release section, please ask about it in the Garmin channel on Discord.

Continue to [Step 2: Enter Preferred Units and Safety Limits](/configuration/new_user_setup/#step-2-enter-preferred-units-and-safety-limits) in New User Setup
- - -
