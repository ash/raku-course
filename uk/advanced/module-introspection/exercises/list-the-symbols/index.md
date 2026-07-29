---
title: Вправа «Перелічіть символи»
translations_gpt:
---

{% include menu.html %}

## Завдання

Вам дано модуль у файлі `Circle.rakumod`, який визначає дві змінні `our`:

```raku
unit module Circle;

our $pi = 3.14;
our $tau = 6.28;
```

Напишіть програму, яка використовує модуль і виводить спершу, скільки імен визначено в пакунку модуля, а потім самі імена в алфавітному порядку.

## Приклад

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Рішення

✅ [Дивіться рішення](solution)

{% include nav.html %}
