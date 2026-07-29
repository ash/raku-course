---
title: Розв'язання вправи «Перші кратні семи»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
say (1..*).map(* * 7).head(5);
```

🦋 Знайдіть програму у файлі [first-multiples-of-seven.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/first-multiples-of-seven.raku).

## Вивід

```
(7 14 21 28 35)
```

## Коментарі

1. `1..*` — це нескінченний діапазон; `.map(* * 7)` ліниво множить кожен елемент на сім.

1. `.head(5)` витягає лише п'ять перших, тож нескінченне джерело ніколи не обчислюється повністю.

{% include nav.html %}
