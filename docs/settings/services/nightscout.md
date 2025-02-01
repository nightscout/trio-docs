# Visualization and Monitoring
!!! tip "Highlights"
    - Nightscout is optional but encouraged
    - Nightscout is a useful tool for data analysis and followers
    - Create a Nightscout server and input your URL and API_SECRET in Trio. Test the connection and enable "Allow Uploads."

## Nightscout Introduction

[Nightscout](http://nightscout.info) (NS) is an open-source, DIY project that allows real-time access to CGM data via a personal website, smartwatch viewers, or apps and widgets available for smartphones. Setting up a Nightscout web app is recommended to visualize your Trio closed loop. 

Nightscout allows a user to upload CGM data from various sources to an online database and cloud computing service. The information is then processed and displayed visually as a graph. Plugins also allow more information to be shown about Trio. 

Even if you don't choose to share your Nightscout site
with another person, it will be helpful for you to visualize what the loop is doing and what it's been doing, plus generate helpful reports for understanding your data.

[For help making a Nightscout account, please see the OpenAPS documentation.](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/nightscout-setup.html)

## Trio Setup
To enable your nightscout connection, input your Nightscout URL, including the `https://` and your `API_SECRET`. Select `Allow uploads` so Trio can share its predictions and settings with Nightscout. 

    
## Remote Caregivers and Missing Red Loop in Nightscout

!!! warning "Remote Caregivers and Missing Red Loop in Nightscout"
    
    Read this section if you are using **_Trio_** version **`0.2.3` or earlier**.

### Why the “Red Loop” Indicator is Missing in Nightscout

When using **_Nightscout_ version `15.0.2` (and earlier)**, a caregiver looking at a *Trio* site will not see a “red loop” indication on *Nightscout* when the *Trio* phone is still getting glucose readings, but the *Pod* is disconnected (because of a communication issue or if it is deactivated). Even if the *Trio* phone clearly indicates the *Pod* issue, a remote viewer needs to know how to recognize this situation.

### How to Recognize a Disconnected Pod in Nightscout

The caregiver will see predictions continue, but no sign of extra insulin delivered for rising glucose or withheld for falling glucose.

- If it is a matter of **communication problem** (and the *Pod* is still active),  
  then the *Pod* will return to scheduled basal rates when any active temporary basal duration ends. 
- If it is a matter of a **_Pod_ fault or removal without applying a new _Pod_**,  
  the rate of glucose increase may be pretty steep.  

The signature for this situation when viewing the *Nightscout* display is either:
   
1. 📈 rising glucose with no increase in temporary basal rates or application of manual bolus or SMB,
2. 📉 or falling glucose with no temporary basal set to `0 U/hr`.

### Workaround

ℹ️ For those who can use *[LoopFollow](https://www.loopandlearn.org/loop-follow/)*, version **`2.2.9`** has an updated "Not Looping" indicator with an optional alarm that works with *Trio*.