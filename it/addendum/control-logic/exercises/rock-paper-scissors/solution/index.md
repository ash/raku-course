---
title: 'Soluzione: Sasso, carta, forbici'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [rock-paper-scissors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/rock-paper-scissors.raku).

## Output

```
rock vs scissors: rock wins
paper vs rock: paper wins
paper vs paper: tie
```

## Commenti

1. L'hash `%beats` codifica le regole: ogni mossa viene mappata sulla mossa che batte.
Questo trasforma l'arbitraggio in un'unica ricerca invece che in una lunga catena di
condizioni.

1. Se `%beats{$a}` è la mossa dell'avversario, allora vince `$a`; altrimenti (le mosse
uguali sono già trattate) vince `$b`.

{% include nav.html %}
