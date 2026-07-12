---
title: The solution of ’Reuse a token‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my regex word { \w+ }

if 'cat dog' ~~ / <word> ' ' <word> / {
    say $<word>[0];
    say $<word>[1];
}
```

🦋 You can find the source code in the file [reuse-a-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/reuse-a-token.raku).

## Output

```
｢cat｣
｢dog｣
```

## Comments

1. The same named regex `word` is called twice in the pattern.

1. When a named capture occurs more than once, the results form a list, so they are read as `$<word>[0]` and `$<word>[1]`.

{% include nav.html %}
