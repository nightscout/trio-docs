# New User Setup

Welcome to the New User Setup Guide! This guide walks you through how to set up your Trio app once you have installed it on your phone. If you still need to install the app, head to the [Build Instructions](../operate/build.md) and come back here when you are ready to start the setup process!

To set up your Trio app, touch the settings icon ⚙️ located on the bottom right of the main screen. Each step contains links to information on setting up each part of your Trio app. Use this as your home base to refer back to as you set up your app.

## Step 1: Connect your Devices

The first step in setting up your Trio app is to connect your devices to the app, located in the Devices menu under Trio Configuration. 

### Step 1a: Verify Compatibility

If you have not already, please verify that your devices are compatible:

 1. [Phones](../configuration/CompatibleDevices.md#phones)
 2. [Watches](../configuration/CompatibleDevices.md#watches)
 2. [Pumps](../configuration/CompatibleDevices.md#pump)
 3. [CGMs](../configuration/CompatibleDevices.md#cgm)

### Step 1b: Connect Devices

Once you have verified that you are using compatible devices, you can connect them in the Trio app settings menu.

![Devices Settings](img/DeviceMenu.png){ width="600px"  }
{align=center}

 1. [Pump](settings/devices/pump.md)
 2. [CGM](settings/devices/cgm.md)
 3. [Watch (optional)](settings/devices/smart_watch.md)

- - -

## Step 2: Enter Preferred Units and Safety Limits

The next step is to follow the guidance linked here for [Units and Limits](settings/therapy/units_limits.md). These settings not only give Trio the ability to dose you based on your settings (entered in Step 3), but they also act as safety limits to prevent over-correction. 

![Units and Limits](img/unitsandlimits.png){ width="600px"  }
{align=center}

 1. [Glucose Units](settings/therapy/units_limits.md#glucose-units)
 2. [Max IOB](settings/therapy/units_limits.md#max-iob)
 3. [Max Bolus](settings/therapy/units_limits.md#max-bolus)
 4. [Max Basal](settings/therapy/units_limits.md#max-basal)
 5. [Max COB](settings/therapy/units_limits.md#max-cob)

- - -

## Step 3: Add Therapy Settings

The next step is to enter your Therapy Settings under Trio Configuration.

![Therapy Settings](img/TherapyMenu.png){ width="600px"  }
{align=center}

 1. [Basal Rates](settings/therapy/basal_rates.md)
 2. [Insulin Sensitivities (ISF)](settings/therapy/isf.md)
 3. [Carb Ratios (CR)](settings/therapy/carb_ratios.md)
 4. [Target Glucose](settings/therapy/target_glucose.md)

- - -

## Step 4: Enable UAM and SMBs

After you've entered your therapy settings, you will want to enable UAMs first. Then, you will enable either 'SMB Always' or the configuration of SMBs that you choose.

![SMB Settings](img/smbSettings.png){ width="600px"  }
{align=center}

 1. [Enable UAM](settings/algorithm/smb_settings.md#enable-uam)
 2. [Enable SMB as needed](settings/algorithm/smb_settings.md)
 3. HANDS OFF DYNAMIC SETTINGS!  

!!! warning "DO NOT ENABLE DYNAMIC SETTINGS YET"  
    
    It is essential that Trio has enough data to make sound recommendations. Your settings must be tuned to be used in an Oref algorithm and you must feel comfortable using the Trio app. It is not recommended to enable dynamic settings until ALL criteria below are met:  
    
    - You are confident that your ISF, CR, and Basal Rates are tuned for use in the Oref algorithm 
    - You have used Trio with a real CGM and real pump (not simulators) for the recommended minimum of **7 consecutive days**
    - You are comfortable with the Trio app
        
- - -

## Step 4: Enable Closed Loop

Closed loop functionality is turned off by default. This means Trio cannot make adjustments automatically. The system relies solely on you to make any recommended adjustments while Closed Loop is OFF. You can control your pump and bolus with the Trio app, but nothing can be done without your approval. This is often referred to as running an 'open loop.'

![Enable Closed loop](img/closeLoop.png){ width="600px"  }
{align=center}

[More on closing the loop](../configuration/Configure.md)

!!! warning "DO NOT ALTER ANYTHING ELSE UNTIL YOU'VE TESTED AND VERIFIED YOUR SETTINGS"
    - If you are coming from another Oref-based system, like Trio 0.2, iAPS, or AAPS, you will want to watch your current settings to ensure they are performing as they did previously. You may need to make some adjustments, but you also may find your settings work as well as they did in the previous system.  
    - If you are coming from Loop, a commercial system, or multiple daily injections (MDI), you will want to first test your settings to ensure they do not require any adjustments. You've been using a completely different algorithm to manage your insulin dosing and that means you've tailored your settings to be optimized using that method of dosing. Because Trio uses a different algorithm, your settings will almost assuredly need to be adjusted to work optimally within the Oref algorithm.
    
    You can find more information on transitioning to Trio [here](transition-qa.md)

- - -

## Step 5: Change App Icon (Optional)

Under "App Icons" in the Settings Menu, you can find various icons for your Trio app.

![Change App Icon](img/changeAppIcon.png)
{align=center}


Have a special icon in mind?  
You can use your own custom icon by following the instructions under [Customizations](../operate/customize.md).

***Congratulations!*** You've completed the New User Setup for Trio!



