---
title: Proto tokens and alternation
---

{% include menu.html %}

Sometimes one concept has several forms — a number might be an integer or a decimal. You could write an alternation with `|`, but grammars offer a tidier way: a _proto token_ with named variants.

Declare the umbrella token as `proto token`, then write each variant as `token name:sym<label>`:

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<int>   { \d+ }
    token number:sym<float> { \d+ '.' \d+ }
}

say Number.parse('42').defined;   # True
say Number.parse('3.14').defined; # True
```

The `proto token number {*}` line says “a `number` is one of the variants below”. Each variant carries a `:sym<…>` label that names it. When the grammar needs a `<number>`, it tries the variants and, by longest-token matching, picks the one that fits — `int` for `42`, `float` for `3.14`.

Proto tokens read better than a long chain of `|` alternatives, and the `:sym<…>` labels give each case a name you can act on later when you attach meaning to the parse. They are the idiomatic way to express “one of these kinds” in a grammar.

{% include nav.html %}
