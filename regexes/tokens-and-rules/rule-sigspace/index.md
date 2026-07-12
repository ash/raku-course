---
title: Significant space in rules
---

{% include menu.html %}

A `rule` is a `token` with one extra feature switched on: `:sigspace` (significant space), exactly the `:s` adverb. It turns the whitespace you write in the pattern into an automatic whitespace matcher between the parts. That is what you want whenever the text you parse has spaces between its pieces.

Compare the two. In a `token`, whitespace in the pattern is **ignored**, so `<first> <second>` asks for the two parts with nothing between them. Since `\w+` stops at the space, a spaced input has no match:

```raku
grammar WithToken {
    token TOP    { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithToken.parse('foo bar').defined; # False
```

You *can* accept the space in a `token` — you just have to match it yourself, for example with `\s+`:

```raku
token TOP { <first> \s+ <second> }      # now 'foo bar' parses
```

A `rule` inserts that whitespace matching for you, so simply writing a space between the parts is enough:

```raku
grammar WithRule {
    rule TOP     { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithRule.parse('foo bar').defined; # True
```

A common pattern is to use `rule` for the higher-level structure — where the parts are separated by spaces — and `token` for the small pieces like names and numbers, which contain no spaces. That keeps your grammar both correct and easy to read.

{% include nav.html %}
