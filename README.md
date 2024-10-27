Repository for [Trio documentation (under development)](https://docs.diy-trio.org)

## Install

- [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this project
- Install *Python* 3
  Review [Properly Installing Python](http://docs.python-guide.org/en/latest/starting/installation/) for help on getting *Python* installed.
- Install a Python Virtual Environment.  
  In this example, I use [`venv`](https://realpython.com/python-virtual-environments-a-primer/#how-can-you-work-with-a-python-virtual-environment), but use whichever you prefer.

```shell
cd trio-docs # cd into the folder where you cloned this repository

# Creates a virtual environment using Python 3 in the venv folder
python3 -m venv venv

# Activate the virtual environment
# Run the next line **each time** you start a new shell window/tab
source venv/bin/activate

# Make sure you are in the folder where you cloned this repository, if not:
# cd trio-docs

# To build and preview the site locally (hot-reload the pages in the Web browser)
python -m pip install sphinx-autobuild

# Install the project's required packages
python -m pip install -r requirements.txt
```

## Run

Once [installed](#install), you can preview the doc locally as you edit.

### Preview Changes Locally

To preview your work as you edit, run this command in a separate terminal window/tab and do not interrupt it:

  ```shell
  # cd trio-docs # cd where you cloned this repository

  sphinx-autobuild docs/EN docs/_build/html
  ```

  This builds the site locally and **runs a local Web server** on http://127.0.0.1:8000  
  It also rebuilds the site when you change a file and hot refreshes the browser so that you can see the changes.

## Tips & Tricks

> [!NOTE]
> Please add!

### Add a Chapter

Using the `#` sign shows a chapter on the menu/index. The amount of `#`'s determines the level.

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

### Link to Another File

When linking to another Markdown file (ending with `.md`) in another directory, the link must start with `../`.

**Example**: `../directoryname/filename.md`
