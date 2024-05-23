---
title: Solutio ‘Pluralis terminatio’
---

{% include menu.html %}

Programma debet examinare si numerus insertus maior est quam unus et eum in formam pluralem ponere.

## Codex

```raku
my $n = prompt 'Quot fasciculos effingere? ';
my $ending = $n == 1 ?? '' !! 's';
say "$n file{$ending} efficti.";
```

🦋 Invenire programmatum in fasciculo [plural-ending.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/plural-ending.raku).

## Effectus

Programma bis saltem exsequi et experiri cum inputu `1` et cum alio numero positivo:

```console
$ raku exercises/conditional-checks/plural-ending.raku
Quot fasciculos effingere? 10
10 fasciculi efficti.

$ raku exercises/conditional-checks/plural-ending.raku
Quot fasciculos effingere? 1
1 fasciculus effictus.
```

## Commentarium

Forsitan, perperam inclinare potes ut unum `?` pro duplici `??` et/vel colon `:` pro `!!` scribas.

{% include nav.html %}