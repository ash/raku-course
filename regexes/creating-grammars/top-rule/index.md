---
title: The TOP rule
---

{% include menu.html %}

When you parse a string with a grammar, Raku starts from a token named `TOP`. It is the entry point — the description of the **whole** input. Everything else in the grammar exists to support it.

A `TOP` token usually refers to other tokens by name, breaking the problem into smaller parts:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}
```

Read `TOP` aloud: “a key, then an equals sign, then a value”. The `key` and `value` tokens say what each of those parts looks like. This division is the whole point of a grammar — each token has one small, clearly named job, and `TOP` assembles them.

`TOP` is only a convention enforced by `.parse`; the other tokens can be named however you like. The names you choose also become the named captures in the result, so a well-named grammar produces a self-describing match tree, as you will see shortly.

{% include nav.html %}
