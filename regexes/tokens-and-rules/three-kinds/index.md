---
title: regex, token, and rule
---

{% include menu.html %}

The three keywords build on one another:

* `regex` — backtracks, like the patterns in `/ … /`
* `token` — does **not** backtrack
* `rule` — like `token`, but spaces in the pattern are significant

_Backtracking_ means that when a later part of the pattern fails, the engine goes back and tries a shorter match for an earlier part. A `regex` does this:

```raku
my regex r { \w+ 'b' }
say so 'aaab' ~~ / <r> /; # True
```

`\w+` first grabs all of `aaab`, then has to give back the last `b` so the literal `b` can match. A `token` refuses to give anything back:

```raku
my token t { \w+ 'b' }
say so 'aaab' ~~ / <t> /; # False
```

Here `\w+` takes all of `aaab`, the literal `b` finds nothing left, and the token simply fails instead of backtracking.

That sounds like a limitation, but for grammars it is exactly what you want: each token should match one clean thing and commit to it. This makes parsing faster and the result predictable. **Use `token` by default**; reach for `regex` only on the rare occasions you truly need backtracking.

{% include nav.html %}
