---
title: Викторина — Распознавание списков
---

{% include menu.html %}

Списки могут иногда сбивать с толку. Вам нужно тренироваться, чтобы различать списки и массивы.

## 1

Что выведет следующая программа?

```raku
my @data = [
    <France Italy Germany>,
    <Canada USA Mexica>,
    <Japan China India>,
];

say @data[0].WHAT;
```

{:.quiz-select}
(List) | Ответ: (: (Array), (List), (Str) :)

## 2

А что насчет этой программы?

```raku
my @data = [
    ['France', 'Italy', 'Germany'],
    ['Canada', 'USA', 'Mexica'],
    ['Japan', 'China', 'India'],
];

say @data[0].WHAT;
```

{:.quiz-select}
(Array) | Ответ: (: (Array), (List), (Str) :)


{% include quiz.html %}

{% include nav.html %}