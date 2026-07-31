---
title: Supply transformare
translations_gpt:
---

{% include menu.html %}

Supply transformari potest antequam ad illud te coniungas, non aliter ac index. Methodi ut `map` et `grep` **novum** supply producunt cuius valores transformati sunt:

```raku
my @out;
Supply.from-list(1, 2, 3).map(* * 10).tap(-> $v { @out.push($v) });
say @out; # [10 20 30]
```

`map(* * 10)` novum supply aedificat quod decies unumquemque valorem originalem emittit, et coniunctio ea in `@out` colligit.

`grep` supply filtrat, solos valores transmittens pro quibus blocus eius verus est:

```raku
my @out;
Supply.from-list(1, 2, 3, 4, 5, 6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out; # [2 4 6]
```

Quia unaquaeque transformatio aliud supply reddit, ea concatenare potes, fistulam parvam aedificans quae fluxui respondet:

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).map(* ** 2).tap(-> $v { @out.push($v) });
say @out; # [4 16 36]
```

Idem vocabularium `map`/`grep` est quod ex indicibus nosti, valoribus per tempus advenientibus applicatum. Supply trudit; fistula tua format quid exeat.

{% include nav.html %}
