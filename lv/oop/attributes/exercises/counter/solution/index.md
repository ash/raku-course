---
title: 'Risinājums: Skaitītājs'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Counter {
    has $.count is rw = 0;
}

my $c = Counter.new;
say $c.count;

$c.count++ for ^5;

say $c.count;
```

🦋 Atrodiet programmu failā [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/counter.raku).

## Izvade

```
0
5
```

## Komentāri

1. Atribūts ir deklarēts ar `is rw`, lai tā piekļuves metode atgrieztu rakstāmu konteineru, un `= 0` dod tam sākuma vērtību. Pirmais `say` apstiprina, ka svaigs skaitītājs patiešām sākas ar šo noklusējumu `0`.

1. Tā kā piekļuves metode ir rakstāma, tā palielināšana ar `++` darbojas, kā gaidīts.

{% include nav.html %}
