---
title: 'Risinājums: Akmens, šķēres, papīrs'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [rock-paper-scissors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/rock-paper-scissors.raku).

## Izvade

```
rock vs scissors: rock wins
paper vs rock: paper wins
paper vs paper: tie
```

## Komentāri

1. Jaucējtabula `%beats` iekodē likumus: katrs gājiens tiek attēlots uz gājienu, ko
tas uzvar. Tas tiesāšanu pārvērš vienā uzmeklēšanā garas nosacījumu ķēdes vietā.

1. Ja `%beats{$a}` ir pretinieka gājiens, tad uzvar `$a`; citādi (vienādi gājieni
jau ir apstrādāti) uzvar `$b`.

{% include nav.html %}
