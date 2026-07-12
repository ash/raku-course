---
title: The solution of ’Case-blind match‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 'Hello WORLD' ~~ /:i world/;
```

🦋 You can find the source code in the file [case-blind.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/case-blind.raku).

## Output

```
｢WORLD｣
```

## Comments

1. The `:i` adverb makes the match ignore the difference between upper- and lower-case letters.

1. The lower-case pattern therefore matches the upper-case `WORLD`.

{% include nav.html %}
