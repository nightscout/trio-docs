# Apple Secrets

You already generated two of the six required secrets when you created your GitHub account.

Now it's time to collect the other four.  Remember to save the secrets in your [`Secrets Reference` File](intro-secrets.md#make-a-secrets-reference-file){: target="_blank" }


You need to save your information digitally, so you can copy and paste. The information is created in one place and used in another. Refer to [Configure <code>Secrets</code>](fork-prepare-repo.md#configure-secrets){: target="_blank" } for how the <code>Secrets</code> are used. In addition to the 6 <code>Secrets</code>, other important information to keep handy (like usernames and passwords) is listed below. Be sure to keep this file secure.

**Created / used at developer.apple.com**

* Email address (this is your username)
* password
* Four items used as <code>Secrets</code>
    * <code>TEAMID</code>
    * <code>FASTLANE_ISSUER_ID</code>
    * <code>FASTLANE_KEY_ID</code>
    * <code>FASTLANE_KEY</code>

**Created / used at github.com**

* Email address
* password
* username
* If your username is `my-name` then:
    * Your *GitHub* address (URL) will be: `https://github.com/my-name`
    * Your (optional but recommended) *GitHub* organization address will be : `https://github.com/my-name-org`
    * Your Trio repository address will be: `https://github.com/my-name-org/Trio`
* One item used as a Secret
    * *GitHub* Personal Access Token (<code>GH_PAT</code>)

**Create yourself**

* a password - make one up and save it (<code>MATCH_PASSWORD</code>)

## Collect the Four `Apple Secrets`

??? abstract "Section Summary (click to open/close)"
    You will be saving 4 <code>Secrets</code> from your *Apple* Account in this step.

    1. Sign in to the [*Apple Developer* portal page](https://developer.apple.com/account).
    1. If you need to accept a new agreement (happens at least twice a year), be sure to do so now
        * Scroll down to the Agreements section of your developer portal
    1. The first *Apple* `Secret` is your Team ID.
        * Click on Membership Details on your developer portal
        * Copy the [Team ID](#find-teamid) from this section. Record this as your `TEAMID`.
    1. The final 3 *Apple* `Secrets` come from the creation of the "`FastLane API Key`".
        * Go to the [App Store Connect](https://appstoreconnect.apple.com/access/integrations/api) interface, click the "Integrations" tab, and create a new key with "Admin" access. Give it the name: ["`FastLane API Key`"](#generate-api-key).
    1. [Record three more secrets](#copy-api-key-secrets)
        * Record the issuer id; this will be used for `FASTLANE_ISSUER_ID`.
        * Record the key id; this will be used for `FASTLANE_KEY_ID`.
        * Download the `API Key` itself, and open it in a text editor. The contents of this file will be used for `FASTLANE_KEY`. Copy the full text, including the "-----BEGIN PRIVATE KEY-----" and "-----END PRIVATE KEY-----" lines.

This section provides detailed instructions for the four <code>Secrets</code> associated with your *Apple Developer* ID.

|<div style="width:150px"></div>Name|Description|
|---------|---------|
|<code>TEAMID</code>|This 10-character identifier is associated with your *Apple Developer* ID and never changes|
|<code>FASTLANE_ISSUER_ID</code>|The issuer ID is associated with your *Apple Developer* ID and never changes|
|<code>FASTLANE_KEY_ID</code>|Key ID provided when you create an `API Key` in App Store Connect; it is associated with the <code>FASTLANE_KEY</code>|
|<code>FASTLANE_KEY</code>|Copy the full key from the text file you downloaded when generating the `API Key` - Filename has <code>FASTLANE_KEY_ID</code> value embedded in it.<br>Include everything in the file from <br>`-----BEGIN PRIVATE KEY-----`<br>and ending in <br>`-----END PRIVATE KEY-----`<br> |

### New *Apple Developer* Account

[<span class="loop-bigger">:material-skip-forward:</span>](#find-teamid) If you have an *Apple Developer* Account, skip ahead to [Find <code>TEAMID</code>](#find-teamid).

If not, you need to purchase one ($99 annual fee). It may take a few days for the account to be enabled.

* TrioDocs has an [*Apple Developer* Program](../requirements/apple-developer.md){: target="_blank" } page that explains in detail how to sign up for an account
* This link takes you straight to [*Apple Developer* account](https://developer.apple.com) to sign up

### Find <code>TEAMID</code>

Sign in to your *Apple Developer* account at this link: [*Apple Developer* portal page](https://developer.apple.com/account).

!!! tip ""
    If you need graphics for this part - use [LoopDocs](https://loopkit.github.io/loopdocs/browser/secrets#collect-the-four-apple-secrets) for reference. The secrets are all the same for all OS-AID apps.

1. Click `Account` in the top menu bar
1. If you need to accept a new agreement (at least twice a year), be sure to do so now
1. Click the `Membership Details` icon
1. Next to the `Team ID` field, is a 10-character ID number.

Record this for use as <code>TEAMID</code> in your <code>Secrets</code> file. You will also need it when you [Create &nbsp;<span class="notranslate">App Group</span>](actions/prepare-app.md#create-the-trio-app-group){: target="_blank" }.

- Stop a moment and double-check
* If you get this wrong, you will have errors at the very end, which require you to delete some items and repeat some steps on this page

    !!! tip "Do not "type" what you think you see"
        **Copy and paste** the `Team ID` from the webpage.

        * <code>TEAMID</code> must be 10 characters
        * Avoid typing an&nbsp;<span class="loop-biggest">`8`</span>&nbsp;when it should be a&nbsp;<span class="loop-biggest">`B`</span>

### Generate `API Key`

!!! tip ""
    If you need graphics for this part - use [LoopDocs](https://loopkit.github.io/loopdocs/browser/secrets/#collect-the-four-apple-secrets) for reference. The secrets are all the same for all OS-AID apps.


This step is used to create and save the final 3 `Secrets` you need from your *Apple Developer* account.

!!! info "Paid *Apple Developer* Account is Required"
    To generate the `API Key`, you must have a paid *Apple Developer* account.

Click this link to open in a new tab: [`App Store Connect/Access/Integrations/API`](https://appstoreconnect.apple.com/access/integrations/api)

* Click the `Integrations` tab

If this is your first time here, you will see:

* "Permission is required to access the App Store Connect API. You can request access on behalf of your organization."

* Click on `Request Access` and follow directions until access is granted

The numbered steps below correspond to the actions you take in the subsequent windows:

1. Click on the `Generate API Key` button or the blue &plus; sign to open the `Generate API Key` dialog box

2. Enter the name of the key as "`FastLane API Key`"

3. Choose `Admin` in the access dropdown menu

4. Confirm the name and that "`Admin`" is selected and then click on the "`Generate`" button

### Copy `API Key Secrets`

The `Integrations` screen appears again with content similar to the graphic below; the key information is blanked out for security.

Review the graphic and then follow the directions below to save more parameters you will need to configure <code>Secrets</code>.

> ![App Store Connect Key page](img/api-key-in-process.svg){width="700"}
{align="center"}

1. A button labeled Copy is always adjacent to the `Issuer ID` above the word Active (this is the same for all keys that you generate with this *Apple Developer* ID)
    * Tap on the `Copy` button - this copies the `Issuer ID` into your paste buffer
    * In the file where you are saving information, paste this with the indication that it is for  `FASTLANE_ISSUER_ID`
1. Hover to the right of the `Key ID` and the `Copy Key ID` button shows up
    * Tap on the `Copy Key ID` button - this copies the `Key ID` into your paste buffer
    * In the file where you are saving information, paste this with the indication that it is for  `FASTLANE_KEY_ID`
1. Click on the `Download API Key` button - you will be warned you can only download this once.
6. Find your `AuthKey` download in your downloads folder. The name of the file will be "`AuthKey_KeyID.p8`" where `KeyID` matches your `FASTLANE_KEY_ID`

    The next task is to rename the file so you can open it. 
    Highlight the filename and choose rename, then add ".txt" after ".p8". In other words, modify `AuthKey_AAAAAAAAAA.p8` to `AuthKey_AAAAAAAAAA.p8.txt` and click on `Use .txt` when questioned.

2. Double-click to open the `AuthKey_AAAAAAAAAA.p8.txt` file. It will look similar to the screenshot below. You need to highlight **ALL OF THE CONTENTS** of that file and copy it and then paste it into your Secrets Reference file as the  `FASTLANE_KEY`.  
    * **Click inside that file**
    * Highlight **all** the text, including the "`-----BEGIN PRIVATE KEY-----`" and "`-----END PRIVATE KEY-----`" lines and then
    * Copy **all** of the text to the clipboard (Cf. screenshot below).
        * On a *Mac*, use ++command+"A"++, then ++command+"C"++  to copy all the contents
        * On a **PC**, use ++control+"A"++ , then ++control+"C"++ to copy all the contents
    * In the file where you are saving information, paste this with the indication that it is for  `FASTLANE_KEY`

    > ![img/apns-copy-key.png](img/apns-copy-key.png)

#### Organize your Key File

!!! tip "Pro Tip: Use the same folder as your Secrets Reference File"
    It's a good idea to keep all your important files in one place. You probably set up a a folder for your [Secrets Reference File](intro-secrets.md#make-a-secrets-reference-file){: target="_blank" }. Use the same folder for your API key - be sure to label the file so you know what the key is. For example, change the name from KPMAM8y3G5.p8 to API_KEY_KPMAM8y3G5.p8.

#### Do Not Confuse Your Keys

!!! important "<span class="loop-big">`API Key`</span>&nbsp; vs&nbsp;<span class="loop-big">`APN Key`</span>"
    If you use Remote Commands with <code>Nightscout</code> or <code>Trio</code>, you may notice the Application Programming Interface (API) key has the same type of format as the *Apple* Push Notification (APN) key. The keys for both of these purposes are p8 keys, but they should not be confused with each other.

    The <code>Secrets</code> for building with *GitHub* use the&nbsp;<span class="loop-bigger">`API Key`</span>.

    The config vars for `Nightscout`, `Trio` and `Loop` use the&nbsp;<span class="loop-bigger">`APN Key`</span>.

### Done with *Apple* Secrets

In summary, from this section, you have found or generated the following and saved copies for later use

* <code>TEAMID</code>
* <code>FASTLANE_ISSUER_ID</code>
* <code>FASTLANE_KEY_ID</code>
* <code>FASTLANE_KEY</code>

!!! tip "Time for a Break?"
    This is a good place to pause if you need to. Just note where you are on the page so you can return later.


---

**Navigation:** [← Back to Create a GitHub Account](create-github-account.md) | [Next: Fork and Prepare →](fork-prepare-repo.md) 