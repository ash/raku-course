---
title: Quiz — Разпознаване на списъци
---

{% include menu.html %}

Списъците понякога могат да бъдат объркващи. Трябва да се тренирате да различавате списъци от масиви.

## 1

Какво отпечатва следната програма?

```raku
my @data = [
    <France Italy Germany>,
    <Canada USA Mexica>,
    <Japan China India>,
];

say @data[0].WHAT;
```

{:.quiz-select}
(List) | Отговор: (: (Array), (List), (Str) :)

## 2

А какво ще отпечата тази програма?

```raku
my @data = [
    ['France', 'Italy', 'Germany'],
    ['Canada', 'USA', 'Mexica'],
    ['Japan', 'China', 'India'],
];

say @data[0].WHAT;
```

{:.quiz-select}
(Array) | Отговор: (: (Array), (List), (Str) :)


{% include quiz.html %}

{% include nav.html %}