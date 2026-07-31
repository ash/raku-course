---
title: 'Risinājums: Trīskāršot'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $factor = 3;
my $scale = -> $x { $x * $factor };

say $scale(7);
```

🦋 Atrodiet programmu failā [triple-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/triple-it.raku).

## Izvade

```
21
```

## Komentāri

1. Bultiņas bloks izmanto `$factor` — mainīgo no apkārtējā redzamības apgabala —, lai gan tam trūkst tikai parametra `$x`. Tieši šādu mainīgo satveršana padara to par slēgumu.

1. Ar `$factor`, kas vienāds ar `3`, izsaukums `$scale(7)` dod `21`. Nomainiet `$factor`, un tas pats bloks mērogotu ar jauno vērtību:

```raku
$factor = 5;
say $scale(7); # 35
```

Tā kā slēgums satver *mainīgo*, nevis tā vērtību uzrakstīšanas brīdī, vēlākais izsaukums redz atjaunināto `$factor` un atgriež `35`.

{% include nav.html %}
