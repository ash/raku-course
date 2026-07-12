---
title: The solution of ’The first non-digit‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say '42abc' ~~ /\D/;
```

🦋 You can find the source code in the file [first-non-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/first-non-digit.raku).

## Output

```
｢a｣
```

## Comments

1. `\D` is the opposite of `\d`: it matches any character that is not a digit.

1. The first two characters are digits, so the match starts at `a`.

{% include nav.html %}
