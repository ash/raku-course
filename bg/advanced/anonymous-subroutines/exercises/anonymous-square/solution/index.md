---
title: 'Solution: Анонимен квадрат'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say (1, 2, 3).map(sub ($x) { $x * $x });
```

🦋 Можете да намерите изходния код във файла [anonymous-square.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/anonymous-square.raku).

## Изход

```
(1 4 9)
```

## Коментари

1. `sub ($x) { $x * $x }` няма име и никога не се съхранява в променлива — подава се директно на `map` като неин аргумент.

1. `map` я прилага към всеки елемент от `1, 2, 3`, повдигайки ги на квадрат в `(1 4 9)`. Подаването на анонимна подпрограма директно по този начин е най-честата причина да се напише такава.

{% include nav.html %}
