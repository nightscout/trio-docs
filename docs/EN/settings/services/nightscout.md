# Visualization and Monitoring
:::{admonition} Highlights
:class: important
- Nightscout is a useful tool for data analysis and for followers
- Create a Nightscout server and input your URL and API_SECRET in iAPS. Test the connection and enable "Allow Uploads."
:::
## Nightscout Introduction

[Nightscout](http://nightscout.info) (NS) is an open source, DIY project that allows real-time access to CGM data via a personal website, smartwatch viewers, or apps and widgets available for smartphones. Setting up a Nightscout web app is the recommended way to visualize your OpenAPS or iAPS closed loop. 

Nightscout allows a user to upload CGM data from a variety of sources to an online database and cloud computing service. The information is then processed and displayed visually as a graph. There are plugins that allow more information to be shown about OpenAPS, too. 

Even if you don't choose to share your Nightscout site
with another person, it will be helpful for you to visualize what the loop is doing; what it's been doing; plus generate helpful reports for understanding your data.

[For help making a Nightscout account, please see the OpenAPS documentation.](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/nightscout-setup.html)

## iAPS Setup
To enable your nightscout connection, input your Nightscout URL including the "https://" and your API_SECRET. Select "Allow uploads" so iAPS can share its predictions and settings with Nightscout. 
