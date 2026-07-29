---
title: 'Решение: Камень, ножницы, бумага'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [rock-paper-scissors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/rock-paper-scissors.raku).

## Вывод

```
rock vs scissors: rock wins
paper vs rock: paper wins
paper vs paper: tie
```

## Комментарии

1. Хеш `%beats` кодирует правила: каждому ходу сопоставлен ход, который он побеждает. Это
превращает судейство в один поиск по хешу вместо длинной цепочки условий.

1. Если `%beats{$a}` — это ход соперника, значит, побеждает `$a`; иначе (случай равных ходов уже
обработан) побеждает `$b`.

{% include nav.html %}
