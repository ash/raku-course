---
title: Quiz — Recognising lists
---

{% include menu.html %}

Lists may be confusing sometimes. You have to train yourself to distinguish between lists and arrays.

## 1

What does the following program print?

```raku
my @data = [
    <France Italy Germany>,
    <Canada USA Mexica>,
    <Japan China India>,
];

say @data[0].WHAT;
```

{:.quiz-select}
(List) | Answer: (: (Array), (List), (Str) :)

## 2

And what about this program?

```raku
my @data = [
    ['France', 'Italy', 'Germany'],
    ['Canada', 'USA', 'Mexica'],
    ['Japan', 'China', 'India'],
];

say @data[0].WHAT;
```

{:.quiz-select}
(Array) | Answer: (: (Array), (List), (Str) :)


{% include quiz.html %}

{% include nav.html %}