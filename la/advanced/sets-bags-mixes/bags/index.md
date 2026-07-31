---
title: Sacculi et mixturae
translations_gpt:
---

{% include menu.html %}

Inopia tantum meminit _num_ valor praesens sit. Interdum etiam scire vis _quotiens_ appareat. Id est quod `Bag` praestat: numerum pro quoque valore servat.

Sacculum creas functione `bag`. Valores repetiti non collabuntur — numerantur:

```raku
my $b = bag(<a b a c a>);
say $b<a>; # 3
say $b<b>; # 1
```

Si sacculum de valore interrogas subscriptione `< >`, reddit quotiens ille valor insertus sit. Methodus `total` summam omnium numerorum dat:

```raku
say bag(<a b a c a>).total; # 5
```

`Mix` est eadem notio ac sacculus, nisi quod numeri (qui _pondera_ vocantur) fracti esse possunt, non solum integri. Ad pondera explicite assignanda, quemque valorem cum suo pondere coniunge et indicem coerce cum `.Mix`:

```raku
my $m = (flour => 2.5, sugar => 0.75).Mix;
say $m<flour>; # 2.5
say $m.total;  # 3.25
```

Pondus inspicere cum `< >` et summam cum `total` computare eodem modo operantur ac pro sacculo — tantum numeri integri esse non debent. Hic `total` pondera `2.5` et `0.75` addit, dans `3.25` — est summa ponderum, non numerus valorum. Sacculi et mixtiones utiles sunt quotienscumque quantitates persequi debes — exempli gratia, numerando quotiens quodque verbum in textu appareat, vel pondera optionibus assignando.

{% include nav.html %}
