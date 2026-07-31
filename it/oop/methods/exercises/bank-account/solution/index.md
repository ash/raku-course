---
title: 'Soluzione: Un robot che cammina'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/bank-account.raku).

## Output

```
8
```

## Commenti

1. L'attributo `position` è `is rw` perché il metodo possa cambiarlo, e ha valore predefinito `0` così che un robot appena creato parta dall'origine.

1. Il metodo `move` dà al suo parametro un valore predefinito, `$steps = 1`. La chiamata nuda `$r.move` avanza quindi di un passo, mentre `$r.move(5)` e `$r.move(2)` avanzano della quantità indicata. Le tre chiamate sommano `5 + 1 + 2`, quindi la posizione finale è `8`.

{% include nav.html %}
