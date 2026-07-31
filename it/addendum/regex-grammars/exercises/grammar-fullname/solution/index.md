---
title: 'Soluzione: Una grammatica per i nomi completi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
grammar FullName {
    token TOP   { <first> \s+ <last> }
    token first { \w+ }
    token last  { \w+ }
}

my $match = FullName.parse('Grace Hopper');

say ~$match<first>;
say ~$match<last>;
```

🦋 Trova il programma nel file [grammar-fullname.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-fullname.raku).

## Output

```
Grace
Hopper
```

## Commenti

1. Il token `TOP` è il punto in cui l'analisi comincia; si riferisce agli altri token per
nome con `<first>` e `<last>`, che diventano chiavi sulla corrispondenza.

1. `$match<first>` è un oggetto match; il prefisso `~` lo trasforma nel semplice testo
corrispondente.

{% include nav.html %}
