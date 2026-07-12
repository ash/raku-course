---
title: The solution of ’A letter or digit‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say '  @x7' ~~ / <[a..z 0..9]> /;
```

🦋 You can find the source code in the file [digit-class.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/digit-class.raku).

## Output

```
｢x｣
```

## Comments

1. A class can hold several ranges, one after another. `<[a..z 0..9]>` matches one character that is a lowercase letter **or** a digit. The space between the two ranges is only there for readability — `<[a..z0..9]>` means exactly the same, because spaces inside `<[…]>` are ignored, just as they are elsewhere in a regex.

1. Scanning from the left, the two spaces and the `@` are not in the class and are skipped; the first matching character is `x`. (This combined class is close to what the shortcut `\w` stands for.)

{% include nav.html %}
