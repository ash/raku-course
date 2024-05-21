---
title: Quiz — Riconoscere le liste
---

{% include menu.html %}

Le liste possono essere a volte confuse. Devi allenarti a distinguere tra liste e array.

## 1

Cosa stampa il seguente programma?

```raku
my @data = [
    <France Italy Germany>,
    <Canada USA Mexica>,
    <Japan China India>,
];

say @data[0].WHAT;
```

{:.quiz-select}
(Lista) | Risposta: (: (Array), (Lista), (Str) :)

## 2

E per quanto riguarda questo programma?

```raku
my @data = [
    ['France', 'Italy', 'Germany'],
    ['Canada', 'USA', 'Mexica'],
    ['Japan', 'China', 'India'],
];

say @data[0].WHAT;
```

{:.quiz-select}
(Array) | Risposta: (: (Array), (Lista), (Str) :)


{% include quiz.html %}

{% include nav.html %}