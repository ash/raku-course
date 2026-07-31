---
title: Capturae in permutatione
translations_gpt:
---

{% include menu.html %}

Pars permutationis operatoris `s///` ad capturas ab exemplari factas spectare potest. Hoc tibi permittit textum congruentem reordinare potius quam eum simpliciter abicere.

Exempli gratia, verte diem ut `annus-mensis` scriptum in `mensis/annus` utrumque numerum capiens et eos ordine altero reponens:

```raku
my $d = '2025-06';
$d ~~ s/ (\d+) '-' (\d+) /$1\/$0/;
say $d; # 06/2025
```

Exemplar annum in `$0` et mensem in `$1` capit. In permutatione `$1` et `$0` ordine inverso scribuntur, lineola obliqua inter eos. (Lineola obliqua ut `\/` effugitur ne pro fine substitutionis habeatur.) Nota spatia in parte **exemplaris** insignificantia esse sed in parte **permutationis** litteralia, itaque permutatio sine spatiis circumstantibus scribitur.

Capturae nominatae eodem modo operantur. Hoc substitutionem clare legendam reddit etiam cum plures partes sunt:

```raku
my $name = 'Doe, Jane';
$name ~~ s/ $<last>=(\w+) ', ' $<first>=(\w+) /$<first> $<last>/;
say $name; # Jane Doe
```

{% include nav.html %}
