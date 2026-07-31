---
title: '`gather` kaj `take`'
translations_gpt:
---

{% include menu.html %}

La paro `gather` kaj `take` estas fleksebla maniero konstrui liston. Vi envolvas iom da kodo en blokon `gather`, kaj ĉiufoje kiam tiu kodo vokas `take`, la valoro estas aldonata al la listo, kiun `gather` produktas.

```raku
my @result = gather {
    take 1;
    take 2;
    take 3;
};

say @result; # [1 2 3]
```

La tri vokoj de `take` kontribuas tri valorojn, kaj `gather` kolektas ilin en la liston konservitan en `@result`.

La vera forto de ĉi tiu paro montriĝas, kiam la vokoj de `take` estas disaj tra ordinara regofluo, ekzemple buklo kun kondiĉo. La listo tiam enhavas nur la valorojn, kiujn vi elektis preni:

```raku
my @evens = gather for 1..10 {
    take $_ if $_ %% 2;
};

say @evens; # [2 4 6 8 10]
```

Ĉi tie la buklo iras tra la nombroj de 1 ĝis 10, sed nur la paraj estas prenataj, do `@evens` fine enhavas `2, 4, 6, 8, 10`. (La operatoro `%%` kontrolas, ĉu nombro dividiĝas senreste.)

Ĉi tiu apartigo estas tio, kio faras `gather`/`take` tiel oportuna: la ĉirkaŭa kodo decidas, _kiam_ produkti valoron, kaj `gather` kviete kolektas ĉion, kio estas prenata.

{% include nav.html %}
