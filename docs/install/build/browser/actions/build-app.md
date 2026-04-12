### Build the App

After you run Identifiers and Prepare the App, you are ready to Build.

1. Click on the `Actions` tab of your Trio repository
1. On the left side, click on <code>4. Build Trio</code>
1. On the right side, click `Run Workflow` to show a dropdown menu
    * You will see your default branch (typically this is `main`)
1. Tap the green button that says `Run workflow`.

> ![build app using github actions](../img/action-04-build-trio.svg){width="700"}
{align="center"}

#### Refresh, Do Not Repeat

!!! tip "Hit Refresh"
    After you tap the green Run workflow button, *GitHub* can be slow to update.

    * Refresh the browser if you are unsure if the action started
    * Do not start a new action until the first one completes

- - -

## Disable the DO NOT RUN Actions

You may notice some *GitHub* actions that have `DONT RUN` or `DO NOT RUN` in their names. Those are special actions that are used by the developers. They are skipped in your `Fork`, but you may see logs for them that indicate they failed.

If they already have the notation `disabled` beside them, you won't see them run - and fail. Otherwise, click on each one, click on the three dots at the upper right, and then select `Disable workflow`. Then you will avoid the annoyance of seeing logs that say the action was automatically run and then skipped.

> ![disable developer actions](../img/trio-disable-do-not-run.png){width="500"}

