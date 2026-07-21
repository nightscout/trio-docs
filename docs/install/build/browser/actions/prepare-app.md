## New Trio Builders

### Create the `Trio App Group`

If you already have a `Trio App Group`

* You can skip this step - your existing App Groups are found at this link: [App Group List](https://developer.apple.com/account/resources/identifiers/list/applicationGroup)
* If your `Trio App Group` was created from a Mac with Xcode, you may choose to edit the Description to make the **NAME** match

If you do not have a `Trio App Group`:

* Go to [Register an App Group](https://developer.apple.com/account/resources/identifiers/applicationGroup/add/) on the Apple developer site and use the table below to help you create one.
* Replace `TEAMID` with your *Apple* Developer ID.

| NAME | Xcode version (NAME) | IDENTIFIER |
|:--|:--|:--|
| Trio App Group | group org nightscout TEAMID trio trio-app-group| <code>group.org.nightscout.TEAMID.trio.trio-app-group</code> |

### Table of <code>Identifiers</code>

These are the <code>Identifiers</code> created by running the *GitHub* action "<code>Add Identifiers</code>". Only 3 of them need to have the Trio App Group added. The `Trio` Identifier also needs the Time Sensitive Notifications capability enabled manually.

| NAME | Xcode version (NAME) | IDENTIFIER |
|:--|:--|:--|
| Trio | XC org nightscout TEAMID trio | <code>org.nightscout.TEAMID.trio</code> |
| Trio LiveActivity | - | <code>org.nightscout.TEAMID.trio.LiveActivity</code> |
| Trio Watch App | XC IDENTIFIER | <code>org.nightscout.TEAMID.trio.watchkitapp</code> |
| Trio Watch Complication | XC IDENTIFIER | <code>org.nightscout.TEAMID.trio.watchkitapp.TrioWatchComplication</code> |

### Add Trio App Group to <code>Identifiers</code>

- Open the [App IDs Identifier page for your Apple Developer Account](https://developer.apple.com/account/resources/identifiers/list).
    - Click on the `Trio` Identifier and assign the `Trio App Group` to the Identifier - see graphic below.
      > ![add Trio App Group to identifiers](../img/choose-trio-app-group.png)
    - Before saving the `Trio` Identifier, [Enable Time Sensitive Notifications](#enable-time-sensitive-notifications) as described in the next section
    - Repeat the App Group assignment for the other 2 <code>Identifiers</code> that need to have an App Group assigned: `Trio Watch App` and `Trio Watch Complication`

### Enable Time Sensitive Notifications

There is one difference for the `Trio` Identifier compared to the other <code>Identifiers</code>. You must manually enable the Time Sensitive Notifications capability.

While editing the `Trio` Identifier to add the `Trio App Group`, keep scrolling down until you see Time Sensitive Notifications. Make sure that check box is enabled, as shown in the graphic below. Then tap `Save`.

> ![enable time sensitive notifications for the Trio identifier](../img/add-time-sensitive-notifications.png){width="400"}

This capability is only required for the `Trio` Identifier - you do not need to enable it for the other <code>Identifiers</code>.

### Configure Trio App

Follow the directions in [LoopDocs](https://loopkit.github.io/loopdocs/browser/prepare-app/#create-loop-app-in-app-store-connect), but use the Trio `Bundle ID`

* In `App Store Connect`, the `Bundle ID` for Trio will be: `org.nightscout.TEAMID.trio`

If you want to take it a step at a time, continue to [Create <code>Certificates</code>](generate-certificates.md).

If you are feeling confident, you can go straight to [Build App](build-app.md) which includes the create certificates step.

---

**Navigation:** [← Back: Add Identifiers](add-identifiers.md) | [Next: Prepare TestFlight Users →](prepare-testflight.md)