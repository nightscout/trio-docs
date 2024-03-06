# Project Statistics

## What is it?

One of the hardest advocacy efforts any project has is to so both the adoption, and impact, of that project.  DIYAPS systems are no different, as even though there could be thousands out there using it, from a vendor perspective, we are a fringe group.  And from a professionals perspective, our results are questionable.

The intent with the statistics server setup is to show both vendors, and professionals, that not only are we out there, but we are getting results equal to, if not better, then non-DIYAPS solutions.

Commercial vendors out there are driven mostly by, of course, profits.   If there is anyone out there trying to encourage a vendor to improve support for DIY systems, being able to go at them with "this is the market you are currently giving to your competitor" can be compelling, and this is one of the aspects we are trying to be able to push / promote, is loss of marketshare that they could be tapping if they weren't so closed.

The core part to the statistics is they stay up to date, and this is accomplished on of two ways:

* for those using Nightscout servers, we are able to pull the needed statistics directly
* for those not using Nightscout servers, they are able to configure iAPS to push data into us

In both cases, the process is meant to happen once a day, so that information is updated regularly.

## Where is it?

We have a central statistics server setup at https://iaps-stats.hub.org/

## What data is collected?

We pull three pieces of information into the system:

* preferences.json
* statistics.json
* profile data
  * profile data consists of your schedule basal, insulin sensitivities and carb ratio data

## Who controls the data?

The project is a private contribution to the iAPS project, funded and managed by one person: me 

The only outside access to any of the data in the system is via the web pages at the above URL, nobody has access to the raw data.

