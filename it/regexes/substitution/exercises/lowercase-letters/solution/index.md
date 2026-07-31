---
title: 'Soluzione: Lettere minuscole'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $s = 'RAKU';
$s ~~ tr/A..Z/a..z/;
say $s;
```

🦋 Trova il programma nel file [lowercase-letters.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/lowercase-letters.raku).

## Output

```
raku
```

## Commenti

1. `tr///` mappa ogni carattere del primo intervallo sul carattere nella stessa posizione del secondo.

1. Qui gli intervalli vanno dalle lettere maiuscole a quelle minuscole, quindi ogni maiuscola viene rimpiazzata dalla sua compagna minuscola — la direzione opposta rispetto al rendere maiuscolo.

{% include nav.html %}
