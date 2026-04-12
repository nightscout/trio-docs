 🚧Documentation Under Construction🚧
 
## Customize with Browser Build

### Change the Branch for a Submodule

If you ever want to use a different branch or commit for a submodule than the one provided by your current Trio workspace, this is how to do it.

1. Go to the repository of interest - it does not need to be in the same repository that Trio uses
    * If you provide the full SHA, GitHub can find that specific code version while running the build_trio.yml action
2. Identify the exact commit you want to use and record the full SHA
3. Go into the `.github/workflows/build_trio.yml` file and edit it at or around line 217 (in the Customize Trio section)
4. Add 3 lines to bring in the desired commit
    * First line is a comment explaining what you are doing
    * Second line defines the submodule commit you want to use
    * Third line updates that submodule as you just specified

An example is shown below. You can use this as a prototype for changing the SHA for any submodule as desired. This particular prototype uses the pod-keep-alive branch for OmniBLE with Trio.

``` { .bash .copy title="Copy and Paste to Customize - Edit SHA and Submodule Name for your situation" }
          # Point to the most recent SHA for OmniBLE branch pod-keep-alive
          git update-index --cacheinfo 160000 dade6ed309eb72232a187d88179a367e34f800d9 "OmniBLE"
          git submodule update
```

