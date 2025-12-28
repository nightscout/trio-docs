
# Sharing Trio Logs


The "*Share Logs*" feature lets you export the app’s logs (from today and yesterday) 
and opens the iOS share sheet so you can transmit them to support channels, developers, or storage services for troubleshooting and record-keeping.

!!! tip "Check existing solutions"
    
    When you run into an issue and want to share your logs, please take a moment to check if it’s already been solved by browsing through [Facebook](https://facebook.triodocs.org/) or [Discord](https://discord.triodocs.org/) first.

Follow the steps below to save and share the logs.

## Export Logs

- From within the **Trio** app,  
  tap **`⚙️ Settings › Support & Communities › Share Logs`**
- Use the standard **iOS share sheet** to send these files via Mail, cloud-storage apps, or any other destination available in the share sheet.

Once you've exported the logs, you can share them where needed.

## Share Logs

Logs are most commonly shared in the following cases:

- **Community troubleshooting**:  
    Post logs to the Trio [`#bug-reports`](https://discord.com/channels/1020905149037813862/1239982832026255521) channel on **Discord** or relevant **Facebook** groups when volunteers ask for them to help diagnose an issue.  
      
    !!! tip "Overcoming file size limits: Compress Logs"
        
        If Discord or Facebook complains about the file size when you upload the logs, **[compress them](#compressing-logs)** into an archive before sending.

- **Developer bug reports**: When requested, attach logs to a [**GitHub issue**](https://github.com/nightscout/Trio/issues/new/choose) so that developers can use them to reproduce, investigate, and resolve the problem.

## Compressing Logs

*Discord* and *Facebook* will **reject** your **file upload** if it is **larger than 25 MB**.  
In this case, you first need to compress the log files into an archive before sending.

The following sections describe how to do that on [Windows](#compress-logs-on-windows) and [macOS](#compress-logs-on-macos).

### Compress Logs on Windows

To compress the log files on *Windows*, you can use either a [graphical application](#compress-logs-on-windows-with-a-graphical-application) or the [terminal](#compress-logs-on-windows-in-the-terminal).

#### Compress Logs on Windows with a Graphical Application

1. Launch the Windows **File Explorer** 
2. **Select Log Files**  
    - Navigate to the folder containing the log files.
    - Hold ++control++ and **click** `log.txt`.
    - Hold ++control++ and **click** `log_prev.txt`.
3. **Compression**  
    - Right-click one selected file
    - Select `Send to`  in the contextual menu.
	    - Select `Compressed (zipped) folder`.
4. **Name Archive**  
    - Type `triologs.zip` and press **++enter++**.
    

#### Compress Logs on Windows in the Terminal

If you are not comfortable using the  **command line in a terminal** on *Windows*, consider using a [graphical application](#compress-logs-on-windows-with-a-graphical-application) instead; otherwise, keep reading.

Choose your favorite Windows Shell below **PowerShell** or "**Command Prompt (CMD)**", then follow the instructions.

<div class="grid" markdown>


=== "PowerShell"

    1. **Open PowerShell**:  
        - Right-click the `Start menu`
	    - Select `Windows PowerShell`.
    2. **Navigate to Log Folder**:  
         ```powershell
         cd $HOME\Downloads
         ```
        Replace `$HOME/Downloads` with the folder where you downloaded the log files.
    3. **Run Compression Command**:  
        ```powershell
        Compress-Archive -Path log.txt, log_prev.txt -DestinationPath triologs.zip
        ```
        where:
        - `-Path` is followed by the files to compress.
        - `-DestinationPath` is followed by the name of the ZIP archive file.
    4. **Verify Archive**:  
        A new `triologs.zip` archive file appears in the same folder.


=== "Command Prompt (CMD)"
    
    1. **Open Command Prompt**:  
        - Click the `Start menu`
	    - Type `cmd`.
	    - Press ++enter++.
    2. **Navigate to Log Folder**:  
         ```bat
         cd %USERPROFILE%\Downloads
         ```
               Replace `%USERPROFILE%\Downloads` with the folder where you downloaded the log files.
    3. **Run Compression Command**:   
         ```bat
         tar -a -c -f triologs.zip log.txt log_prev.txt
         ```
         where:
         - `tar` is the archiving utility.
         - `-a` selects the archive format based on the file extension (`.zip` in this case).
         - `-c` creates a new archive.
         - `-f` is followed by the name of the archive file.
         - `log.txt log_prev.txt` are the files to include in the archive.
    4. **Verify the Archive**:  
        A new `triologs.zip` archive file appears in the same folder.

    
</div>


### Compress Logs on macOS

To compress the log files on a *Mac*, you can use either a [graphical application](#compress-logs-on-macos-with-a-graphical-application) or the [terminal](#compress-logs-on-macos-in-the-terminal).

#### Compress Logs on macOS with a Graphical Application

1. Launch the **`Finder`**  application
2. **Select Log Files**:
      - Hold ++command++ and **click** `log.txt` 
	- Hold ++command++ and **click** `log_prev.txt`.  
3. **Compression**  :
    - Right-click the blue highlighted lines.
    - Select **`Compress`** in the contextual menu.
4. **Name Archive**:  
    - An `Archive.zip` file appears.
    - Rename it to `triologs.zip`.

#### Compress Logs on macOS in the Terminal

If you are not comfortable using the  **command line in a terminal** on your Mac, consider using a [graphical application](#compress-logs-on-macos-with-a-graphical-application) instead; otherwise, keep reading:

1. **Launch Terminal**:
    - Press ++command+space++
    - Type **`Terminal`** 
    - Press ++enter++
2. **Navigate to Downloads Folder**:  
    ```shell
    cd ~/Downloads
    ```
    Replace `~/Downloads` with the folder where you downloaded the log files.
3. **Create Archive**:
   To create the archive, you can use `zip` or `tar`.
    ```shell
    zip triologs.zip log.txt log_prev.txt
    ```
    If this method does not work because `zip` is not installed, you can install it like so:
    ```shell
    xcode-select --install
    ```
    You can also use the *tar gzip* **alternative** method to compress the log files:
    ```shell
    tar -czf triologs.tar.gz log.txt log_prev.txt
    ```
