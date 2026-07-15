---
title: The solution of ’Join the strings‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say [~] '2', '0', '2', '5';
```

🦋 You can find the source code in the file [join-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/join-strings.raku).

## Output

```
2025
```

## Comments

1. `[~]` inserts the concatenation operator `~` between the strings.

1. `'2' ~ '0' ~ '2' ~ '5'` produces the single string `2025`.

{% include nav.html %}
