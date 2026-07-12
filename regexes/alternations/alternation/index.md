---
title: Alternation
---

{% include menu.html %}

Separate two or more alternatives with a vertical bar `|`. The pattern matches if **any** of them matches:

```raku
say 'no thanks' ~~ / yes | no /; # ｢no｣
```

The pattern tried `yes` and `no`; the string contains `no`, so that is what matched.

You can list as many alternatives as you like:

```raku
say 'the sky is blue' ~~ / red | green | blue /; # ｢blue｣
```

Alternatives can be any sub-pattern, not just literal words — they may contain character classes, quantifiers, and captures. To keep an alternation together inside a larger pattern, group it with square brackets `[ ]`, which [group **without** capturing](/regexes/captures/non-capturing):

```raku
say 'cathouse' ~~ / [ cat | dog ] house /; # ｢cathouse｣
```

Here the alternation `cat | dog` is one unit, and it must be followed by `house`.

{% include nav.html %}
