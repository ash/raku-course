---
title: 'Solutio: Saxum, charta, forfices'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [rock-paper-scissors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/rock-paper-scissors.raku).

## Exitus

```
rock vs scissors: rock wins
paper vs rock: paper wins
paper vs paper: tie
```

## Commentarii

1. Tabula `%beats` regulas codificat: unusquisque motus ad motum quem vincit mappat. Hoc
iudicium in unam inquisitionem vertit pro longa catena condicionum.

1. Si `%beats{$a}` motus adversarii est, tunc `$a` vincit; alioquin (motibus aequalibus
iam tractatis) `$b` vincit.

{% include nav.html %}
