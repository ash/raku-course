---
title: 'Solutio: Diem reforma'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $d = '2025-06-15';
$d ~~ s/ (\d+) '-' (\d+) '-' (\d+) /$2\/$1\/$0/;
say $d;
```

🦋 Inveni codicem fontem in archivo [reformat-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/reformat-date.raku).

## Exitus

```
15/06/2025
```

## Commentarii

1. Exemplar annum in `$0`, mensem in `$1`, et diem in `$2` capit.

1. Permutatio eos ordine novo `$2/$1/$0` scribit, lineolis obliquis ut `\/` effugatis. Pars permutationis nulla spatia circumstantia habet, quia spatia ibi litteraliter insererentur.

{% include nav.html %}
