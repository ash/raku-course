---
title: The solution of ’A grammar that adds‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar Sum {
    token TOP    { <number>+ % '+' }
    token number { \d+ }
}

class SumActions {
    method TOP($/) { make [+] $<number>.map(*.Int) }
}

say Sum.parse('3+4+5', actions => SumActions).made;
```

🦋 You can find the source code in the file [grammar-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-sum.raku).

## Output

```
12
```

## Comments

1. `<number>+ % '+'` matches one or more numbers separated by `+` signs — the `%`
modifier describes the separator between repetitions.

1. The action method runs when `TOP` matches. `make` attaches a computed value — the
sum of the numbers — which `.made` reads back after parsing.

1. A `token` never skips spaces, so this grammar is strict about its input:
`'3+4+5'` parses, but `'3 + 4 + 5'` does not (`.parse` returns `Nil`). To accept
spaces around the plus signs, make `TOP` a `rule` — and detach the quantifier
from its atom:

    ```raku
    grammar Sum {
        rule TOP     { <number> + % '+' }
        token number { \d+ }
    }
    ```

    In a `rule`, whitespace in the pattern stands for an implicit `<.ws>` call.
Written as `<number> + % '+'`, with a space before the `+` quantifier, that
implied whitespace covers the whole repetition — separators included — so both
`'3+4+5'` and `'3 + 4 + 5'` are parsed, and the sum is `12` either way. (If you
prefer to stay with a `token`, spell the spaces out in the separator:
`<number>+ % [ \s* '+' \s* ]`.)

{% include nav.html %}
