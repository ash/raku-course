---
title: The solution of ’A bare number‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say '5 and $9' ~~ / <!after '$'> \d+ /;
```

🦋 You can find the source code in the file [bare-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/bare-number.raku).

## Output

```
｢5｣
```

## Comments

1. `<!after '$'>` is a negative lookbehind: it succeeds only when the character just before the current position is **not** a `$`. It checks that neighbour without consuming it.

1. The `9` is rejected because it sits right after a `$`, so the engine matches the earlier `5` instead, where nothing precedes it.

{% include nav.html %}
