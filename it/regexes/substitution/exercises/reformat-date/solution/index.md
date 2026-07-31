---
title: 'Soluzione: Riformattate una data'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $d = '2025-06-15';
$d ~~ s/ (\d+) '-' (\d+) '-' (\d+) /$2\/$1\/$0/;
say $d;
```

🦋 Trova il programma nel file [reformat-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/reformat-date.raku).

## Output

```
15/06/2025
```

## Commenti

1. Lo schema cattura l'anno in `$0`, il mese in `$1` e il giorno in `$2`.

1. Il rimpiazzo li scrive nel nuovo ordine `$2/$1/$0`, con le barre protette come `\/`. Il lato del rimpiazzo non ha spazi attorno, perché lì gli spazi verrebbero inseriti alla lettera.

{% include nav.html %}
