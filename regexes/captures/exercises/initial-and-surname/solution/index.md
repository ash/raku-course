---
title: The solution of ’Initial and surname‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
if 'J Smith' ~~ / $<initial>=(\w) ' ' $<surname>=(\w+) / {
    say ~$<surname>;
}
```

🦋 You can find the source code in the file [initial-and-surname.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/initial-and-surname.raku).

## Output

```
Smith
```

## Comments

1. `$<initial>=(\w)` captures a single word character; `$<surname>=(\w+)` captures the run of letters after the space.

1. The surname is then read back by name as `$<surname>`, and the `~` prefix prints it as a plain string; without it, `say $<surname>` would show the match object as `｢Smith｣`.

{% include nav.html %}
