---
title: 'Risinājums: Pieslēdzieties sarakstam'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
Supply.from-list('red', 'green', 'blue').tap(-> $v { say $v });
```

🦋 Atrodiet programmu failā [tap-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/tap-a-list.raku).

## Izvade

```
red
green
blue
```

## Komentāri

1. `Supply.from-list` izstaro visas trīs virknes pēc kārtas.

1. Pieslēgums izpildās katrai no tām, to izdrukājot.

{% include nav.html %}
