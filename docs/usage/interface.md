# User Interface
## Trio User Interface

![Trio 1.0 UI](img/light_vs_dark_mode.png){width="600"}
{align="center"}

- - -

## Main Screen

**The main screen of Trio can be divided into four sections:**

![Trio Main Screen](img/light_mode_sections.png){width="500"}
{align="center"}

Use the links below to learn more about each section:  
[Current Status](#current-status) | [Graph & History](#graph-and-history) | [Adjustment Status](#adjustment-status) | [Action Buttons](#action-buttons)

- - -

### Current Status

The Current Status section functions as an easy reference point for a variety of important data points.  
Use the tabs below to learn more about each section:  

![Trio Current Status](img/current_status.png){width="400"}
{align="center"}  

<div class="grid" markdown>

=== "Current Glucose"
    Here you will find a centered bobble containing your current glucose reading, the time since the last glucose reading, the change in glucose from the previous reading, and an arrow that indicates the trending direction of your glucose.

    ![Current Glucose](img/current_glucose.png){width="300"}
    {align="center"}
    
    !!! tip "Pro Tip"
        If you long press the bobble, it will snooze CGM alerts
    
=== "Pump Info"

    === "Omnipod Users"
        ![Pump Info Omnipod](img/pump_info_omnipod.png){width="300"}
        {align="center"}
    
        * **Reservoir Status:** Units Remaining in your pod  
        * **Remaining Pod Life:** Remaining time left on your current pod  
        **Keep in mind:** 50+ U means more than 50 units of insulin are left. Omnipod only provides an exact value for the reservoir if the amount is less than 50 Units. 
    
    === "Medtronic & Dana Users"
        ![Pump Info Medt](img/pump_info_medt.png){width="300"}
        {align="center"}
    
        * **Reservoir Status:** Units remaining in your reservoir  
        * **Pump Battery:** Pump battery percentage remaining  
    

=== "Loop Info"
    To the right of the bobble, you will find the current looping status and the time since the last loop cycle. Below that, is your 4-hour glucose forecast.
    
    ![Loop Info](img/loop_info.png){width="300"}
    {align="center"}
    
    The Loop Indicator tells you how long it has been since the last loop cycle using specific colors:
        
    <span style="color: #6FCE96;">:fontawesome-regular-circle:</span> **Green:**  
        It has been **_5 minutes or less_** since a successful loop cycle
        
    <span style="color: #FFC145;">:fontawesome-regular-circle:</span> **Yellow:**  
        It has been **_6-10 minutes_** since a successful loop cycle
        
    <span style="color: #EB5757;">:fontawesome-regular-circle:</span> **Red:**  
        It has been **_10+ minutes_** without a successful loop cycle
        
    <span style="color: #d9d9d9;">:fontawesome-regular-circle:</span> **Grey:**  
        No data or not enough data to complete a loop cycle
        
    !!! tip "Pro Tip"
        If you long press the loop indicator, it will force a loop cycle
    
=== "Current Metrics"
    Below the bobble, you'll find 3 icons that provide you with the current IOB, COB, and adjusted basal rate. These values were determined by the calculations made in the most recent loop cycle.
    
    ![Current Metrics](img/current_metrics.png){width="300"}
    {align="center"}

</div>

- - -

### Graph and History

The middle of the screen graphs your blood sugar data and entered carbs overlaid with Trio's insulin delivery and glucose forecasting.  
Use the tabs below the image to learn more about each section.  

![Trio Graph and History](img/graph_and_history.png){width="400"}
{align="center"}

<div class="grid" markdown>

=== "Basal Adjustments"
    Here you will find the adjustments made to your basal delivery. See below for more details:  
    
    ![Basal Line](img/blue_basal_line.png){width="40" style="vertical-align: middle;"}  **Therapy Basal Reference Line:** The rate you entered in settings. (In Trio 0.2.x, this was called "Profile Basal Rate")  
    ![No Adjustment](img/no_adjustment.png){width="40" style="vertical-align: middle;"}  **No Basal Adjustment** Basal is being delivered at your current therapy basal rate.  
    ![Basal Increase](img/basal_increase.png){width="40" style="vertical-align: middle;"}  **Basal Increase** Basal increased above your current therapy basal rate.  
    ![Basal Decrease](img/basal_decrease.png){width="40" style="vertical-align: middle;"}  **Basal Decrease** Basal decreased below your current therapy basal rate.  
    
=== "Current & Previous Activity"
    This section shows a combined view of your previous, current, and forecasted activity.
    
        
    === "![Cone of Uncertainty](img/cone_of_uncertainty.png){width="20" style="vertical-align: middle;"}  **Cone of Uncertainty**"
        
        !!! info inline end "Graph Legend"
    
            <span style="color: #35c759;">:fontawesome-solid-circle:</span>  CGM Glucose Value  
            <span style="color: #35c759;">:fontawesome-solid-circle-dot:</span>  CGM Glucose Value (Smoothed)  
            <span style="color: red;">:fontawesome-solid-droplet:</span>  Manual Glucose Entry  
            ![Bolus Icon](img/bolus.png){width="15" style="vertical-align: middle;"}  Bolus (SMB or Manual)  
            ![Carb Icon](img/carb.png){width="15" style="vertical-align: middle;"}  Carb Entry  
            <span style="color: #a1845c;">:fontawesome-solid-circle:</span>  Fat-Protein Carb Equivalent (FPU)  
            ![Override Icon](img/override_icon.png){width="15" style="vertical-align: middle;"}  Override Active  
            ![Temp Target Icon](img/temp_target_icon.png){width="15" style="vertical-align: middle;"}  Temp Target Active  
            ![Target Glucose Icon](img/target_glucose.png){width="15" style="vertical-align: middle;"}  Target Glucose  
        
        
        This forecast option displays the full range of possible forecasted predictions as a simplified view of oref's four forecast lines.  
        
    === "![Forecast Lines](img/forecast_lines.png){width="20" style="vertical-align: middle;"}  **Forecast Lines**"
        
        !!! info inline end "Graph Legend"
    
            <span style="color: #35c759;">:fontawesome-solid-circle:</span>  CGM Glucose Value  
            <span style="color: #35c759;">:fontawesome-solid-circle-dot:</span>  CGM Glucose Value (Smoothed)  
            <span style="color: red;">:fontawesome-solid-droplet:</span>  Manual Glucose Entry  
            ![Bolus Icon](img/bolus.png){width="15" style="vertical-align: middle;"}  Bolus (SMB or Manual)  
            ![Carb Icon](img/carb.png){width="15" style="vertical-align: middle;"}  Carb Entry  
            <span style="color: #a1845c;">:fontawesome-solid-circle:</span>  Fat-Protein Carb Equivalent (FPU)  
            ![Override Icon](img/override_icon.png){width="15" style="vertical-align: middle;"}  Override Active  
            ![Temp Target Icon](img/temp_target_icon.png){width="15" style="vertical-align: middle;"}  Temp Target Active  
            ![Target Glucose Icon](img/target_glucose.png){width="15" style="vertical-align: middle;"}  Target Glucose  
        
        
        <span style="color: #1895ff;">:fontawesome-solid-circle:</span>  **IOB Forecast:** Forecasts future glucose readings based on the amount of insulin still active in the body  
        <span style="color: #6f62f3;">:fontawesome-solid-circle:</span>  **ZT Forecast:** Forecasts the worst-case future glucose reading scenario if no carbs are absorbed and insulin delivery is stopped until glucose begins to rise  
        <span style="color: #ffc246;">:fontawesome-solid-circle:</span>  **COB Forecast:** Forecasts future glucose readings by considering the amount of carbohydrates still being absorbed in the body  
        <span style="color: #ff8340;">:fontawesome-solid-circle:</span>  **UAM Forecast:** Forecasts future glucose levels based on the difference between expected glucose and actual glucose readings
    
    - - -
        
    === "![Static Glucose](img/static_glucose.png){width="18" style="vertical-align: middle;"} Static Glucose Color"
        
        !!! info inline end "Threshold Graph Legend"
    
            ![High Threshold Static Icon](img/high_threshold_static.png){width="15" style="vertical-align: middle;"}  High Threshold   
            ![Low Threshold Static Icon](img/low_threshold_static.png){width="15" style="vertical-align: middle;"}  Low Threshold  
            <span style="color: #fe9607;">:fontawesome-solid-circle:</span>  Above Range Glucose  
            <span style="color: #35c759;">:fontawesome-solid-circle:</span>  In Range Glucose  
            <span style="color: #ff3131;">:fontawesome-solid-circle:</span>  Below Range Glucose      
            
        ![Static Color Graph](img/static_color_graph.png){width="300"}
        {align="center"}
        
    === "![Dynamic Glucose](img/dynamic_glucose.png){width="20" style="vertical-align: middle;"} Dynamic Glucose Color"
    
        !!! info inline end "Threshold Graph Legend"
    
            ![High Threshold Dynamic Icon](img/high_threshold_dynamic.png){width="15" style="vertical-align: middle;"}  High Threshold (=180)  
            ![Low Threshold Dynamic Icon](img/low_threshold_dynamic.png){width="15" style="vertical-align: middle;"}  Low Threshold (=70)  
            ![Above Target Icon](img/above_target_glucose_icon.png){width="15" style="vertical-align: middle;"}  Above Target  
            ![At Target Icon](img/at_or_near_target.png){width="15" style="vertical-align: middle;"}  At or Near Target  
            ![Below Target Icon](img/below_target_glucose_icon.png){width="15" style="vertical-align: middle;"}  Below Target  
            
            _*The colors of the threshold lines are also dynamic, so the exact coloring will depend on your settings_ 
        
        ![Dynamic Color Graph](img/dynamic_color_graph.png){width="300"}
        {align="center"}
    
=== "Active Insulin & Carbs"
    This section shows the decay of your active insulin and carbohydrates.  
    
    ![Active Insulin Carbs](img/active_ins_carb.png){width="300"}
    {align="center"}
    
    Insulin is shown in <span style="color: #7d8cf2;">blue</span> and carbs are shown in <span style="color: #ff8340;">orange</span>.
    
=== "Stats & Display Info"
    Here you will find 3 main sections for statistics and display information.
    
    ![Stats and Display](img/stats_and_display.png){width="300"}
        {align="center"}
    
    === "Statistics"
        This opens the statistics view. You can learn more about the new statistics page [here](statistics.md).
            
    === "Time Frame"
        This allows you to choose the time frame shown in the graph.  
        It defaults to 6 hours, but you can choose 4, 6, 12, or 24 hours to be displayed.
            
    === "Legend"
        Tapping this will open a detailed, in-app description of each item shown on the graph.

</div>

- - -

### Adjustment Status

Under the graph you'll find the current status of any adjustment currently active. Adjustments include boluses in progress, temp targets, and overrides.  
Use the tabs below to learn more:    

<div class="grid" markdown>

=== "No Active Adjustment"
    ![No Active Adjustment](img/no_active_adjustment.png){width="300"}
    {align="center"}
    
    - This is the default view when there is no bolus-in-progress, active override, or active temp target
    
=== "![Bolus Active Icon](img/bolus_icon.png){width="10" style="vertical-align: middle;"} Bolus in Progress"
    ![Bolus in Progress](img/bolus_in_progress.png){width="300"}
    {align="center"}
    
    - Shows the status of current bolus
    - Press the ![Cancel Icon](img/x_square.png){width="20" style="vertical-align: middle;"} to cancel the current bolus
    
=== "![Override Icon](img/icon_override.png){width="15" style="vertical-align: middle;"} Active Override"
    ![Active Override](img/override_active.png){width="300"}
    {align="center"}
    
    - Shows details of the current override running
    - Press the ![Cancel Icon](img/x_square.png){width="20" style="vertical-align: middle;"} to cancel the override
    
=== "![Temp Target Icon](img/target.png){width="15" style="vertical-align: middle;"} Active Temp Target"
    ![Active Temp Target](img/temp_target_active.png){width="300"}
    {align="center"}
    
    - Shows details of the current temp target running
    - Press the ![Cancel Icon](img/x_square.png){width="20" style="vertical-align: middle;"} to cancel the temp target

</div>

- - -

### Action Buttons

At the bottom of the screen, you have five action buttons. Use the tabs below to learn more about each section:  

![Trio Actions](img/actions.png){width="400"}
{align="center"}

<!-- Intentionally left off the "s" in the nested Adjustments tab title because it keeps jumping to the Adjustments tab above -->

<div class="grid" markdown>

=== "![Main Icon](img/icon_main.png){width="15" style="vertical-align: middle;"} Main"
    This button takes you back to the home screen no matter where you are in the app.
    
=== "![History Icon](img/icon_history.png){width="15" style="vertical-align: middle;"} History"
    This button brings up the History screen. Here you will find previous treatments, meal entries, glucose readings & manual glucose entries, and previous use of adjustments. Here you can add a finger stick glucose entry by tapping the "+" at the top right.  
    **More information about each tab:**
    
    === "Treatments"
        - Scroll to see previously enacted Temp Basals, Boluses, and SMBs
        - Swipe left to delete inaccurate bolus and SMB entries. You cannot delete Temp Basal entries
        
    === "Meals"
        - Scroll to see previously entered carb, fat, and protein entries
        - Swipe left to edit or delete inaccurate entries
        - Tap "Show Future" or "Hide Future" to expose and remove future carb entries (This does not delete them, only allows you to see or not see them)
        
    === "Glucose"
        - Scroll to see previous glucose readings
        - Swipe left to delete inaccurate entries
        - CGM readings are marked with "→" and finger stick readings are marked with "🩸"
        
    === "Adjustment"
        - Scroll to see previous temp targets and overrides that have been enacted
        - Temp Targets are indicated by a green target icon
        - Overrides are indicated by a purple time icon
        
=== "<span style="color: #7d8cf2;">:fontawesome-solid-circle-plus:</span> Carb & Bolus Entry"
    This button opens the treatments entry screen, also known as the bolus calculator.
    
=== "![Adjustments Icon](img/icon_adjust.png){width="15" style="vertical-align: middle;"} Adjustments"
    This button opens the Overrides and Temp Targets screen.  
    More information about each option:
    
    === "Overrides"
        - Add an override by tapping the "+" at the top right
        - With an override, you can:
            - Name your override to save it as a preset
            - Increase or decrease basal by a percentage
            - Attribute that % change to both ISF and CR, just one of them, or neither of them
            - Override your target glucose
            - Allow, disable or disable on schedule all SMBs
            - Override your Max SMB Basal Minutes and/or Max UAM Basal Minutes
            - Enable indefinitely or for a set length of time
        - You can save it as a preset to enact later or start the override now
            - If you need to edit or delete a preset override, just swipe left on the override
        
    === "Temp Targets"
        - Add a temp target by tapping the "+" at the top right
        - With a Temp Target, you can:
            - Name your temp target to save it as a preset
            - Set your temporary target glucose
            - Set it to start now or in the future
            - Set the duration of your temp target
        - You can save it as a preset to enact later, start the temp target now, or set a start time for a future time and/or date.
            - If you need to edit or delete a preset temp target, just swipe left on the temp target
                
=== "![Settings Icon](img/icon_settings.png){width="15" style="vertical-align: middle;"} Settings"
    This button opens the settings menu
    Below you will (_soon_) find links to each of the settings pages within the docs that correlate to the menus you see:  
    - Closed Loop  
    - Devices
    - Therapy  
    - Algorithm  
    - Features  
    - Notifications  
    - Services  
    - Support & Community  
    
</div>

- - -
