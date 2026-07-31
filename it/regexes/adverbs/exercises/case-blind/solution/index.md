---
title: 'Soluzione: Corrispondenza a prescindere dalle maiuscole'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say 'Hello WORLD' ~~ /:i world/;
```

🦋 Trova il programma nel file [case-blind.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/case-blind.raku).

## Output

```
｢WORLD｣
```

## Commenti

1. L'avverbio `:i` fa ignorare alla corrispondenza la differenza fra lettere maiuscole e minuscole.

1. Lo schema minuscolo riconosce perciò il `WORLD` maiuscolo.

{% include nav.html %}
