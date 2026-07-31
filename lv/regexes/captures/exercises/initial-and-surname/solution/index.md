---
title: 'Risinājums: Iniciālis un uzvārds'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
if 'J Smith' ~~ / $<initial>=(\w) ' ' $<surname>=(\w+) / {
    say ~$<surname>;
}
```

🦋 Atrodiet programmu failā [initial-and-surname.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/initial-and-surname.raku).

## Izvade

```
Smith
```

## Komentāri

1. `$<initial>=(\w)` satver vienu vārda rakstzīmi; `$<surname>=(\w+)` satver burtu virteni aiz atstarpes.

1. Uzvārdu pēc tam nolasa atpakaļ pēc nosaukuma kā `$<surname>`, un prefikss `~` to izdrukā kā vienkāršu virkni; bez tā `say $<surname>` rādītu sakritības objektu kā `｢Smith｣`.

{% include nav.html %}
