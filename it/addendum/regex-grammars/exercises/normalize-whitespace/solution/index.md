---
title: 'Soluzione: Normalizzate gli spazi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $messy = '  too    many     spaces   ';

say $messy.trim.subst(/\s+/, ' ', :g);
```

🦋 Trova il programma nel file [normalize-whitespace.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/normalize-whitespace.raku).

## Output

```
too many spaces
```

## Commenti

1. `.trim` toglie gli spazi iniziali e finali; la sostituzione rimpiazza poi ogni sequenza
di spazio bianco `\s+` con un solo spazio.

1. L'avverbio `:g` rende globale la sostituzione, quindi *tutti* gli spazi vengono
compressi, non solo il primo.

{% include nav.html %}
