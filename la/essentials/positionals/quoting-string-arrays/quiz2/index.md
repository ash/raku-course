---
title: Quiz — Recognising lists
---

{% include menu.html %}

Indices interdum confundere possunt. Te ipsum exercere debes ut indices et arrays distinguas.

## 1

Quid sequens programma imprimit?

```raku
my @data = [
    <France Italy Germany>,
    <Canada USA Mexica>,
    <Japan China India>,
];

say @data[0].WHAT;
```

{:.quiz-select}
(List) | Responsum: (: (Array), (List), (Str) :)

## 2

Et quid de hoc programmate?

```raku
my @data = [
    ['France', 'Italy', 'Germany'],
    ['Canada', 'USA', 'Mexica'],
    ['Japan', 'China', 'India'],
];

say @data[0].WHAT;
```

{:.quiz-select}
(Array) | Responsum: (: (Array), (List), (Str) :)


{% include quiz.html %}

{% include nav.html %}