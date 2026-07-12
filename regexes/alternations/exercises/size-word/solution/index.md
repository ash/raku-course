---
title: The solution of ’A size word‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 'a large pizza' ~~ / small | medium | large /;
```

🦋 You can find the source code in the file [size-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/size-word.raku).

## Output

```
｢large｣
```

## Comments

1. The alternation lists three possibilities; the pattern matches whichever one is present in the string.

1. Only `large` appears, so that is the match.

{% include nav.html %}
