---
title: Quiz — Herken lijsten
---

{% include menu.html %}

Lijsten kunnen soms verwarrend zijn. Je moet jezelf trainen om onderscheid te maken tussen lijsten en arrays.

## 1

Wat print het volgende programma?

```raku
my @data = [
    <France Italy Germany>,
    <Canada USA Mexica>,
    <Japan China India>,
];

say @data[0].WHAT;
```

{:.quiz-select}
(List) | Antwoord: (: (Array), (List), (Str) :)

## 2

En wat doet dit programma?

```raku
my @data = [
    ['France', 'Italy', 'Germany'],
    ['Canada', 'USA', 'Mexica'],
    ['Japan', 'China', 'India'],
];

say @data[0].WHAT;
```

{:.quiz-select}
(Array) | Antwoord: (: (Array), (List), (Str) :)


{% include quiz.html %}

{% include nav.html %}