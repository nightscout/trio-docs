#Current Loop Status

In Nightscout, Trio, and LoopFollow, you will find a detailed explanation of the data calculated and used for the current loop cycle. The table below will explain each so you can understand the information it is displaying.

!!! note "Locating the Current Loop Status"
    - To find this information in Nightscout, hover your cursor over the OpenAPS pill.
    - To find this information in Trio, either view the main screen of the app or tap on the loop icon, depending on the information you are looking for
    - To fing this information in LoopFollow, either view the main screen of the app or tap on the Nightscout tab at the bottom and tap the OpenAPS pill, depending on the information you are looking for

## Loop Cycle Info
The time since the last loop cycle and if the loop calculation was enacted

**Nightscout**

![Time Since Last Loop NS](../img/time-since-last-loop-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![Loop Cycle Info Trio](../img/loop-cycle-info-trio.png)

-   __LoopFollow__

    - - -
    
    ![Loop Cycle Info LF](../img/loop-cycle-info-lf.png)

</div>

## Last Glucose Reading
Glucose at the time of the last loop cycle

**Nightscout**

![Last Glucose Reading NS](../img/last-glucose-reading-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![Last Glucose Reading Trio](../img/current-glucose-reading-trio.png)        

-   __LoopFollow__

    - - -
    
    ![Last Glucose Reading LF](../img/last-glucose-reading-lf.png)        

</div>

## Temp Basal Info
The temp basal that was set for this loop cycle. Nightscout includes it's duration.

**Nightscout**

![Temp Basal Info NS](../img/temp-basal-info-ns.png){width="350"}
![Temp Basal Canceled NS](../img/temp-basal-canceled-ns.png){width="300"}

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![Temp Basal Info Trio](../img/temp-basal-info-trio.png)

-   __LoopFollow__

    - - -
    
    ![Temp Basal Info LF](../img/temp-basal-info-lf.png)

</div>

## [Autosens Ratio](../../configuration/settings/algorithm/autosens.md#sensitivity-ratio)
The current autosens or sensitivity ratio determination

**Nightscout**

![Autosens Ratio NS](../img/autosens-ratio-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![Autosens Ratio Trio](../img/autosens-ratio-trio.png)

-   __LoopFollow__

    - - -
    
    ![Autosens Ratio LF](../img/autosens-ratio-lf.png)

</div>

## [ISF](../../configuration/settings/therapy/isf.md)
This will show your profile ISF or your profile ISF converted into the ISF used for this loop cycle (Adjusted ISF), `ISF: Profile ISF ➔ Adjusted ISF`

**Nightscout**

![Adjusted ISF NS](../img/adjusted-isf-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![Adjusted ISF Trio](../img/adjusted-isf-trio.png)

-   __LoopFollow__

    - - -
    
    ![ISF LF](../img/isf-lf.png)

</div>

## [COB](../../usage/concepts/carb-ratios.md#cob-carbs-on-board)
Current amount of Carbs On Board (COB)

**Nightscout**

![COB NS](../img/cob-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![COB Trio](../img/cob-trio.png)    

-   __LoopFollow__

    - - -
    
    ![COB LF](../img/cob-lf.png)    

</div>

## Deviation
This shows how much the actual glucose change deviated from [BGI](#bgi) (mg/dL/5min or mmol/L/5min)
 
**Nightscout**

![Deviation NS](../img/deviation-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![Deviation Trio](../img/deviation-trio.png)    

-   __LoopFollow__

    - - -
    
    ![Deviation LF](../img/deviation-lf.png)    

</div>

## BGI
The degree to which glucose “should” be rising or falling (mg/dL/5min or mmol/L/5min) based solely on insulin activity

**Nightscout**

![BGI NS](../img/bgi-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![BGI Trio](../img/bgi-trio.png)    

-   __LoopFollow__

    - - -
    
    ![BGI LF](../img/bgi-lf.png)    

</div>

## Carb Ratio
The CR that is currently being used by Trio

**Nightscout**

![Carb Ratio NS](../img/carb-ratio-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![Carb Ratio Trio](../img/carb-ratio-trio.png)    

-   __LoopFollow__

    - - -
    
    ![Carb Ratio LF](../img/carb-ratio-lf.png)    

</div>

## Target Glucose
The current glucose target used by Trio during this loop cycle. 

!!!note
    It may adjust if you have a [temp target](temp-targets.md) set or if you've enabled [Sensitivity Raises Target](../../configuration/settings/algorithm/target-behavior.md#sensitivity-raises-target) or [Resistance Lowers Target](../../configuration/settings/algorithm/target-behavior.md#resistance-lowers-target).

**Nightscout**

![Target Glucose NS](../img/target-glucose-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![Target Glucose Trio](../img/target-glucose-trio.png)    

-   __LoopFollow__

    - - -
    
    ![Target Glucose LF](../img/target-glucose-lf.png)    

</div>

## minPredBG
This variable is the *lowest forecasted value* that Trio has made for your future glucose

**Nightscout**

![minPredBG NS](../img/minPredBG-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![minPredBG Trio](../img/minPredBG-trio.png)    

-   __LoopFollow__

    - - -
    
    ![minPredBG LF](../img/minPredBG-lf.png)    

</div>

## minGuardBG
This is the lowest your glucose is estimated to get over DIA (10 hours)

**Nightscout**

![minGuardBG NS](../img/minGuardBG-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![minGuardBG Trio](../img/minGuardBG-trio.png)    

-   __LoopFollow__

    - - -
    
    ![minGuardBG LF](../img/minGuardBG-lf.png)    

</div>

## IOBpredBG
The glucose forecasted based solely on insulin on board

**Nightscout**

![IOBpredBG NS](../img/IOBpredBG-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![IOBpredBG Trio](../img/IOBpredBG-trio.png)    

-   __LoopFollow__

    - - -
    
    ![IOBpredBG LF](../img/IOBpredBG-lf.png)    

</div>

## COBPredBG
The glucose forecasted based solely on carbs on board and their decay

**Nightscout**

![COBpredBG NS](../img/COBpredBG-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![COBpredBG Trio](../img/COBpredBG-trio.png)    

-   __Trio__

    - - -
    
    ![COBpredBG LF](../img/COBpredBG-lf.png)    

</div>

## UAMpredBG
The glucose forecasted based on current deviations continuing to zero at the same rate they are currently trending

**Nightscout**

![UAMpredBG NS](../img/UAMpredBG-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
        
    ![UAMpredBG Trio](../img/UAMpredBG-trio.png)

-   __LoopFollow__

    - - -
        
    ![UAMpredBG LF](../img/UAMpredBG-lf.png)

</div>

## Total Daily Dose (TDD)
A rolling total of insulin administered over the last 24 hours

**Nightscout**

![TDD NS](../img/tdd-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![TDD Trio](../img/tdd-trio.png)    

-   __LoopFollow__

    - - -
    
    ![TDD LF](../img/tdd-lf.png)    
    
</div>

## Dynamic ISF Details
Shows if Dynamic ISF enabled (On/Off) and which algorithm is in use (logarithmic/sigmoid)

**Nightscout**

![Dynamic ISF NS](../img/dynamic-isf-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![Dynamic ISF Trio](../img/dynamic-isf-trio.png)    

-   __LoopFollow__

    - - -
    
    ![Dynamic ISF LF](../img/dynamic-isf-lf.png)    

</div>

## Adjustment Factor
Shows the adjustment factor set in Dynamic Settings and used for this loop cycle

**Nightscout**

![Adjustment Factor NS](../img/adjustment-factor-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![Adjustment Factor Trio](../img/adjustment-factor-trio.png)    

-   __LoopFollow__

    - - -
    
    ![Adjustment Factor LF](../img/adjustment-factor-lf.png)
    
</div>

## SMB Delivery Ratio
Shows the SMB Delivery Ratio set in Additionals and used for this loop cycle

**Nightscout**

![SMB Delivery Ratio NS](../img/smb-delivery-ratio-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![SMB Delivery Ratio Trio](../img/smb-delivery-ratio-trio.png)    

-   __LoopFollow__

    - - -
    
    ![SMB Delivery Ratio LF](../img/smb-delivery-ratio-lf.png)

</div>

## Algorithm Reasoning
Shows the reasoning behind the insulin administration. 

In the images below:

- `Eventual BG 104 >= 81`: The eventual glucose of 104 mg/dL is shown to be higher than the (adjusted) target glucose. 
- `insulinReq 0.26`: Trio determined that 0.26U was required to return to target. 
- `Microbolusing 0.15U`: Trio is giving 0.15U as an SMB, which is calculated as $0.26 \times 0.65=0.15$ using the [SMB Delivery Ratio](#smb-delivery-ratio). 
- `temp 1.15... >~ req 1.15U/hr`:The remainder of the insulin needed is delivered as a temp basal set to 1.15 U/hr.

**Nightscout**

![Algorithm Reasoning NS](../img/algorithm-reasoning-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![Algorithm Reasoning Trio](../img/algorithm-reasoning-trio.png)    

-   __LoopFollow__

    - - -
    
    ![Algorithm Reasoning LF](../img/algorithm-reasoning-lf.png)

</div>

## Insulin on Board (IOB)
The amount of insulin currently active in your system.

**Nightscout**

![IOB NS](../img/iob-ns.png){width="400"}
{ align="center" }

<div class="grid cards" markdown>

-   __Trio__

    - - -
    
    ![IOB Trio](../img/iob-trio.png)

-   __LoopFollow__

    - - -
    
    ![IOB LF](../img/iob-lf.png)

</div>
