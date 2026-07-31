---
title: 'Soluzione: Un map con hyper'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say <apple banana pear cherry>.hyper.map(*.uc).grep(*.chars > 4).join(' ');
```

🦋 Trova il programma nel file [hyper-map.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-map.raku).

## Output

```
APPLE BANANA CHERRY
```

## Commenti

1. `.hyper` esegue tutta la catena — il `map` che rende maiuscolo e il `grep` che filtra per lunghezza — fra i thread, in parallelo.

1. Poiché `.hyper` preserva l'ordine, le parole sopravvissute restano nella loro sequenza originale, quindi `.join(' ')` produce `APPLE BANANA CHERRY`. `pear`, con sole quattro lettere, viene scartata.

{% include nav.html %}
