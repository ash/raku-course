---
title: 'Soluzione: Una somma con race'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say (1..50).race.map(* ** 2).grep(* %% 2).sum;
```

🦋 Trova il programma nel file [parallel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/parallel-sum.raku).

## Output

```
22100
```

## Commenti

1. `.race` esegue tutta la catena — elevare al quadrato ogni numero e filtrare i quadrati pari — in parallelo e, a differenza di `.hyper`, non promette di restituire gli elementi in ordine.

1. Qui va bene perché il passo finale è una somma, che è indipendente dall'ordine: i quadrati pari (`2²`, `4²`, …, `50²`) fanno `22100` a prescindere dall'ordine in cui arrivano. Quando ti limiti a combinare i risultati (somma, conteggio), `.race` è la scelta naturale e può portare un po' meno sovraccarico di `.hyper`.

{% include nav.html %}
