Repository for [Trio documentation (under development)](https://docs.diy-trio.org)

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
> - either surrounding the text with 2-star signs `**` 
> - or adding `<b>` before the text and `</b>` after the text (without spaces).  
> 
> Input              | Result        
> ------------------ | ------------- 
> `**bold text**`    | **bold text** 
>  `<b>bold text</b>` | **bold text** 

### Link to Another File

When linking to another Markdown file (ending with `.md`) in another directory, the link must start with `../`.

**Example**: `../directoryname/filename.md`
