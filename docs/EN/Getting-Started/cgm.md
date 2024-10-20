# CGM
This section allows you to choose your glucose data source. Most options are self-explanatory.  For more information on compatible CGMs, please see the following: [link](../intro/)

CGM selection includes the following:
* [Nightscout](#nightscout)
* [xDrip](#xdrip-xdrip4ios)
* [Dexcom G5/Dexcom G6/Dexcom ONE](#dexcom-g5-g6-and-dexcom-one)
* [Dexcom G7/Dexcom ONE+](#dexcom-g7-and-dexcom-one)
* [Glucose Simulator](#glucose-simulator)
* [Libre Transmitter](#libre-transmitter)
* [Glucose Direct](#glucose-direct)
* [Medtronic Enlite](#medtronic-enlite)

## Nightscout
While using Nightscout as a CGM is an option, it should be avoided if possible because it does not keep Trio running in the background like other CGM options.

## xDrip (xDrip4iOS)
To use xDrip4iOS as a cgm source, you must build it yourself with the same Apple Developer account you used to build your Trio app. You cannot use Shuggah or a version distributed by someone else's TestFlight. Please see the following for instructions on how to build xDrip4iOS yourself: [link](../operate/build.html#xdrip4ios-or-glucose-direct-as-cgm-source)

However, if you are using Dexcom G6 or ONE with xDrip4iOS, you can choose the Dexcom G6 option in Trio rather than xDrip4iOS, and Trio will intercept the glucose readings even if you're using Shuggah or someone else's TestFlight of xDrip4iOS.

## Dexcom G5, G6 and Dexcom ONE
Trio can intercept glucose readings between the transmitter and the Dexcom app. If you are using a Dexcom G5, G6, or ONE sensor, tap Configuration CGM to enter your transmitter's 6-digit ID. Dexcom Share Credentials are not necessary. When you switch transmitters, you must delete your current transmitter from Trio by tapping Configuration CGM, scrolling down, and tapping Delete CGM. Once you do this, you can add the new transmitter with its Transmitter ID.

## Dexcom G7 and Dexcom ONE+
As long as the Dexcom G7 or ONE+ app is installed on the same phone, Trio can intercept its glucose readings. When a new G7 or ONE+ sensor is paired to the Dexcom app, Trio will automatically start reading it.

## Glucose Simulator
This option should ***only*** be used when learning how to interact with the app. It should not be used to learn how the algorithm will respond, nor should it ever be used on a living being.

## Libre Transmitter
This option can be used to pair a compatible Libre cgm directly to Trio without going through a separate app like xDrip4iOS or Glucose Direct.

## Glucose Direct
Until the providers of Glucose Direct add a Trio App Group to Glucose Direct, you cannot use this app with Trio. If that happens, then you must build it yourself with the same Apple Developer account you used to build your Trio app. You cannot use a version distributed by someone else's TestFlight.

## Medtronic Enlite
The Minimed Enlite CGM, available with the Medtronic 522/722, 523/723, and 554/754, wirelessly sends glucose readings to the pump. Trio can read the Medtronic CGM data directly from the pump using a RileyLink-compatible device.
