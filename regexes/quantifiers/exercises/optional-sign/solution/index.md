---
title: The solution of ’An optional sign‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say '-42' ~~ / '-'? \d+ /;
```

🦋 You can find the source code in the file [optional-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/optional-sign.raku).

## Output

```
｢-42｣
```

## Comments

1. The `'-'?` part matches an optional minus sign — zero or one of them.

1. `\d+` then matches the run of digits. The same pattern also matches a number with no sign, such as `42`.

{% include nav.html %}
