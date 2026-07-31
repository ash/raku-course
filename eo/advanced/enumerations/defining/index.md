---
title: Difini enumeracion
translations_gpt:
---

{% include menu.html %}

Deklaru enumeracion per la ŝlosilvorto `enum`, nomo kaj la listo de konstantaj nomoj:

```raku
enum Colour <red green blue>;
```

Tio kreas novan tipon, `Colour`, kaj tri konstantojn: `red`, `green` kaj `blue`. Vi povas uzi la konstantojn rekte laŭ nomo:

```raku
say red;   # red
say green; # green
```

Malantaŭ ĉiu nomo estas nombro, atribuita aŭtomate ekde nulo laŭ la ordo, en kiu vi listigis ilin — `red` estas `0`, `green` estas `1`, `blue` estas `2`. Ĉar la valoroj estas ordigitaj, vi povas kompari la konstantojn:

```raku
say red < blue; # True
```

Variablo povas esti tipita per la enumeracio, tiel ke ĝi akceptas nur tiujn konstantojn:

```raku
my Colour $c = green;
say $c; # green
```

Se nomo povus konflikti kun io alia en via programo, vi ĉiam povas referenci konstanton per la nomo de la enumeracio kun `::`:

```raku
say Colour::red; # red
```

Enumeracio donas al aro de rilataj konstantoj nomon kaj tipon, kio faras kodon uzantan ilin multe pli klara ol nudaj nombroj. La sekva temo rigardas [la nombrojn malantaŭ la nomoj](/eo/advanced/enumerations/values-and-keys).

{% include nav.html %}
