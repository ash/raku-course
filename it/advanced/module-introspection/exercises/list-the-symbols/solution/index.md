---
title: 'Solution: Elencare i simboli'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

Il programma, `list.raku`:

```raku
use Circle;

say Circle::.keys.elems;
say Circle::.keys.sort;
```

🦋 Puoi trovare entrambi i file sorgente nella directory [exercises/advanced/module-introspection/list-the-symbols](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/list-the-symbols).

## Output

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Commenti

1. `Circle::` è il package del modulo, e `.keys` elenca i nomi che contiene, ciascuno con il proprio sigillo.

1. `.elems` conta quei nomi — il modulo definisce due variabili `our`, quindi il conteggio è `2`.

1. `.keys` non garantisce un ordine particolare, quindi applichiamo `.sort` per ottenere un risultato stabile e alfabetico `($pi $tau)`. Senza ordinamento, i due nomi potrebbero apparire in qualsiasi ordine tra un'esecuzione e l'altra.

{% include nav.html %}
