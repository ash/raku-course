---
title: The solution of ’Did it match?‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say so 'Hello, World' ~~ /World/;
```

🦋 You can find the source code in the file [did-it-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/did-it-match.raku).

## Output

```
True
```

## Comments

1. A successful match is a true value, but it prints as a match object. The `so` function turns it into a plain `True` or `False`.

{% include nav.html %}
