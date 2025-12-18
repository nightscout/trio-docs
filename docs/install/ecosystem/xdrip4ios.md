# xDrip4iOS Integration with Trio

## xDrip4iOS as CGM Source

xDrip4iOS is an open-source iOS app that can receive glucose data from various continuous glucose monitors (CGM). Trio can use xDrip4iOS as a CGM source, receiving real-time glucose readings through iOS shared app groups.

---

## Overview

When configured as a CGM source, xDrip4iOS:

- Collects glucose data from your CGM transmitter via Bluetooth
- Writes glucose readings to a shared iOS app group
- Trio reads these glucose readings in real-time
- Provides background "heartbeat" updates to keep Trio awake

This integration allows Trio users to leverage xDrip4iOS's extensive CGM support, including sensors not natively supported by Trio, advanced calibration features, and additional monitoring capabilities.

---

## Supported CGM Systems

xDrip4iOS supports many CGM systems, including:

- Dexcom G4, G5, G6, G7, ONE
- FreeStyle Libre 1, 2, 3 (with compatible transmitters)
- Medtronic Guardian (with compatible transmitters)
- Nightscout as CGM source
- And others

Check the [xDrip4iOS documentation](https://xdrip4ios.readthedocs.io/) for the complete list and setup instructions for your specific CGM.

---

## Prerequisites

To use xDrip4iOS as a CGM source with Trio, you need:

1. **xDrip4iOS App**
   - Built and installed on the same iPhone as Trio
   - Version compatible with Trio (recent versions)
   - Successfully receiving glucose data from your CGM

2. **Matching App Group Configuration**
   - Both Trio and xDrip4iOS must be built with the same App Group ID
   - Typically configured during the build process
   - Required for inter-app data sharing

3. **Same Apple Developer Team**
   - Both apps must be signed with certificates from the same Apple Developer account
   - App group provisioning profile capability enabled

!!! warning "Build Requirement"
    You cannot use a pre-built xDrip4iOS from the App Store with Trio unless they share the same app group ID, which requires building both apps yourself with matching configuration.

---

## How It Works

### Data Flow

```
CGM Transmitter (Bluetooth)
  ↓
xDrip4iOS App (processes and stores)
  ↓
Shared App Group (iOS UserDefaults)
  ↓
Trio (reads and processes)
  ↓
Loop Algorithm
```

### Technical Details

1. **xDrip4iOS writes** glucose data to shared UserDefaults with key `"latestReadings"`
2. **Trio polls** the shared app group every minute for new readings
3. **Trio processes** up to 60 recent readings per fetch
4. **Glucose data includes**:
   - Value (mg/dL)
   - Timestamp
   - Trend/direction
   - Source identifier

5. **Optional processing** in Trio:
   - Calibration (if configured)
   - Savitzky-Golay smoothing (if enabled)
   - Frequency filtering

---

## Configuration

### Step 1: Build Both Apps with Matching App Group

When building Trio and xDrip4iOS:

1. **Use the same Apple Developer account**
2. **Configure the same App Group ID** in both apps
   - Example: `group.com.yourname.diabetesapps`
   - Set in Xcode project settings under Signing & Capabilities

3. **Enable App Group capability** in provisioning profiles for both apps

If you're using GitHub Actions (Browser Build), the app group is typically configured automatically, but verify both apps use the same group ID.

### Step 2: Configure xDrip4iOS

1. Open **xDrip4iOS**
2. Configure your CGM transmitter (follow xDrip4iOS documentation)
3. Verify glucose readings are appearing
4. Enable **Share to Trio** or similar option (if available in your xDrip4iOS version)
5. Optionally enable **Heartbeat** feature for background updates

### Step 3: Select xDrip4iOS as CGM in Trio

1. Open **Trio** app
2. Navigate to **Settings → Devices → CGM**
3. Tap **Add CGM**
4. Select **xDrip4iOS** from the list
5. Configuration screen appears showing:
   - **CGM Device Address** (Bluetooth MAC address, if available)
   - **Heartbeat Status** information
   - **Open xDrip4iOS** button (launches xDrip4iOS via URL scheme)
   - Link to xDrip4iOS documentation

6. Verify glucose readings start appearing in Trio

---

## Heartbeat Feature

### What is the Heartbeat?

The CGM heartbeat is a Bluetooth signal that wakes up Trio when:
- The iPhone screen is locked
- Trio is in the background
- The phone is in Low Power Mode

This ensures Trio continues to receive glucose updates and run loop cycles even when not actively in use.

### How to Enable

1. **In xDrip4iOS**:
   - Enable "Heartbeat" feature in xDrip4iOS settings
   - Configure to send heartbeat via Bluetooth

2. **In Trio**:
   - Trio automatically detects the transmitter via shared UserDefaults
   - Reads `cgmTransmitterDeviceAddress` and Bluetooth UUIDs
   - Connects to transmitter for heartbeat signals

### Requirements

- xDrip4iOS and Trio configured with the same app group
- xDrip4iOS heartbeat feature enabled
- Bluetooth transmitter actively connected
- iOS Bluetooth permissions granted to both apps

!!! tip "Heartbeat Help"
    The heartbeat feature is optional but highly recommended. Without it, Trio may miss glucose readings or loop cycles when the phone is locked for extended periods.

---

## Glucose Data Processing

### What Trio Receives

From xDrip4iOS, Trio gets:

- **Glucose value** (mg/dL)
- **Timestamp** (when reading was taken)
- **Trend/Direction**: TripleUp, DoubleUp, SingleUp, FortyFiveUp, Flat, FortyFiveDown, SingleDown, DoubleDown, TripleDown
- **Source validation** ("xDrip" identifier)

### Processing Pipeline

1. **Read from shared app group** (every minute)
2. **Parse JSON data** (up to 60 recent readings)
3. **Validate source** (confirms readings are from xDrip)
4. **Filter by date** (only new readings since last sync)
5. **Apply calibration** (if configured in Trio)
6. **Smooth glucose** (optional Savitzky-Golay filter, 3 iterations)
7. **Store in database**
8. **Trigger loop cycle** (if new data available)

### Trend Format Support

Trio handles multiple trend formats from xDrip4iOS:
- **String format**: "FortyFiveUp", "Flat", etc.
- **Integer format**: 0-8 (matching Dexcom trend values)
- **Case variations**: "trend" or "Trend" keys

This flexibility ensures compatibility with different xDrip4iOS versions.

---

## Calibration

### Where Calibration Happens

- **xDrip4iOS handles calibration** internally for most CGMs
- Values received by Trio are already calibrated by xDrip4iOS
- Trio can apply **additional calibration** if configured (advanced use)

### Trio's Calibration Service

Trio has a calibration feature for sensors requiring manual calibration (like some Libre sensors). When using xDrip4iOS:

- This feature is typically **not needed** (xDrip4iOS already calibrates)
- Calibration is **cleared** when CGM is changed or sensor restarted
- Only use if you have a specific reason to further adjust values

---

## Glucose Smoothing

Trio offers optional glucose smoothing using the Savitzky-Golay filter:

### When to Use

- CGM readings are noisy or erratic
- You want to reduce small fluctuations
- Algorithm is over-reacting to rapid changes

### How to Enable

1. Go to **Trio Settings → Devices → CGM**
2. Enable **Smooth Glucose** toggle
3. Trio applies 3 iterations of Savitzky-Golay smoothing

!!! warning "Smoothing Caution"
    Smoothing introduces a slight delay in glucose trends. Only enable if you have consistently noisy CGM data. Most users should keep this disabled.

---

## Troubleshooting

### Glucose Not Appearing in Trio

**Check these items**:

1. **App Group Configuration**
   - Both apps built with the same App Group ID
   - Verify in Xcode project settings or build logs

2. **xDrip4iOS Receiving Data**
   - Open xDrip4iOS and verify glucose readings appear
   - Check transmitter connection status

3. **Trio CGM Selection**
   - Settings → Devices → CGM shows "xDrip4iOS" selected
   - Device address displayed (if available)

4. **Bluetooth Permissions**
   - Both apps have Bluetooth permissions granted
   - Check iOS Settings → Privacy → Bluetooth

5. **App Group Access**
   - Both apps have necessary entitlements
   - Rebuild if recently changed provisioning profiles

**Debug Steps**:
1. Open xDrip4iOS, verify recent glucose reading with timestamp
2. Switch to Trio, wait 1-2 minutes for poll
3. Check if glucose appears on Trio home screen
4. If not, try force-closing and reopening Trio

### "No CGM Device Address" Shown

**This is normal if**:
- xDrip4iOS hasn't written transmitter address to shared UserDefaults yet
- Heartbeat feature not configured in xDrip4iOS
- Using xDrip4iOS with a non-Bluetooth CGM source (e.g., Nightscout)

**Does not affect** basic glucose reading functionality—only heartbeat feature.

### Glucose Readings Delayed

**Possible causes**:

1. **Polling interval**: Trio polls every minute, so up to 1-minute delay is normal
2. **xDrip4iOS delay**: Check xDrip4iOS is receiving readings on time
3. **Phone locked**: Enable heartbeat feature for better background updates
4. **Low Power Mode**: May delay background processing

**Solutions**:
- Enable heartbeat feature in both apps
- Ensure Trio has background refresh enabled
- Temporarily disable Low Power Mode for testing

### Readings Seem Incorrect

**Check**:

1. **xDrip4iOS calibration**: Verify calibrations in xDrip4iOS are accurate
2. **Trio smoothing**: Try disabling "Smooth Glucose" in Trio settings
3. **CGM sensor accuracy**: Confirm readings match finger stick
4. **Unit mismatch**: Verify both apps using mg/dL or both using mmol/L

### Heartbeat Not Working

**Requirements**:
- xDrip4iOS heartbeat enabled
- Both apps using same app group
- Bluetooth permissions granted
- Transmitter actively connected

**Test**:
1. Lock iPhone screen
2. Wait 10 minutes
3. Unlock and check if Trio loop continued
4. If not, heartbeat isn't functioning (but glucose still updates when app opens)

---

## Advantages of Using xDrip4iOS

1. **Extended CGM Support**: Use CGMs not natively supported by Trio
2. **Advanced Features**: Calibration, smoothing, and monitoring in xDrip4iOS
3. **Redundancy**: Separate app for CGM monitoring and troubleshooting
4. **Flexibility**: Switch between different CGM systems easily
5. **Additional Displays**: xDrip4iOS widgets, watch complications, etc.
6. **Community Support**: Active xDrip4iOS community and documentation

---

## Limitations

1. **Build Requirement**: Cannot use App Store xDrip4iOS; must build with matching app group
2. **Same Device Only**: xDrip4iOS and Trio must be on the same iPhone
3. **No Bidirectional Communication**: Trio only reads from xDrip4iOS (one-way data flow)
4. **Calibration in xDrip**: Calibrations must be done in xDrip4iOS, not Trio
5. **Configuration Complexity**: Requires understanding of app groups and provisioning
6. **Silent Failures**: If app group misconfigured, errors aren't always obvious

---

## Alternative CGM Options

If xDrip4iOS integration is challenging, consider:

- **Native CGM Support**: Dexcom G5/G6/G7, FreeStyle Libre via Trio's built-in plugins
- **Nightscout as CGM**: Use Nightscout to relay CGM data from another device/app
- **Medtronic Enlite**: Built-in support for Medtronic CGM
- **Simulator**: For testing and development

Each option has trade-offs in terms of features, ease of setup, and CGM compatibility.

---

## Summary

xDrip4iOS integration with Trio provides:

- **Real-time glucose data** via shared app group
- **Background heartbeat** to keep Trio awake
- **Extended CGM support** beyond Trio's native capabilities
- **Advanced monitoring** through xDrip4iOS features

**Setup requirements**:
- Build both apps with matching app group ID
- Configure xDrip4iOS with your CGM transmitter
- Select xDrip4iOS as CGM source in Trio
- Optionally enable heartbeat for background operation

For detailed xDrip4iOS setup and CGM-specific instructions, visit the [xDrip4iOS documentation](https://xdrip4ios.readthedocs.io/).

---

## Additional Resources

- **xDrip4iOS Documentation**: [https://xdrip4ios.readthedocs.io/](https://xdrip4ios.readthedocs.io/)
- **xDrip4iOS GitHub**: [https://github.com/JohanDegraeve/xdripswift](https://github.com/JohanDegraeve/xdripswift)
- **DIY Looping Community**: Facebook groups and Discord servers for support
- **Trio Settings**: Settings → Devices → CGM for configuration
