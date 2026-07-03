---
title: The solution of ’Reverse and shout‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 'raku'.flip.uc;
```

🦋 You can find the source code in the file [reverse-and-shout.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/reverse-and-shout.raku).

## Output

```
UKAR
```

## Comments

1. The methods are applied left to right: `flip` first reverses `'raku'` into `'ukar'`, and then `uc` turns it into `'UKAR'`.

1. Because each method returns a new string, you can chain them in a single expression.

{% include nav.html %}
