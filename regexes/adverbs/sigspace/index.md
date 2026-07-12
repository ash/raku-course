---
title: Significant whitespace
---

{% include menu.html %}

Inside a regex, spaces are normally ignored — they are only there to make the pattern readable. That is why `/foo bar/` matches `foobar`. Sometimes, though, you really do want a space in the pattern to mean “there is whitespace here”. The `:s` adverb (short for `:sigspace`, “significant space”) does exactly that:

```raku
say so 'foo    bar' ~~ /:s foo bar/; # True
say so 'foobar'     ~~ /:s foo bar/; # False
```

With `:s`, the space between `foo` and `bar` in the pattern requires whitespace between the two words in the string. One or more spaces (or tabs) all count, so the run of spaces in `'foo    bar'` matches.

Significant whitespace becomes especially important with grammars, where it lets you write patterns that read like the language you are parsing. You will meet it again as the difference between a `token` and a `rule`.

{% include nav.html %}
