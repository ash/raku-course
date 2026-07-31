---
title: Kaptoj en la anstataŭaĵo
translations_gpt:
---

{% include menu.html %}

La anstataŭa parto de `s///` povas referenci la kaptojn faritajn de la ŝablono. Tio permesas al vi rearanĝi la kongruintan tekston anstataŭ nur forĵeti ĝin.

Ekzemple, transformu daton skribitan kiel `year-month` en `month/year`, kaptante ambaŭ nombrojn kaj remetante ilin en la alia ordo:

```raku
my $d = '2025-06';
$d ~~ s/ (\d+) '-' (\d+) /$1\/$0/;
say $d; # 06/2025
```

La ŝablono kaptas la jaron en `$0` kaj la monaton en `$1`. En la anstataŭaĵo, `$1` kaj `$0` estas skribitaj en la inversa ordo, kun oblikvo inter ili. (La oblikvo estas eskapita kiel `\/`, por ke ĝi ne estu konfuzita kun la fino de la anstataŭigo.) Notu, ke spacoj estas nesignifaj ĉe la **ŝablona** flanko sed laŭliteraj ĉe la **anstataŭa** flanko, do la anstataŭaĵo estas skribita sen spacoj ĉirkaŭ ĝi.

Nomitaj kaptoj funkcias same. Tio igas anstataŭigon legiĝi klare eĉ kiam estas pluraj pecoj:

```raku
my $name = 'Doe, Jane';
$name ~~ s/ $<last>=(\w+) ', ' $<first>=(\w+) /$<first> $<last>/;
say $name; # Jane Doe
```

{% include nav.html %}
