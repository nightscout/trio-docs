# Add Customizations to Trio

Here are a few ways to customize the Trio code to suit your needs better. Please be very careful when editing any code.

## Bypass Authentification for Bolusing

:::{warning}
- If you disable this, you remove an important safety feature.
- In addition to authenticating every manual bolus, this helps to protect against sleep bolusing and pocket bolusing.
:::

Depending on your iPhone settings and model, you may have Face ID or Touch ID enabled. Those security features will also be used to authenticate bolus delivery in Trio. You can disable authentication (i.e., not require Face ID, Touch ID, or passcode for bolusing) through the following code customization.

**Steps:**

Edit line 20 of the file `FreeAPS/Sources/Services/UnlockManager/UnlockManager.swift`

Code before modification: 
```swift
if context.canEvaluatePolicy(.deviceOwnerAuthentication, error: &error) {
```

Code after modification: 
```swift
if false && context.canEvaluatePolicy(.deviceOwnerAuthentication, error: &error) {
```

## Omnipod: Add Extra Insulin on Insertion

The default value is 0.0 U of extra insulin. If you use this customization, start with a small number and work your way up. If you come from manual podding and routinely gave yourself an extra bolus with your PDM at pod change time, you may not need nearly as much with Trio - be conservative.

:::{admonition} It is important to know
:class: tip
Trio does not include the amount of insulin in the prime or insertion steps in your IOB. 
 - The pod reports every pulse that it delivers to Trio. If you look in the Pod Settings insulin delivered row, that is the total delivered by the pod minus the (prime plus insertion) amounts.
 - The only way to know that you successfully made this change is to count the clicks. Normal insertion is 0.5 units or 10 clicks (0.05 units per click). If you add 0.25 units to the "extra" value, you will get 0.25 / 0.05 = 5 extra clicks. In other words, there are 15 total clicks after you slide to insert.
:::

[Eros Pods](#eros) and [Dash Pods](#dash) have different locations for this change. Some change both files just in case, but that is unnecessary if you're only using one type of pod.

### Dash
Edit line 82 of the file `OmniBLE/OmniBLE/OmnipodCommon/Pod.swift`

Code before modification: 
```swift
public static let cannulaInsertionUnitsExtra = 0.0
```

Code after modification adding 0.25U of insulin: 
```swift
public static let cannulaInsertionUnitsExtra = 0.25
```
### Eros
Edit line 84 of the file `OmniKit/OmniKit/OmnipodCommon/Pod.swift`

Code before modification: 
```swift
public static let cannulaInsertionUnitsExtra = 0.0
```

Code after modification adding 0.25U of insulin: 
```swift
public static let cannulaInsertionUnitsExtra = 0.25
```

## Confirm Bolus Faster on Apple Watch

You can reduce the number of spins required from the Apple Watch's Digital Crown to confirm a bolus by changing line 78 of the file `FreeAPSWatch WatchKit Extension/Views/BolusConfirmationView.swift`. You can choose a different number than `5` if you want, but setting it too high could defeat the purpose of the confirmation and lead to unintended boluses.

Code before modification:
```swift
            by: 0.5,
```

Code after modification:
```swift
            by: 5,
```

## Add Custom Icon

There are several different app icon options built into Trio, but you can still add your own if you'd like. You'll need to convert the image you want into a PNG file with a resolution of 1024x1024. For this guide, we'll use this icon and call it ivan.

<img src="https://github.com/nightscout/Trio-docs/assets/31315442/7a33edf3-3343-46fe-815e-c63ddfca7b0a" width="250px"/>

1. Go into the folder `FreeAPS/Resources/Assets.xcassets/` and create a new folder called `ivan.appiconset`
   
2. Add two copies of the 1024x1024 PNG file into this folder, called `ivan.png` and `ivan 1.png`
   
3. Add a file called `Contents.json` with the following contents:
```json
{
  "images" : [
    {
      "filename" : "ivan.png",
      "idiom" : "universal",
      "platform" : "ios",
      "size" : "1024x1024"
    },
    {
      "filename" : "ivan 1.png",
      "idiom" : "universal",
      "platform" : "watchos",
      "size" : "1024x1024"
    }
  ],
  "info" : {
    "author" : "xcode",
    "version" : 1
  }
}
```


4. Insert a new line after line 14 in the file `FreeAPS/Sources/Models/Icons.swift` containing the following text: `case ivan = "ivan"`

   Code before modification:
```swift
...
    case loop = "trioLoop"
    var id: String { rawValue }
}
```

   Code after modification:
```swift
...
    case loop = "trioLoop"
    case ivan = "ivan"
    var id: String { rawValue }
}
```
