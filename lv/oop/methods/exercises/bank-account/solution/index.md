---
title: 'Risinājums: Ejošs robots'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Robot {
    has $.position is rw = 0;

    method move($steps = 1) {
        $.position += $steps;
    }
}

my $r = Robot.new;
$r.move(5);
$r.move;
$r.move(2);

say $r.position;
```

🦋 Atrodiet programmu failā [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/bank-account.raku).

## Izvade

```
8
```

## Komentāri

1. Atribūts `position` ir `is rw`, lai metode to varētu mainīt, un pēc noklusējuma ir `0`, lai svaigs robots sāktu koordinātu sākumpunktā.

1. Metode `move` savam parametram dod noklusēto vērtību `$steps = 1`. Tāpēc kails izsaukums `$r.move` pavirza par vienu soli, bet `$r.move(5)` un `$r.move(2)` — par doto daudzumu. Trīs izsaukumi saskaita `5 + 1 + 2`, tāpēc galīgā pozīcija ir `8`.

{% include nav.html %}
