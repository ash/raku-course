---
title: Longest token and first match
---

{% include menu.html %}

When two alternatives could both match at the same spot, the `|` operator chooses the one that matches the **longest** piece of text. This is called _longest-token matching_:

```raku
say 'catdog' ~~ / cat | catdog /; # ｢catdog｣
```

Even though `cat` is written first and would match, `|` prefers the longer `catdog`.

Sometimes you want the opposite — try the alternatives in the order you wrote them and take the **first** one that matches. That is what the double bar `||` does:

```raku
say 'catdog' ~~ / cat || catdog /; # ｢cat｣
```

Now `cat` is tried first and matches, so the engine stops there and never considers `catdog`.

Use `|` (longest token) when you want the “best” match regardless of order — this is the usual choice, and the one grammars rely on. Use `||` (first match) when the order of the alternatives is meaningful and you want earlier ones to win.

{% include nav.html %}
