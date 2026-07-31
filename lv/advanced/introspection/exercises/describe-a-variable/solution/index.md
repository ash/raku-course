---
title: 'Risinājums: Aprakstīt mainīgo'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams uzdevuma risinājums.

## Kods

```raku
my Str $lang = 'Raku';

say $lang.^name;
say $lang.VAR.^name;
say $lang.VAR.name;
```

🦋 Avota kodu var atrast failā [describe-a-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/describe-a-variable.raku).

## Izvade

```
Str
Scalar
$lang
```

## Komentāri

1. `.^name` atgriež konteinerā saglabātās vērtības tipu, kas ir `Str`.

1. `.VAR` atgriež pamatā esošo konteineru, un `.^name` uz tā atgriež `Scalar` — paša konteinera tipu.

1. `.VAR.name` atgriež mainīgā nosaukumu `$lang`, ieskaitot tā sigilu. Ņemiet vērā, ka šī ir metode `name`, nevis metametode `^name`, kas izmantota pirmajās divās rindās.

{% include nav.html %}
