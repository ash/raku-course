---
title: 'Solvo: Ŝtono, papero, tondilo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [rock-paper-scissors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/rock-paper-scissors.raku).

## Eligo

```
rock vs scissors: rock wins
paper vs rock: paper wins
paper vs paper: tie
```

## Komentoj

1. La haketmapo `%beats` kodigas la regulojn: ĉiu movo mapas al la movo, kiun ĝi
venkas. Tio transformas juĝadon en unu solan serĉon anstataŭ longan ĉenon da
kondiĉoj.

1. Se `%beats{$a}` estas la movo de la kontraŭulo, tiam `$a` venkas; alie (egalaj
movoj jam traktitaj) `$b` venkas.

{% include nav.html %}
