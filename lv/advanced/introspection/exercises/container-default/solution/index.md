---
title: 'Risinājums: Konteinera noklusējuma vērtība'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams uzdevuma risinājums.

## Kods

```raku
my $count is default(0);

say $count;
say $count.VAR.default;
```

🦋 Avota kodu var atrast failā [container-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/container-default.raku).

## Izvade

```
0
0
```

## Komentāri

1. Iezīme `is default(0)` piešķir konteineram noklusējuma vērtību. Tā kā nekas nav piešķirts, `$count` nolasīšana atgriež šo noklusējuma vērtību, tāpēc pirmā rinda izdrukā `0`.

1. `.VAR.default` jautā pašam konteineram par tā deklarēto noklusējuma vērtību, kas arī ir `0`. Bez šīs iezīmes netipizēta konteinera noklusējuma vērtība būtu `(Any)`.

{% include nav.html %}
