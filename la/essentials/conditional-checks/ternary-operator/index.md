---
title: Operator ternarius
---

{% include menu.html %}

Operator ternarius in Raku est constructio bipartita `??` ... `!!`. Test Booleanus sequitur duabus expressionibus, quarum una exsequitur secundum eventum testis.

```raku
my $shines = 'Sol';
my $tempus-diei = $shines aequum est 'Sol' ?? 'dies' !! 'nox';
dic $tempus-diei;
```

Cum valore currenti variabilis `$shines`, hic programma imprimit `dies`. Si mutas ad `Luna`, eventus erit `nox`.

Possibile est concatenare expressiones ternarias. Tantum cura ut non nimis complicatum fiat.

```raku
my $horae = 20;
my $tempus-diei =
    $horae <= 6 ?? 'Nox' !!
    $horae <= 12 ?? 'Mane' !! 
    $horae <= 18 ?? 'Postmeridianum' !! 'Vespera';
dic $tempus-diei;
```

Hic, secundum valorem in `$horae`, alia pars diei referetur.

{% include nav.html %}