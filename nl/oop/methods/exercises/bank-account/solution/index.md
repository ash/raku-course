---
title: 'Oplossing: Een lopende robot'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/bank-account.raku).

## Uitvoer

```
8
```

## Opmerkingen

1. Het attribuut `position` is `is rw` zodat de methode het kan veranderen, en het is standaard `0` zodat een verse robot in de oorsprong begint.

1. De methode `move` geeft haar parameter een standaardwaarde, `$steps = 1`. De kale aanroep `$r.move` schuift dus één stap op, terwijl `$r.move(5)` en `$r.move(2)` met het gegeven aantal opschuiven. De drie aanroepen tellen `5 + 1 + 2` op, dus de eindpositie is `8`.

{% include nav.html %}
