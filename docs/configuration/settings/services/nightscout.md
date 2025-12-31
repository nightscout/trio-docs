# Nightscout: Visualization and Monitoring

!!! tip "Highlights"
    - *Nightscout* is optional but encouraged
    - *Nightscout* is a useful tool for data analysis and followers
    - Create a *Nightscout* server and input your URL and `API_SECRET` in *Trio*.  
      Test the connection and enable `Allow Uploading to Nightscout`.

## Configuration

### Step 1: Enable Nightscout in Trio

<div class="grid" markdown>

1. Open Trio and navigate to **Settings → Services → Nightscout → Connect**
2. Enter your Nightscout **URL** (without trailing slash)
    - Example: `https://yoursite.herokuapp.com`
3. Enter your [**API Secret**](https://nightscout.github.io/nightscout/setup_variables/#api-secret-nightscout-password)
    - This is the same secret you configured in Nightscout
    - Stored securely in iOS Keychain
4. Tap **Connect to Nightscout** to validate the connection

![Connect Nightscout](img/connect-nightscout.png)

</div>

Trio will test the connection by uploading a test treatment. If successful, your Nightscout configuration is saved.

!!! important "A Nightscout URL starts with https://"
    
    - Your *Nightscout* URL must start with `https://`.  
    - To set this up correctly, do not forget the letter `s` between `http` and `://`.

### Step 2: Utilize Upload/Download

<div class="grid" markdown>

- **Upload**:
    - Enable **Allow Uploading to Nightscout** toggle
        - Optionally enable **Upload Glucose** if you want CGM data uploaded from Trio rather than from your CGM
        - Trio immediately uploads your current profile when enabled
    - [What Trio Uploads to Nightscout](../../../install/ecosystem/nightscout-app.md#what-trio-uploads-to-nightscout)

![Upload](img/upload.png#only-light){width="250"}
![Upload](img/upload-dark.png#only-dark){width="250"}

- **Download**:
    - Enable **Allow Fetching from Nightscout** toggle
        - Trio will download carbs, temp targets, and optionally glucose from Nightscout
        - Used as backup or when using Nightscout as primary CGM source
    - [What Trio Downloads from Nightscout](../../../install/ecosystem/nightscout-app.md#what-trio-downloads-from-nightscout)

![Fetch](img/fetch.png#only-light){width="250"}
![Fetch](img/fetch-dark.png#only-dark){width="250"}

- **Backfill Glucose**:
    - Tap **Backfill Glucose**
        - Trio will fetch any missed glucose readings from the last 24 hours

![Backfill](img/backfill.png#only-light){width="250"}
![Backfill](img/backfill-dark.png#only-dark){width="250"}

</div>

## Nightscout Integration

Read more about the integration of Nightscout in Trio [here](../../../install/ecosystem/nightscout-app.md)
