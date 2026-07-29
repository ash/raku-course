---
title: 'Решение: Камък, ножица, хартия'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my %beats = rock => 'scissors', scissors => 'paper', paper => 'rock';

sub winner($a, $b) {
    return 'tie' if $a eq $b;
    return %beats{$a} eq $b ?? "$a wins" !! "$b wins";
}

for <rock scissors>, <paper rock>, <paper paper> -> ($a, $b) {
    say "$a vs $b: { winner($a, $b) }";
}
```

🦋 Намерете програмата във файла [rock-paper-scissors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/rock-paper-scissors.raku).

## Изход

```
rock vs scissors: rock wins
paper vs rock: paper wins
paper vs paper: tie
```

## Коментари

1. Хешът `%beats` кодира правилата: всеки ход се съпоставя с хода, който побеждава. Това
превръща отсъждането в едно-единствено търсене вместо в дълга верига от условия.

1. Ако `%beats{$a}` е ходът на противника, печели `$a`; иначе (еднаквите ходове вече са
обработени) печели `$b`.

{% include nav.html %}
