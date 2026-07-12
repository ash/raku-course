---
title: The solution of ’A vowel‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 'Hello' ~~ / <[aeiou]> /;
```

🦋 You can find the source code in the file [a-vowel.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/a-vowel.raku).

## Output

```
｢e｣
```

## Comments

1. The class `<[aeiou]>` lists the five vowels; it matches whichever one appears first.

1. In `Hello`, the letter `H` is not in the class, so the match starts at `e`.

{% include nav.html %}
