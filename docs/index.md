!!! important "Attention Trio Users"
    At this time all users should [build the dev branch](build/browser/build-dev-with-browser.md) rather than the main branch. We are in the process of merging dev into main. Once that is complete, you will be able to build main again.

    Please read the [Migration Guide](../configuration/migration/trio-02x-migration.md) before updating.

!!! important "🚧 Documentation Under Construction 🚧"
    
    This documentation is being released while still under construction. Please, keep in mind the following information:
    
    - This documentation is for the `dev` branch of Trio. Please review this documentation in preparation for using Trio 0.5 or newer.
    - If you are looking for the Trio 0.2.x (`main` branch) documentation, you can still find it here: [0.2.x](0.2.x/index.md)
        - Please note that Trio 0.2.x is no longer being maintained and we advise all users to move to the `dev` branch.
    - Any page with a ✏️ indicates the information has not yet been updated. The information on those pages should not be referenced at this time.
    - We welcome assistance with proofreading, editing, and updating the information in this documentation. If you would like to contribute to the documentation, please submit issues or PRs [here](https://github.com/nightscout/trio-docs)
    - New educational videos are coming soon.

# What is Trio?
!!! note
    The video refers to Trio 1.0, which will not be the official version number until beta testing is complete and it is released to the main branch.

<video controls  preload="metadata">
  <source src="assets/videos/trio-intro.mp4" type="video/mp4">
  Your browser doesn’t support the HTML5 video tag.
</video>

![Trio Logo](assets/images/trio-logo.png){ .skip-lightbox width="150" align="right" }

Trio is an open-source automated insulin delivery system (OS-AID) for iOS based on the [OpenAPS algorithm](https://github.com/OpenAPS/oref0) with [adaptations for Trio](https://github.com/nightscout/trio-oref).  

This system considers your user-entered settings, carbohydrates, and historical insulin use to automate insulin delivery to reduce the time spent managing your diabetes.

Before starting with Trio, you should evaluate all your closed-loop options, including:

- Commercial systems
- Other open-source applications
    - [Loop](https://loopkit.github.io/loopdocs/)
    - [AndroidAPS](https://androidaps.readthedocs.io/)

!!! warning "Warning"
    Trio is a DIY, open-source community project.  
    It has not been evaluated by any regulatory agency and is not approved by any healthcare authority.  
    You build and run Trio at your own risk.

- - -
# Getting Started

To use Trio, you are required to [build the application](install/index.md) from the source code. This does not require substantial technical know-how but is a time-consuming process. You may need several sessions to complete your first build.

Upon installation, you will follow an onboarding wizard in the app to configure your settings optimally. We strongly recommend using the [New User Setup Guide](configuration/new-user-setup.md) as you walk through onboarding so you are able to easily reference any additional information you may need.

If you find yourself stuck, the community is here to help on [Discord](https://discord.gg/FnwFEFUwXE) or [Facebook](https://www.facebook.com/groups/diytrio).

- - -
# Contribution

Trio is built by a volunteer community. If you are interested in helping as a programmer, you can contribute to the [Trio](https://github.com/nightscout/Trio) or [Trio-Oref](https://github.com/nightscout/trio-oref) code base. Trio is written in Swift, and the Trio-Oref/OpenAPS algorithm is currently written in JS and is in the process of being converted into Swift.

You can also provide support in online support groups by sharing your own success and troubleshooting common errors.
