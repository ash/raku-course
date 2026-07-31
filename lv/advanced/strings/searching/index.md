---
title: Meklēšana virknēs
---

{% include menu.html %}

Vairākas metodes atbild uz jautājumiem par to, ko virkne satur.

Metode `contains` nosaka, vai viena virkne atrodas jebkur citā virknē:

```raku
say 'Raku'.contains('ak'); # True
say 'Raku'.contains('xy'); # False
```

Metodes `starts-with` un `ends-with` pārbauda virknes sākumu un beigas:

```raku
say 'Raku'.starts-with('Ra'); # True
say 'Raku'.ends-with('ku');   # True
```

Kad nepieciešama precīza apakšvirknes pozīcija, izmantojiet `index`. Tā atgriež pirmās atbilstības indeksu, skaitot no nulles:

```raku
say 'Raku'.index('k'); # 2
```

Ja apakšvirkne nav atrasta, `index` atgriež `Nil`, nevis skaitli:

```raku
say 'Raku'.index('z'); # Nil
```

{% include nav.html %}
