---
title: Greedy and frugal matching
---

{% include menu.html %}

By default, a quantifier is _greedy_: it matches as much as it possibly can while still letting the rest of the pattern succeed. Consider matching from the first `<` to a `>`:

```raku
say '<a><b>' ~~ / '<' .+ '>' /; # ｢<a><b>｣
```

The `.+` swallowed as much as it could, all the way to the **last** `>`, so the match runs across both pairs of brackets.

To make a quantifier _frugal_ (also called _lazy_ or _non-greedy_), add a `?` after it. A frugal quantifier matches as **little** as possible:

```raku
say '<a><b>' ~~ / '<' .+? '>' /; # ｢<a>｣
```

Now `.+?` stops at the **first** `>`, so only the first bracketed piece matches.

The `?` suffix works on any quantifier: `*?` and `**?` are frugal too. Greedy and frugal versions match the same kinds of text — they differ only in how much they take when there is a choice.

{% include nav.html %}
