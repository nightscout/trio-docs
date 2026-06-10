# Introduction to Secrets

In order to build using the Browser Build method, you will need to collect and save six secrets from your free GitHub account and your paid Apple Developer account.

## Save Your Information

**Everyone needs to read this section!**

You need to keep a digital copy of your 6 <code>Secrets</code>.

* You need to copy and paste those <code>Secrets</code> to build the app with a browser
* Make sure your editor does not change any characters in your <code>Secrets</code>; use a text-only editor like NotePad (PC) or TextEdit (Mac)
* Many people add other information to the <code>Secrets</code> file for easy reference

!!! info "A Note about Capitalization and Spaces"
    In places, you use a name like "`FastLane API Key`" or "`FastLane Access Token`". Please copy from the docs to use those exact names.

    The <code>Secrets</code> that you add use names that are capitalized and use underscore `_` instead of spaces or hyphens. Be precise and careful.

!!! important "Use a Text-Only Editor"
    **Be sure to use a Text-Only editor like NotePad (PC) or TextEdit (Mac) to archive your information.**

    If you use a "smart" editor, it may change small letters to capital letters at the beginning of a line when you paste items into your archive file.

    If even one character is capitalized when it should not be, you will get errors.

### Make a <code>Secrets</code> Reference File { #make-a-secrets-reference-file }

Please save yourself a lot of agony. Make a <code>Secrets</code> Reference folder and then create a <code>Secrets</code> Reference file in it.

You don't need to know anything about the <code>Secrets</code> to do this. Come up with your own names, but make sure you know where you put this file.

1. Decide where you want your <code>Secrets</code> saved and create a special folder
2. Open a text-only editor (do not use a Smart Editor, those might change capitalization or formatting and ruin your <code>Secrets</code>)
    * Create a blank <code>Secrets</code> Reference file using the text-only editor
    * Tap on the copy icon below to copy the template and paste it into your blank file
    * Save the file
3. As you move through the steps of collecting the six secrets, fill in the file
    * The `##` characters are used to indicate sections or title (text only file)
    * There is a reference pattern for each SECRET: replace that with your SECRET or you can add your secret below the pattern to give yourself confidence you got the correct item
4. In addition to the <code>Secrets</code>, this template has places for other pieces of information you may find handy to save in the same file
5. At the very beginning is a place to indicate the last day you updated the file

``` { .bash .copy title="Template to use for Secrets" }
MySecretsReferenceFile.txt

## This file updated on: DD MMM YYYY

Information needed to use Browser Build.
The same secrets are used for every app you build.

First some handy username and password information:

## Apple ID username for your Developer account is the associated email:
<your information here>
suggest you use your desired password tool to save the password for this account

## GitHub personal account username
<your information here>
suggest you use your desired password tool to save the password for this account

### GitHub organization name
<your GitHub organization name>
Using an organization is optional.
But it you do use one, add the name here for reference.
You always log in using your GitHub personal account to access your organization.

There are Six Secrets and One Variable:
 - the list below shows the expected format of each.
You can replace each prototype with your secret as you gather them,
 - or put your secret below a prototype.
The letter A indicates an alphanumeric character;
 - some may be small letter, some capital letters and some numerals.
The FASTLANE_KEY may have additional characters included.
  Be sure to copy the entire key including
  -----BEGIN PRIVATE KEY-----
  through
  -----END PRIVATE KEY-----

## SECRETS BELOW:

TEAMID
<looks like this>
AAAAAAAAAA

FASTLANE_ISSUER_ID
<looks like this>
AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA

FASTLANE_KEY_ID
<looks like this>
AAAAAAAAAA

FASTLANE_KEY
<looks like this>
-----BEGIN PRIVATE KEY-----
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAA
-----END PRIVATE KEY-----

GH_PAT
<looks like this>
ghp_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

MATCH_PASSWORD
<looks like this>
AnyThingYouWant-sameForEveryRepository

This Variable (not a secret) is required for the annual certificate renewal:

ENABLE_NUKE_CERTS = true

## Repository Names for my Fork:

If you use an organization (recommended)
https://github.com/my-name-org/Trio

or (if you don't use an organization): 
https://github.com/my-name/Trio


Add additional apps here if you decide to build any
```

## New Terms with <code>*GitHub* Browser Build</code>

The <code>*GitHub* Browser Build</code> may use new and unfamiliar **terms**.

These instructions can be used without knowing what any of these terms mean. But if you are curious:

Some of these **terms** have ToolTips, so hover your mouse over those - or review them in the [Glossary](../../../help/glossary.md){: target="_blank" }.

* Some terms in the Glossary are not in alphabetical order to improve logical grouping. All the individual <code>Secrets</code> are listed after <code>Secrets</code> in the Glossary.

* `Actions`: available in your *GitHub* repositories to build your app
    * You must be logged in to *GitHub* to run the actions manually
    * The build action is automatically run for you once your repository is configured
* `Fork`: you make a copy of the code needed to build an app and store it in your *GitHub* account (using a free *GitHub* organization is recommended for storing your `forks`)
* <code>Secrets</code>: are required to enable *GitHub* to build an app from a repository using *GitHub* Actions
    * Six <code>Secrets</code> must be entered to enable your app (or apps) to build
    * These <code>Secrets</code> work for any branch in your fork (`main` or `dev`, for example) and if you use the recommended free *GitHub* organization to build, they work for any app you fork to your organization
    * If you build more than one app, they use the same <code>Secrets</code> and the use of a *GitHub* organization is even more strongly recommended
* Certificates: These are required to enable *GitHub* to build an app from a repository using *GitHub* Actions
    * They are manually created with the Create Certificates action
    * They expire at the end of one year
    * Certificates are automatically renewed as long as you [add the required `Variable`](fork-prepare-repo.md#add-variable){: target="_blank" }
* API `Key`:`Application Programming Interface Key`
    * You create an API key from the *Apple Developer* website
    * Doing this provides 3 of your <code>Secrets</code>
    * These secrets enable your *GitHub* account to interface with *Apple* to create your app
* `Identifiers`: are required to build the *Trio* app with <code>*GitHub* Browser Build</code> (these are automatically generated for you) when you run `Add Identifiers`
* [`App Store Connect`](https://appstoreconnect.apple.com): a website available for *Apple Developer*s to review apps build with your *Apple Developer* account
    * Once you purchase an *Apple Developer* annual account, you are an *Apple Developer* and have access to this site
    * Most users will not have an App until using the <code>*GitHub* Browser Build</code>
    * The instructions walk you through creating and naming your app: [Create Trio App in App Store Connect](actions/prepare-app.md#configure-trio-app){: target="_blank" }

---

## Next Step

Ready to begin? Proceed to:

**→ [Create GitHub Account](create-github-account.md)**

---

**Navigation:** [← Back to Overview](browser-build-overview.md) | [Next: Create GitHub Account →](create-github-account.md)
