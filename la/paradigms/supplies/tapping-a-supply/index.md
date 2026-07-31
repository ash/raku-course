---
title: Ad supply se coniungere
translations_gpt:
---

{% include menu.html %}

Ut supply te subscribas, ad illud _te coniungis_: `.tap` blocum das, et ille blocus pro omni valore quem supply emittit currit. Simplicissimum supply cum quo experiaris est `Supply.from-list`, quod valores indicis emittit:

```raku
my $s = Supply.from-list(1, 2, 3);
$s.tap(-> $v { say $v });
```

Hoc imprimit:

```
1
2
3
```

Blocus `-> $v { say $v }` _coniunctio_ est. Supply unumquemque valorem in eum vicissim trudit, itaque blocus ter currit, semel pro valore.

Coniunctio quidlibet cum valore agere potest, etiam effectum accumulare:

```raku
my $total = 0;
Supply.from-list(1, 2, 3).tap(-> $v { $total += $v });
say $total; # 6
```

Hic omnis valor emissus ad `$total` additur, qui in `6` finit. Se coniungere actus fundamentalis programmationis reactivae est: frustum morum ad fluxum necte, et fluxum illud agere sine.

{% include nav.html %}
