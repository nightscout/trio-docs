# Devices
Adding devices to Trio is easy. You can only have one pump and one CGM active simultaneously. If you want to switch to another pump or CGM, delete the current device first. When you select a device, you will be guided through its setup with an on-screen guide.

## Pump
This section asks you to select your insulin delivery system. For more information on supported pumps, you can find them under [Compatible Pumps](../Getting-Started/pump.md). Omnipod Eros and older Medtronic devices don't support Bluetooth. These devices require a Rileylink, OrangeLink, or EmaLink to translate communication between your phone's Bluetooth signals and the pump's radio communication signals.

During pump setup, you will be asked to choose your insulin type. This will determine your duration of insulin action and peak action time. <i>These settings can be changed later, <b>though it is not recommended.</i></b>

## CGM
This section asks you to choose your glucose data source. Most options are self-explanatory. For more information on supported CGMs, please visit [Compatible CGMs](../settings/devices/cgm.md).

### Changing transmitter on Dexcom G6

If you are using a Dexcom G6 sensor, you must remember to change your transmitter ID in the Trio app whenever you change transmitters.

### Changing Dexcom G6 or G7 sensor

Change the sensor through the Dexcom G6 or G7 app. Trio will automatically pick up the reading; you don't need to do anything else.

### xDrip as BG source

xDrip is not recommended with the Trio app, as native connections to CGM are more stable.

## Watches
This section asks you to add a watch to Trio. Apple Watch and some Garmin watches are compatible.

### Apple
On an Apple Watch, you can add carbs and boluses, set a temporary target, and display BG, IOB, COB, etc.

### Garmin
Garmin watches only display data and do not allow interaction for adding carbs or insulin. There are two components that can be installed on Garmin watches: a watch face that continuously displays information, and a data field that shows glucose information during activities. Both components are independent of each other and need to be sideloaded onto the watch as described below. No need for Garmin Connect in the background — the watch just needs to be connected to the phone that runs Trio. The watch face updates with Trio loob cycles.

#### Releases
As long as nothing is published in Garmin Connect IQ, every garmin watch needs be individually compiled. You can do this yourself using VS Code with monkeyC plugin and a Garmin SDK. If not se the link below for the released watches.

#### How to do it
1. Choose a folder on your Mac and get the latest release from [this GitHub repo](https://github.com/mountrcg/garminWatch).
2. You need `*.prg` files for your watch model from the release and OpenMTP from [OpenMTP](https://openmtp.ganeshrvel.com) to transfer them to the watch.
3. Install and start OpenMTP.
4. Connect your Garmin watch via a data USB cable to the MacBook and allow the USB connection. The Garmin watch USB mode should be set to MTP.
5. Transfer `*.prg` files for your watch model to the `/GARMIN/APPS` folder.
6. Wait for the transfer to finish and disconnect the watch.
7. Add the Garmin watch in Trio settings: `Settings -> Watch -> Garmin Watch -> Add Devices`.
8. Choose the Trio watch face on the watch and enjoy.

#### Hints
The watch face will not display information after another has been used. In that case, you have to uninstall the Trio watch face and reinstall it. No similar side effects occur with the data field.

If your watch is not listed in the Release section, please ask about it in the Garmin channel on Discord.
