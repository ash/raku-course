---
title: 'Risinājums: Saskaitiet izdotās vērtības'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $count = 0;
Supply.from-list(<a b c d e>).tap(-> $v { $count++ });
say $count;
```

🦋 Atrodiet programmu failā [count-emissions.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/count-emissions.raku).

## Izvade

```
5
```

## Komentāri

1. Pieslēgums izpildās vienreiz par katru izstaroto vērtību neatkarīgi no tā, kādas šīs vērtības ir.

1. Katru reizi palielinot `$count`, iegūst kopējo vērtību skaitu `5`.

{% include nav.html %}
