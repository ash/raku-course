---
title: 'Solution: Un map con due punti'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

```raku
say (1..10).map(* * 2).grep: * > 10;
```

🦋 Puoi trovare il codice sorgente nel file [colon-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-map.raku).

## Output

```
(12 14 16 18 20)
```

## Commenti

1. Solo `grep`, l'ultima chiamata nella catena, può usare la forma con i due punti. I due punti rendono `* > 10` il suo argomento, esattamente come farebbe `grep(* > 10)`. Poiché abbiamo ancora bisogno di stampare i risultati, `say` viene ora usato come funzione, non come metodo.

1. La chiamata a `map` deve mantenere le sue parentesi. Se scrivessi `.map: * * 2`, i due punti ingloberebbero `.grep(* > 10)` come parte degli argomenti di `map`, e la catena si spezzerebbe.

{% include nav.html %}
