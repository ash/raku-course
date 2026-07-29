---
title: 'Решение: Первые числа, кратные семи'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say (1..*).map(* * 7).head(5);
```

🦋 Исходный код можно найти в файле [first-multiples-of-seven.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/first-multiples-of-seven.raku).

## Вывод

```
(7 14 21 28 35)
```

## Комментарии

1. `1..*` — бесконечный диапазон; `.map(* * 7)` лениво умножает каждый его элемент на семь.

1. `.head(5)` вытягивает лишь первые пять, поэтому бесконечный источник никогда не вычисляется
целиком.

{% include nav.html %}
