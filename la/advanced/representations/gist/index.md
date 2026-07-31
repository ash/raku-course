---
title: 'Methodus `.gist`'
---

{% include menu.html %}

Methodus `.gist` repraesentationem valoris **homini amicam** reddit — formam quam *legere* velles. Hoc est exacte quod `say` (et `note`) imprimit: methodum `.gist` in quolibet argumento vocat.

```raku
say 42.gist;     # 42
say 'Raku'.gist; # Raku
```

Pro valoribus simplicibus, gist est ipse valor. Pro datis compositis, `.gist` paulum formationis addit ut structura legibilis maneat:

```raku
my @a = 'alpha', 'beta', 'gamma';
say @a.gist; # [alpha beta gamma]
```

Obiectum typi — valor qui typum ipsum repraesentat — gist suum nomen in parenthesibus ostendit, quod facile in output animadverti potest:

```raku
say Int.gist; # (Int)
```

{% include nav.html %}
