---
title: 'Soluzione: Triplicare come subroutine'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub triple($x) {
    $x * 3;
}

say triple(7);
```

🦋 Trova il programma nel file [triple-sub.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-sub.raku).

## Output

```
21
```

## Commenti

1. Come subroutine, `triple` è un'operazione a sé stante: riceve come argomento il valore su cui lavorare.

1. L'esercizio gemello risolve lo stesso compito come metodo, così puoi confrontare i due approcci.

{% include nav.html %}
