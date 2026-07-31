---
title: 'Solution: Confronto concatenato'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
say 0 <= 73 <= 100;
```

🦋 Puoi trovare il codice sorgente nel file [chained-comparison.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/chained-comparison.raku).

## Output

```
True
```

## Commenti

1. Gli operatori di confronto possono essere concatenati, quindi `0 <= 73 <= 100` si legge come "0 è al massimo 73, e 73 è al massimo 100". L'operatore `<=` include gli estremi, quindi un punteggio esattamente di `0` o `100` sarebbe anch'esso considerato valido.

1. Entrambe le parti sono vere, quindi l'intera espressione è `True`. Nota che il valore centrale `73` viene scritto una sola volta, anche se viene confrontato con entrambi i vicini.

1. Senza la funzionalità di concatenazione, bisognerebbe scrivere entrambi i confronti e unirli con `&&`, ripetendo il valore centrale: `0 <= 73 && 73 <= 100`. La forma concatenata esprime lo stesso concetto in modo più conciso.

{% include nav.html %}
