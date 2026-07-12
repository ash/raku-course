---
title: Case-insensitive matching
---

{% include menu.html %}

Normally a regex distinguishes upper-case from lower-case letters: `/hello/` does not match `HELLO`. The `:i` adverb (short for `:ignorecase`) turns that distinction off:

```raku
say 'HELLO' ~~ /:i hello/; # ｢HELLO｣
```

With `:i`, the letters match regardless of case, so the lower-case pattern matches the upper-case text. It works in either direction and for mixed case too:

```raku
say 'I use RAKU' ~~ /:i raku/; # ｢RAKU｣
```

You can also write the adverb on the `m///` operator instead of inside the pattern:

```raku
say 'HELLO' ~~ m:i/hello/; # ｢HELLO｣
```

Both of these make the **whole** pattern ignore case. The [next page](/regexes/adverbs/adverb-scope) looks more closely at *where* an adverb applies — the difference between the two placements — and how to switch case-sensitivity back on for part of a pattern.

{% include nav.html %}
