# Add Customizations to iAPS

Here are a few ways to customize iAPS' code to better suit your needs. Please be very careful when editing any code.

## Bypass Authentification for Bolusing

Depending on your iPhone Settings and model, you may have Face ID or Touch ID enabled. Those security features will also be used to authenticate bolus delivery in iAPS. You can choose to disable authentication (i.e., not require Face ID, Touch ID, or passcode for bolusing) through the following code customization.

:::{admonition} Caution
:class: caution
- If you disable this, you are removing an important safety feature.
- In addition to authenticating every manual bolus, this helps to protect against sleep bolusing and pocket bolusing.
:::

Edit line 28 of the file `FreeAPS/Sources/Services/UnlockManager/UnlockManager.swift`

Code before modification: 
```swift
if context.canEvaluatePolicy(.deviceOwnerAuthentication, error: &error) {
```

Code after modification: 
```swift
if false && context.canEvaluatePolicy(.deviceOwnerAuthentication, error: &error) {
```

## Omnipod: Add Extra Insulin on Insertion

The default value is 0.0 U of extra insulin. If you use this customization, start with a small number and work your way up. If you are coming from manual podding and routinely gave yourself an extra bolus with your PDM at pod change time, you may not need nearly as much with iAPS - be conservative.

Note that iAPS does not include the amount of insulin in the prime or insertion steps in your IOB. The pod reports every pulse that it delivers to iAPS. If you look in the Pod Settings insulin delivered row, that is the total delivered by the pod minus the (prime plus insertion) amounts. The only way to know that you successfully made this change is to count the clicks. Normal insertion is 0.5 U (0.5 U / 0.05 U per click = 10 clicks). So if you add 0.25 U to the "extra" value, you should get 0.25 / 0.05 = 5 extra clicks. In other words, 15 total clicks after you press insert.

This code change is found in one location for Eros Pods an another for DASH Pods. I tend to change both files just in case, but if you're only using one kind of pod, that is not really necessary.

For DASH, edit line 82 of the file `Dependencies/OmniBLE/OmniBLE/OmnipodCommon/Pod.swift`

Code before modification: 
```swift
public static let cannulaInsertionUnitsExtra = 0.0
```

Code after modification adding 0.25U of insulin: 
```swift
public static let cannulaInsertionUnitsExtra = 0.25
```

For Eros, edit line 84 of the file `Dependencies/OmniKit/OmniKit/OmnipodCommon/Pod.swift`

Code before modification: 
```swift
public static let cannulaInsertionUnitsExtra = 0.0
```

Code after modification adding 0.25U of insulin: 
```swift
public static let cannulaInsertionUnitsExtra = 0.25
```

## Confirm Bolus Faster on Apple Watch

You can reduce the amount of spinning required from the Apple Watch's Digital Crown to confirm a bolus by changing line 78 of the file `FreeAPSWatch WatchKit Extension/Views/BolusConfirmationView.swift`. You can choose a different number than `5` if you want, but setting it too high could defeat the purpose of the confirmation and lead to unintended boluses.

Code before modification:
```swift
            by: 0.5,
```

Code after modification:
```swift
            by: 5,
```

## Add Custom Icon

There are several different app icon options built into iAPS for you to choose from, but you can still add your own if you'd like. You'll need to convert the image you want in PNG file with a resolution of 1024x1024. For this guide, we'll use this icon and call it diabeetus.
```{image} img/diabeetus.png
:alt: diabeetus
:width: 125px
```

1. Go into the folder `FreeAPS/Resources/Assets.xcassets/` and create a new folder called `diabeetus.appiconset`
   
2. Add two copies of the 1024x1024 PNG file into this folder, called `diabeetus.png` and `diabeetus 1.png`
   
3. Add a file called `Contents.json` with the following contents:
```json
{
  "images" : [
    {
      "filename" : "diabeetus.png",
      "idiom" : "universal",
      "platform" : "ios",
      "size" : "1024x1024"
    },
    {
      "filename" : "diabeetus 1.png",
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


4. Insert a new line after line 25 in the file `FreeAPS/Sources/Models/Icons.swift` containing the following text: `case diabeetus = "diabeetus"`

   Code before modification:
```swift
...
    case loop = "iAPS_Loop"
    var id: String { rawValue }
}
```

   Code after modification:
```swift
...
    case loop = "iAPS_Loop"
    case diabeetus = "diabeetus"
    var id: String { rawValue }
}
```
