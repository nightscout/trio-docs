<!--include-markdown-start-->

<!--include-markdown-supported-cgms-start-->
✅ The following CGMs can be used with Trio:

- [Dexcom G5](../configuration/settings/devices/cgm.md#dexcom-g5-g6-one)
- [Dexcom G6 / ONE](../configuration/settings/devices/cgm.md#dexcom-g5-g6-one)
- [Dexcom G7 / ONE+](../configuration/settings/devices/cgm.md#dexcom-g7-one)
<!--include-markdown-supported-freestyle-sensors-start-->
- [FreeStyle Libre 1 / 2 / 2 Plus (limited models)](../configuration/settings/devices/cgm.md#freestyle-libre-1-2-2-plus)
    - US Libre 1 10-day sensors (via transmitters)
    - US Libre 1 14-day sensors (via transmitters)
    - International Libre 1 sensors (via transmitters)
    - European Libre 2 / 2 Plus sensors (via transmitters)
    - European Libre 2 / 2 Plus sensors (direct via Bluetooth)
<!--include-markdown-supported-freestyle-sensors-end-->
- [FreeStyle Libre 3 / 3 Plus](../configuration/settings/devices/cgm.md#freestyle-libre-3-3-plus) (Open-beta)
    - Libre 3 and Libre 3 Plus, all models (direct via Bluetooth)
- [Eversense E3 / 365](../configuration/settings/devices/cgm.md#eversense-e3-365) (Open-beta)
- [Accu-Chek SmartGuide](../configuration/settings/devices/cgm.md#accu-chek-smartguide) (TESTING)
- [xDrip4iOS](../configuration/settings/devices/cgm.md#xdrip4ios)
- ([Nightscout](../configuration/settings/devices/cgm.md#nightscout-as-cgm))
- ([Glucose Simulator](../configuration/settings/devices/cgm.md#glucose-simulator))
<!--include-markdown-supported-cgms-end-->

<!--include-markdown-unsupported-freestyle-sensors-start-->

!!! info "❌ Unsupported FreeStyle Libre sensors"
     
    - Non-European FreeStyle Libre 2 (US models not supported)
    - FreeStyle Libre Pro
    - FreeStyle Libre H
<!--include-markdown-unsupported-freestyle-sensors-end-->

 ℹ️ The table below shows the **compatibility matrix for FreeStyle Libre sensors**.

|Model |Region|Duration|Supported?|Via|
|---|---|---|---|---|
|Libre 1|US|10 days|✅ Yes|Transmitter|
|Libre 1|US|14 days|✅ Yes|Transmitter|
|Libre 1|International (non US, non EU)|14 days|✅ Yes|Transmitter|
|Libre 1|Europe|14 days|✅ Yes|Transmitter|
|Libre 2 / 2 Plus|Europe|14 days|✅ Yes|Bluetooth|
|Libre 2 (non-European)|US|14 days|❌ **No**|N/A|
|Libre 3|All regions|14 days|✅ Yes (Open-beta in `dev` branch)|Bluetooth|
|Libre 3 Plus|All regions|15 days|✅ Yes (Open-beta in `dev` branch)|Bluetooth|
|FreeStyle Libre Pro|All regions|14 days|❌ **No**|N/A|
|FreeStyle Libre H|All regions|Varies| ❌ **No**|N/A|

<!--include-markdown-end-->
