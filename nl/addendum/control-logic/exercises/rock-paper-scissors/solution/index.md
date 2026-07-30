---
title: 'Oplossing: Steen, papier, schaar'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [rock-paper-scissors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/rock-paper-scissors.raku).

## Uitvoer

```
rock vs scissors: rock wins
paper vs rock: paper wins
paper vs paper: tie
```

## Opmerkingen

1. De hash `%beats` legt de regels vast: elke zet verwijst naar de zet die hij verslaat. Dat
maakt van het beoordelen één enkele opzoeking in plaats van een lange keten voorwaarden.

1. Als `%beats{$a}` de zet van de tegenstander is, dan wint `$a`; anders (gelijke zetten
zijn al afgehandeld) wint `$b`.

{% include nav.html %}
