---
title: 'Risinājums: Domēna daļa'
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $email = 'user@example.com';

my $at = $email.index('@');
say $email.substr($at + 1);
```

🦋 Programmas pirmkodu var atrast failā [find-domain.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/find-domain.raku).

## Izvade

```
example.com
```

## Komentāri

1. `index('@')` atgriež `4` — `@` zīmes pozīciju, skaitot no nulles.

1. `substr($at + 1)` sākas vienu rakstzīmi aiz `@` un, nenoradot garumu, turpinās līdz virknes beigām, iegūstot `example.com`.

{% include nav.html %}
