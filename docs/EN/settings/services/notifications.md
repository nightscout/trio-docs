# Notifications
Allows configuration of iAPS notifications. Adjust based on your preferences.

Notifications can be enabled/disabled by toggling `Allow Notifications` on/off in `iPhone Settings > Notifications > iAPS`.

## Glucose

### Show glucose on the app badge
This will add your current glucose on top of your iAPS icon. \
<img src="./img/badge.png" width="80px" />

### Always Notify Glucose
A notification will be triggered every time your glucose is updated in iAPS.

### Always play alert sound
This will cause a sound to be triggered by every iAPS notification.

### Also add source info
The source of the glucose reading will be added to the notification.

### Low
Set this to the highest value you want a low glucose notification to be triggered at.

### High
Set this to the lowest value you want a high glucose notification to be triggered at.

## Carbs Required Threshold
iAPS may predict you at risk of having a low blood sugar event, and will accordingly recommend you consume a suggested amount of carbs. Carbs Required Threshold determines the minimum amount of carbs required before iAPS can send a notification. 
