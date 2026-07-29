---
title: Розв'язання вправи «Камінь, ножиці, папір»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [rock-paper-scissors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/rock-paper-scissors.raku).

## Вивід

```
rock vs scissors: rock wins
paper vs rock: paper wins
paper vs paper: tie
```

## Коментарі

1. Хеш `%beats` кодує правила: кожен хід відображається на той хід, який він
перемагає. Це перетворює судійство на єдиний пошук замість довгого ланцюжка
умов.

1. Якщо `%beats{$a}` є ходом суперника, то перемагає `$a`; інакше (однакові ходи
вже оброблено) перемагає `$b`.

{% include nav.html %}
