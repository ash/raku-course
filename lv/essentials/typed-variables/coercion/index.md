---
title: Tipu konvertēšana tipizētiem mainīgajiem
---

{% include menu.html %}

Tipu ierobežojumi ir pietiekami stingri. Piemēram, jūs nevarat piešķirt `Num` vērtību, pat ja tā satur veselu skaitli, mainīgajam, kas deklarēts kā `Int`:

```raku
my Int $x = 42;
# $x = 42e1; # Kļūda
```

Izmantojiet [vienu no metodēm](/lv/essentials/coercion/#topics-in-this-section), lai pārveidotu vērtību.

```raku
my Int $x = 42;
$x = 42e1.Int;
$x = Int(42e1);
```

{% include nav.html %}