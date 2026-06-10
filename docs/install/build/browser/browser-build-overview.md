## Build Trio with Browser - Overview  

Congratulations on choosing to build Trio using your web browser, aka "Browser Build." This documentation provides all the necessary instructions to complete your first browser build and to update future builds.
    
**Requirements:**

- [Compatible Phone](../mac/iphone.md#compatible-iphones){: target="_blank" }
- [Compatible CGM](../requirements/devices/cgm.md){: target="_blank" }
- [Compatible Insulin Pump](../requirements/devices/pump.md){: target="_blank" }
- [Apple Developer Account](../requirements/apple-developer.md){: target="_blank" }
- [GitHub Account](create-github-account.md){: target="_blank" }
- [TestFlight](install-from-testflight.md){: target="_blank" }

## Getting Ready to Build

The first step in getting ready to build Trio using Browser Build is to review the above requirements. These are considered the minimum requirements for Building Trio using this method.

The second step is to read over and become familiar with the build instructions in their entirety. This includes familiarizing yourself with common [Build Errors](browser-build-errors.md). Most mistakes you can make while building Trio have already been made, and our dedicated community has documented necessary fixes.

When you are ready to proceed, take your time, read carefully, and complete the tasks on each page. Read the top three boxes on each page; icons for those boxes are displayed below for reference. 

## Summary of Steps

???+ info "Time Estimate (click to open/close)"
    - If you have never built the *Trio* app (or any other OS-AID app) allow up to one week elapsed time
        * Request and get an <span>*Apple Developer* Account</span>: 1-2 days
        * Create and configure your *GitHub* account and `repositories`: 1-2 hours
        * Add <code>Secrets</code> (requires *Apple Developer* Account): 1 hour
        * Perform the *GitHub* `Action` steps: 30 minutes to 2 hours
    - If you have previously built the *Trio* app with *Xcode* you have fewer steps and are probably familiar with some of the concepts
        * Expect 1 to 4 hours

???+ abstract "Summary for Browser Build with Links (click to open/close)"
    You may be overwhelmed at first with all the new terms and the many steps. Take a deep breath and work through the steps one at a time.

    * Use the template to [Save Your Information](intro-secrets.md#make-a-secrets-reference-file){: target="_blank" }

    If you prefer watching your instructions, a narrated video is available:

    * [How to Build the *Loop* App With a Web Browser](https://www.youtube.com/watch?v=kiu5ho0MTW8)
        * The steps for building *Loop* and *Trio* are similar, so this video may be helpful

    Once you have your *GitHub* and *Apple Developer* accounts, the steps below are a high-level summary with links to the detailed `TrioDocs` section.

    You can think of the first part as a scavenger hunt where you find or generate and save six <code>Secrets</code>. All six secrets should be saved in your [`Secrets` reference file](intro-secrets.md#make-a-secrets-reference-file). You will need to be able to use them again.

    * *GitHub*:
        * [Create a GitHub account](create-github-account.md){: target="_blank" } if you don't have one
        * [Create and Save the <code>GH_PAT</code> Secret](create-github-account.md#create-github-personal-access-token){: target="_blank" }
        * (Optional) [Create a Free *GitHub* Organization](create-github-account.md#create-a-free-github-organization){: target="_blank" } (strongly recommended)
    * [Make up a Password](create-github-account.md#make-up-a-password){: target="_blank" }
    * _<span translate="no">Apple</span>_:
        * [Collect the four *Apple* <code>Secrets</code>](apple-secrets.md#collect-the-four-apple-secrets){: target="_blank" }

    Now it's time to use those <code>Secrets</code> to build the *Trio* app

    * *GitHub*:
        * [`Fork` the repository (make your copy of <code>Trio</code>)](fork-prepare-repo.md){: target="_blank" }
            * Using an organization? Add `Secrets` and `Variables` to your Organization and all your apps can use them
            * Not using an organization? You have to add `Secrets` and `Variables` to each repository individually
        * [Add <code>Secrets</code> to your `organization` or a single `fork`](fork-prepare-repo.md#configure-secrets){: target="_blank" }
        * [`Action: 1. Validate Secrets`](actions/validate-secrets.md){: target="_blank" }
        * [`Action: 2. Add Identifiers`](actions/add-identifiers.md){: target="_blank" }
    * _<span translate="no">Apple</span>_:
        * [Configure Identifiers for *Trio*](actions/prepare-app.md){: target="_blank" }
        * [Create your version of *Trio* in `App Store` (personal use only, not for distribution)](actions/prepare-app.md#configure-trio-app){: target="_blank" }
        * [Set up `Internal TestFlight Group for the App`](actions/prepare-testflight.md#testflight-overview){: target="_blank" }
    * *GitHub*:
        * [`Action: 4. Build Trio`](actions/build-app.md){: target="_blank" }
            * Yes we can count, but Action 3 is included in Action 4
    * Phone: [Install the *Trio* app using the *TestFlight* app](install-from-testflight.md){: target="_blank" }

???+ question "FAQs (click to open/close)"
    - **Do I need a Mac computer?** No. This can be done on any browser, although it will be easier using a computer or tablet than just using a phone.
    - **Isn't it hard to build every 90 days?** The initial setup and installation take a lot of your focused time. But once you build, future updates and builds are really fast. You just need to keep your Apple Developer account up to date. Review any email that says a GitHub action failed - read the error and take action. For more information, see the next bullet.
    - **Can you explain automatic building?** There's a whole page in LoopDocs on [Automatic Update & Build](https://loopkit.github.io/loopdocs/browser/automatic) with most of that information valid for Trio users
        * [Successful Weekly Action](https://loopkit.github.io/loopdocs/browser/automatic/#successful-weekly-action)
        * [Successful Monthly Action](https://loopkit.github.io/loopdocs/browser/automatic/#successful-monthly-action)
        * [Automatic Certificate Renewal - annual event](https://loopkit.github.io/loopdocs/browser/automatic/#automatic-certificate-renewal)
        * [Open-Source App Schedule for rebuilding](https://loopkit.github.io/loopdocs/browser/automatic/#open-source-app-schedule)
    - **Can I use this for my child?** You, as the adult, can install using *TestFlight* on your child's phone. The explicit steps are provided at [Install on Phone: *TestFlight* for a Child](install-from-testflight.md#testflight-for-a-child){: target="_blank" }.
    - **Can I still use my customizations?** Yes. [Customize using Browser](browser-customizations.md){: target="_blank" }
    - **Is there a build video?** Yes. [How to Build the *Loop* App With a Web Browser](https://www.youtube.com/watch?v=kiu5ho0MTW8)
        * You need to adjust when watching that because you are building *Trio* instead of *Loop* and the video is somewhat out of date

## Tips and Tricks

The steps to configure for building with a browser require a lot of focused attention. Take it in steps and take breaks as needed. Some people prefer a video. Some people prefer more detailed steps on a webpage and others only high-level steps.

!!! important "How to Ask for Help"
    First time setup should take several hours, but if you are having trouble don't get frustrated:

    * [Click here to find help](browser-build-errors.md#help-with-errors){: target="_blank" }.

???+ tip "Who should use a free GitHub Organization option (click to close/open)"
    There are several places where you see a recommendation to use a free GitHub Organization instead of building directly from your personal free GitHub account.

    When you use an organization, you don't have to add 6 Secrets to each repository for every app you build. It can save a lot of time in the long run.

    * Even if you just build Trio and nothing else, using an organization is pretty easy and your build works just the same as using only a personal account - but there is no particular advantage (until you decide maybe you do want to build another app)
    * Who should definitely build with an organization:
        * Anyone who is a caregiver will want LoopFollow
        * Anyone who wants to use LoopFollow for the amazing alarm capabilties
        * Anyone who might want to try a different app such as xDrip4iOS

### The Short Version

Complete instructions are found at this link for those comfortable with using *GitHub* and navigating the *Apple Developer* and *Apple App Connect* pages.

* [Using GitHub Actions + FastLane to deploy to TestFlight](https://github.com/nightscout/Trio/blob/main/fastlane/testflight.md)

### The Video Version

If you prefer watching your instructions, there is a narrated video of each step needed to build using a browser. This video was created for Loop version 3.2.x. So translate in your head - Trio instead of Loop and some steps are out-of-date.

* [How to Build the *Loop* App With a Web Browser](https://www.youtube.com/watch?v=kiu5ho0MTW8)

> Do not decide to uncheck the box for Near Field Communications in the Identifer for `Trio` - that is required to build.

Click in the comments for a full index of topics.  If you have issues with a particular section, use the index to advance to the relevant part of the video. Subtitles are in English. You can choose a different language but the automatic translation feature may provide translations that are not completely accurate.

### The Detailed Version

If you prefer seeing step-by-step instructions, those are provided too.

Some sections have a Section Summary for those who just want high-level steps without a lot of graphics. It also provides a high-level view of what you are going to do before you do it.

* To view the summary, click on the summary header
* If the summary is all you need, use the `skip forward` symbol (<span class="loop-big">:material-skip-forward:</span>) to skip to the next instruction
* Or follow the detailed instructions below the summary

!!! question "What if I get stuck?"

    * First, take some time to read over the instructions to ensure you have understood all the steps.
    * Compare your screen's display with the images in the documents. Is there something different? Does yours have an error message? If so, does it guide you to the problem and solution?
    * If you are still stuck, you can seek assistance via [Facebook](https://www.facebook.com/groups/diytrio) or [Discord](https://discord.com/invite/FnwFEFUwXE).
