---
title: 'Solutio: Robotum ambulans'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/bank-account.raku).

## Exitus

```
8
```

## Commentarii

1. Attributum `position` `is rw` est ut methodus illud mutare possit, et ad `0` praedefinitum est ut robotum recens ab origine incipiat.

1. Methodus `move` parametro suo valorem praedefinitum dat, `$steps = 1`. Nuda vocatio `$r.move` ideo uno gradu promovet, dum `$r.move(5)` et `$r.move(2)` dato numero promovent. Tres vocationes `5 + 1 + 2` addunt, itaque positio finalis est `8`.

{% include nav.html %}
