---
title: 'Soluzione: Contate le corrispondenze'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say ('education' ~~ m:g/<[aeiou]>/).elems;
```

🦋 Trova il programma nel file [count-matches.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/count-matches.raku).

## Output

```
5
```

## Commenti

1. La classe di caratteri `<[aeiou]>` riconosce una vocale, e l'avverbio `:g` restituisce ogni corrispondenza simile invece della sola prima.

1. Il risultato si comporta come un elenco, quindi `.elems` conta le corrispondenze: le cinque vocali in `education` (e, u, a, i, o).

{% include nav.html %}
