---
title: 'Решение: Крачещ робот'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

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

🦋 Намерете програмата във файла [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/bank-account.raku).

## Изход

```
8
```

## Коментари

1. Атрибутът `position` е `is rw`, за да може методът да го променя, и по подразбиране е `0`, така че новосъздаден робот започва от началото.

1. Методът `move` дава на параметъра си стойност по подразбиране — `$steps = 1`. Затова голото извикване `$r.move` придвижва с една стъпка, докато `$r.move(5)` и `$r.move(2)` придвижват със зададената величина. Трите извиквания добавят `5 + 1 + 2`, така че крайната позиция е `8`.

{% include nav.html %}
