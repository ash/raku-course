---
title: 'Решение: Първите кратни на седем'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say (1..*).map(* * 7).head(5);
```

🦋 Намерете програмата във файла [first-multiples-of-seven.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/first-multiples-of-seven.raku).

## Изход

```
(7 14 21 28 35)
```

## Коментари

1. `1..*` е безкраен диапазон; `.map(* * 7)` умножава мързеливо всеки елемент по седем.

1. `.head(5)` изтегля само първите пет, така че безкрайният източник никога не се изчислява докрай.

{% include nav.html %}
