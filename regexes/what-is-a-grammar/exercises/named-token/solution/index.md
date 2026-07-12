---
title: The solution of ’A named token‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my regex word { \w+ }

if 'hello world' ~~ / <word> / {
    say $<word>;
}
```

🦋 You can find the source code in the file [named-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/named-token.raku).

## Output

```
｢hello｣
```

## Comments

1. `my regex word { \w+ }` gives the pattern a name so it can be reused.

1. Writing `<word>` in the pattern matches it and captures the result under the same name, reachable as `$<word>`. The first run of word characters is `hello`.

{% include nav.html %}
