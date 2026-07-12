---
title: Matching literal text
---

{% include menu.html %}

The simplest pattern is a sequence of letters and digits. Such a pattern matches exactly those characters, in that order, anywhere in the string:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
say 'Hello'       ~~ /ell/; # ｢ell｣
```

The match does not have to start at the beginning of the string — the regex engine looks for the pattern at every position until it finds it.

A successful match produces a `Match` object. That `｢cat｣` in the first example is what such an object looks like when printed: `say` displays a `Match` as the text it matched, wrapped in the corner brackets `｢ ｣`. If the pattern is not present, the match fails instead: the smartmatch produces `Nil`, an undefined value that counts as false in a boolean test:

```raku
say ('the cat sat' ~~ /dog/);       # Nil
say ('the cat sat' ~~ /dog/).Bool;  # False
```

Inside a regex, spaces are **not** significant by default — they are there only to make the pattern readable. So `/ ell /` matches exactly what `/ell/` would; the surrounding spaces are simply ignored:

```raku
say 'Hello' ~~ / ell /; # ｢ell｣
```

Because a space in the pattern is ignored, matching an *actual* space takes **quotes**: anything you put in quotes is matched literally. That same quoting is how you match a punctuation character that would otherwise have a special meaning in a regex:

```raku
say 'a b'       ~~ / 'a b' /; # ｢a b｣
say 'price: $5' ~~ / '$' /;   # ｢$｣
```

(For whitespace you can also use the `\s` class, which you will meet shortly.)

{% include nav.html %}
