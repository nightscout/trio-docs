Repository for [Trio documentation (under development)](https://docs.diy-trio.org)

## Install

- [**Clone**](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this project
- Install **Python  3**
  For help getting *Python* installed, see "[Properly Installing Python](http://docs.python-guide.org/en/latest/starting/installation/)".
- Install a **Python Virtual Environment**.  
  In this example, I use [`venv`](https://realpython.com/python-virtual-environments-a-primer/#how-can-you-work-with-a-python-virtual-environment), but use whichever you prefer.  
  ```shell
  cd trio-docs # where you cloned the trio-docs repository
  
  # Creates a virtual environment using Python 3 in the venv folder
  python3 -m venv venv 

  # Activate the virtual environment
  # IMPORTANT: Run the next line **each time** you start a new shell window/tab
  source venv/bin/activate
  ```
- **Install** the **dependencies** (that is the project's required *Python* packages)
  ```shell
  cd trio-docs # where you cloned the trio-docs repository

  python -m pip install -r dev-requirements.txt
  python -m pip install -r requirements.txt
  ```

## Run


### Preview Changes

Once [installed](#install), you can preview the doc locally as you make changes:

- Run the **`mkdocs serve`** command locally in a separate terminal window and keep it running:
  ```shell
  cd trio-docs # where you cloned the trio-docs repository
  source bin/venv/activate # Do this once when opening a shell or if the shell prompt no longer displays `(venv)`
  
  mkdocs serve
  ```
    By default, this runs a local web server that hosts the documentation at http://127.0.0.1:8000/ .
* Preview the site in your Web browser.  
  Most changes will update automatically as you edit.  
  Configuration and navigation changes will require restarting `mkdocs serve`.

### Build the Website Locally

```shell
cd trio-docs # where you cloned the trio-docs repository
source venv/bin/activate # Do this once when opening a shell or if the shell prompt no longer displays `(venv)`

mkdocs build
```

This does not generate the website's PDF version.

### Build the PDF

To export the website as a PDF:

```shell
cd trio-docs # where you cloned the trio-docs repository
source venv/bin/activate # Do this once when opening a shell or if the shell prompt no longer displays `(venv)`

MKDOCS_EXPORTER_PDF=true  mkdocs build
```

 The PDF file is generated in`site/trio-docs.pdf`.

### Find Unused Files

To find unused (orphaned) files in the project:

```shell
CHECK_UNUSED_FILES=true mkdocs build -s
```

> [!NOTE] 
> We use the [`mkdocs-unused-files`](https://github.com/wilhelmer/mkdocs-unused-files) plugin.
 
### Find Broken Links

To list broken links, we use [`mkdocs-htmlproofer-plugin`](https://github.com/manuzhang/mkdocs-htmlproofer-plugin):

```shell
CHECK_BROKEN_LINKS=true mkdocs build --quiet
```

## Contribute

You can contribute to the Trio documentation by correcting typos or suggesting new content.

### Using  the  Terminal

```
cd trio-docs # where you cloned the trio-docs repository

# Activate the Python virtual environment 
#  (if the shell prompt does not display `(venv)`)
source venv/bin/activate

# Declare the official remote trio-docs GitHub repository 
# The remote repository name convention is:
# - origin denotes your copy of the `trio-docs` repository on GitHub
# - upstream denotes the official `trio-docs` repository on GitHub
# You already created `origin` before.
# `upstream` does not exist yet, we now need to create it.
#
# These are shortcuts for the remote repositories 
#   short name => long name (URL)
# We use the short name not to memorize and type the long name (see line below) each time we need to interact with it.
#
git remote add upstream https://github.com/nightscout/trio-docs.git

# Fetch the changes from the remote repositories
git fetch origin
git fetch upstream

# Jump on the `dev` branch
# `dev` contains the source code for the site ready to be deployed)
git switch dev

# Bring recent changes for the `dev` branch back from the official trio-docs repository (`upstream`)
git merge upstream/dev

# Example: We want to add a FAQ page in the `docs/resources/` folder

# Create (`-c`) and jump on a new feature branch where to add the FAQ page
#
git switch -c add_FAQ_page

# Create then edit the new FAQ file (`faq.md`)
MY_FAVORITE_EDITOR_HERE docs/resources/faq.md

# Edit, preview, repeat...
# until you are satisfied with the changes.

# ➡️ 🏬: Add the FAQ page to the warehouse
git add docs/resources/faq.md

# 🏬 ➡️ 🚚: Move all the changes from the warehouse into your **local** repository 
git commit -am "Add FAQ page"

# 🚚 ➡️ ⛅️: Push your feature branch `doc/add_FAQ_page` to your remote repository
git push -u origin add_FAQ_page
```

- Now open the **official trio-docs repository** in your **Web browser** 
   https://github.com/nightscout/trio-docs/pulls
- Click the **pull-requests tab**  
  This page displays a box saying you can create a Pull-Request for your branch.
- Click the button to do so, then follow the instructions.

### Add a Package

> [!NOTE]
> In this section, the terms Python **package** and **dependency** refer to the same thing.

- **Create** a feature **branch** (aka. topic branch)
  ```shell
  git switch dev
  git switch -c feature/add_dependency_XXX
  ```
- **Add** the pinned version of the new **package** to the **`requirements.in`** file
  ```shell
    MY_FAVORITE_EDITOR_HERE requirements.in
    
    # Add the pinned version of the package to `requirements.in
    XXX_PACKAGE_NAME_HERE==XXX_PACKAGE_VERSION_HERE
    ```
    For example, to add the `mkdocs-exporter` package version `6.1.1`, I added the following line to the `requirements.in` file:
     ```text
     mkdocs-exporter==6.1.1
     ```
- Generate **`requirements.txt`**
  ```shell
    cd trio-docs
    
    # IMPORTANT: The project's virtual environment MUST be activated first
    source venv/bin/activate
    
    # Remove the already installed packages in case you need to start from a blank slate
    # python -m pip freeze --exclude-editable | xargs python -m pip uninstall -y
    
    # Install the development packages
    # (among which `pip-tools` that contains `pip-compile`)
    pip install -r dev-requirements.txt
    
    # Install the direct dependencies (listed in `requirements.in`
    # This also installs the indirect dependencies these packages depend upon.
    pip install -r requirements.in
    
    # Add code/doc using this package and test until it is ready.
    
    # Generate the `requirements.txt` file from `requirements.in`
    pip-compile
    
    # Commit the changes (where XXX denotes the package name)
    git add requirements.in requirements.txt
    git commit -m "➕ Add dependency: XXX"
    
    # Push your feature branch to your `origin` repository
    git push -u origin feature/add_dependency_XXX
    ```
- [**Create a Pull Request**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) with your changes:
	- Open your clone repository of `trio-docs` on *GitHub* (`https://github.com/YOUR_USERNAME/trio-docs`)
		- Click the `Pull Requests` tab 
		- Click "`Compare & pull request`" in the yellow banner next to your branch name


## FAQs

> [!NOTE]
> Please add!

### Add a Chapter

Using the `#` sign shows a chapter on the menu/index. The number of `#`'s determines the level.

**Example**:

```markdown
# README

## Tips & Tricks

### Add a Chapter

### Link to Another File
```

> [!TIP]
> If you want to avoid a chapter ending up in the menu/index, use bold text by:
>
> - either surrounding the text with 2-star signs `**`
> - or adding `<b>` before the text and `</b>` after the text (without spaces).
>
> | Input              | Result        |
> | ------------------ | ------------- |
> | `**bold text**`    | **bold text** |
> | `<b>bold text</b>` | **bold text** |

### Add a Link to Another File

When linking to another Markdown file (ending with `.md`) in another directory, the link must start with `../`.

In the below example, assuming you are editing `docs/install/index.md`, to add a link pointing to `docs/configuration/new-user-setup.md` with the text `new user setup`:

```html
Now on to the [new user setup](../configuration/new-user-setup.md)
```

Do not forget the `.md` suffix.

```
docs                    <== ../ 
├── install             <== ./ denotes the current folder (docs/install/)
│ └── index.md          <== You are here (the current file)
│   
├── configuration       <== ../configuration
│ └── new-user-setup.md <== ../configuration/new-user-setup.md
```

### Update the Glossary


> Trio's glossary is a dictionary for the acronyms and technical terms used in the documentation. It explains them in simple terms.
> It is kind of a personal translator for all the diabetes jargon you will find there.

The glossary is composed of a source file and a generated Markdown page.  
The website uses the Markdown page of the glossary.

**Updating the glossary** is a 3-step **manual process**:
1. Modify the glossary source file ([`includes/glossary.txt`](https://github.com/nightscout/trio-docs/tree/dev/includes/glossary.txt) ) to add/update/remove entries.
2. Generate the glossary Markdown page (`docs/faqs/glossary.md`) using this handy shell script:
    ```shell
    ./make-glossary.sh
    ```
    ```mermaid
    ---
    title: Generate the Glossary Page
    ---
    flowchart LR
      subgraph Glossary Source
        text_glossary[/ includes/glossary.txt /]
      end
      subgraph Run Shell Script
        generator{ ./make-glossary.sh }
      end
      subgraph Glossary Page
        markdown_glossary[/ docs/faqs/glossary.md /]
      end

      text_glossary --> generator --> markdown_glossary
     ```
3. **Commit** the changed files (glossary source file and generated page):
     ```shell
     git add includes/glossary.txt docs/faqs/glossary.md
     git commit -m "Update Glossary: ..."
     ```

> [!NOTE]
> Remember to commit these 2 files.


### Migrate a Sphinx page to Mkdocs

#### Migrate an Admonition from Sphinx to Mkdocs

> [!NOTE] 
> **What is an admonition?**  
> An **admonition** is a rectangular box with a **title** (optional) and a text **body**.  
> Each admonition type has a **specific icon** and box **border color**.
> 
> For instance, a *warning* admonition has a yellow icon and border. Its icon is an exclamation sign in a yellow triangle.

This is what an admonition looks like in **Sphinx**:

```markdown
:::{warning}
This is not medical advice.  
Understanding the changes you are making is important, and always be sure to exercise caution.  
When in doubt, consult your diabetes care team for settings guidance.
:::
```

Here is what the same admonition looks like in "**Mkdocs**-material":

```markdown
!!! warning
    
    This is not medical advice.
    Understanding the changes you are making is important, and always be sure to exercise caution.
    When in doubt, consult your diabetes care team for settings guidance.
```

where:
- The **title** line contains (in this order):
  - 3 exclamation characters `!!!`
  - a space ` `
  - the [admonition **type**](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types),  (`warning` in the above example)
  - a space
  - an optional **title** (none in this example) surrounded by double quotes.
    We could have used `"Not a Medical Advice"` to set a title.
- Each line of the **body text** (lines below the title)  
  **must** be **indented 4-spaces**.
  I use the `␠` character to denote a space (` `) in the example below. to make it stand out. Do not copy and paste this, it is only for visual purposes.
  ```markdown
    !!! warning "Not medical advice"
    ␠␠␠␠
    ␠␠␠␠ Understanding the changes you are making is important [...]
    ```

> [!TIP] 
> **Separate the Title and Body with an Empty Line**  
> 
> - Adding a blank line (4 spaces indented) between the title and the body of the text makes a visual distinction for the reader.
>   This is not required. 
> - When present in the body text, empty lines must also use a 4-space indentation.

> [!NOTE] 
> Mkdocs (the site generation engine) does not provide admonitions but [mkdocs-material (the theme) does](https://squidfunk.github.io/mkdocs-material/reference/admonitions) via the `pymdownx` Markdown extension.
