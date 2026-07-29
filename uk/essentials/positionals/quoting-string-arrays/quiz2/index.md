---
title: Тест 2 — Розпізнавання списків
---

{% include menu.html %}

Списки інколи збивають з пантелику. Варто натренуватися відрізняти списки від масивів.

## 1

Що виведе наведена програма?

```raku
my @data = [
    <France Italy Germany>,
    <Canada USA Mexica>,
    <Japan China India>,
];

say @data[0].WHAT;
```

{:.quiz-select}
(List) | Відповідь: (: (Array), (List), (Str) :)

## 2

А що виведе ця програма?

```raku
my @data = [
    ['France', 'Italy', 'Germany'],
    ['Canada', 'USA', 'Mexica'],
    ['Japan', 'China', 'India'],
];

say @data[0].WHAT;
```

{:.quiz-select}
(Array) | Відповідь: (: (Array), (List), (Str) :)


{% include quiz.html %}

{% include nav.html %}
