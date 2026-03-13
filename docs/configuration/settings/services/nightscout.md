# Nightscout

!!! tip "Highlights"
    - *Nightscout* is optional but encouraged
    - *Nightscout* is a useful tool for data analysis and followers
    - Create a *Nightscout* server and input your URL and `API_SECRET` in *Trio*. Test the connection and enable `Allow Uploading to Nightscout`.

## Nightscout Introduction

[Nightscout](https://nightscout.github.io/) (NS) is an open-source project that allows real-time access to CGM data via a personal website, smartwatch viewers, or apps and widgets available for smartphones. Setting up a *Nightscout* web app is recommended to visualize your *Trio* closed loop. 

*Nightscout* allows a user to upload CGM data from various sources to an online database and cloud computing service. The information is then processed and displayed visually as a graph. Plugins also allow more information to be shown about *Trio*. 

Even if you don't choose to share your *Nightscout* site with another person, it will be helpful for you to visualize what the app is doing and what it's been doing, plus generate helpful reports for understanding your data.

## Setting up Nightscout

In order to run Nightscout, you can either:

- Subscribe to a [**Nightscout as a Service provider**](https://nightscout.github.io/#nightscout-as-a-service), run by members of the WeAreNotWaiting community. This is the recommended and simplest option for new users, and typically costs under $10/month USD. Your Nightscout site will be fully-managed, with support available, and not require any maintenance.

- Configure Nightscout to run on a [**cloud-provider hosting service**](https://nightscout.github.io/nightscout/platform/), such as Google Cloud, Azure, or Heroku. This requires following community-maintained instructions to set up the service properly and doesn't provide support, but can be less expensive or free.

- Configure Nightscout manually on a different cloud VPS (virtual private server), Synology NAS, Raspberry Pi, or other Linux system you have access to. See the [**Advanced Nightscout deployments**](https://nightscout.github.io/nightscout/advanced/) section on the Nightscout documentation.

Once Nightscout is up and running, make sure to configure Trio to upload data to it.

## Trio Setup

To enable your *Nightscout* connection:

- Input your ***Nightscout* URL**, including the `https://` and your **`API_SECRET`**. 
- Toggle on **`Allow Uploading to Nightscout`** so *Trio* can share its predictions and settings with *Nightscout*. 

!!! important "A Nightscout URL starts with httpS://"
    
     Your *Nightscout* URL must start with `https://`.  
     To set this up correctly, do not forget the letter `s` between `http` and `://` and don't include `www.`.
