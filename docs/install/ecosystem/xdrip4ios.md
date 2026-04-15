# xDrip4iOS

xDrip4iOS (also known as "xDrip for iOS" or "xdripswift") is an open-source application to display real time blood glucose data.

If you prefer to use xDrip4iOS as a CGM source with *Trio* you must do several things:

* Build xDrip4iOS with the same Apple Developer ID as you use to build Trio
* In xDrip4iOS select use as a heartbeat for Trio (otherwise, your app will not loop properly).


For more information, please refer to the [xDrip4iOS Documentation](https://xdrip4ios.readthedocs.io/en/latest/).
