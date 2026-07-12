---
title: The solution of ’A spaced assignment‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar Assign {
    rule TOP    { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

say Assign.parse('x = 5').defined;
```

🦋 You can find the source code in the file [spaced-assignment.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-assignment.raku).

## Output

```
True
```

## Comments

1. Because `TOP` is a `rule`, the spaces in the pattern allow whitespace around the `=` in the input.

1. So `'x = 5'` parses. With a `token` for `TOP`, only `'x=5'` would match.

The whitespace a `rule` allows is **optional**, not required: the significant space matches *zero* spaces just as happily as one, so the unspaced form parses too:

```raku
say Assign.parse('x=5').defined; # True
```

The `rule` therefore accepts `'x = 5'`, `'x=5'`, and even `'x =5'` alike — flexibility without spelling out where a space may or may not go.

{% include nav.html %}
