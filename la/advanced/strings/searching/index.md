---
title: Quaerendo in catenis
---

{% include menu.html %}

Plures methodi quaestionibus de contentis chordae respondent.

Methodus `contains` indicat an una chorda alicubi intra alteram appareat:

```raku
say 'Raku'.contains('ak'); # True
say 'Raku'.contains('xy'); # False
```

Methodi `starts-with` et `ends-with` initium et finem chordae inspiciunt:

```raku
say 'Raku'.starts-with('Ra'); # True
say 'Raku'.ends-with('ku');   # True
```

Cum positionem exactam subchordae opus est, `index` adhibe. Indicem primi congruus reddit, a nulla numerans:

```raku
say 'Raku'.index('k'); # 2
```

Si subchorda non invenitur, `index` reddit `Nil` potius quam numerum:

```raku
say 'Raku'.index('z'); # Nil
```

{% include nav.html %}
