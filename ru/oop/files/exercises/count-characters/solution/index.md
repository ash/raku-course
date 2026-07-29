---
title: 'Решение: Подсчёт символов'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
spurt 'data.txt', 'Raku';

say slurp('data.txt').chars;
```

🦋 Исходный код можно найти в файле [count-characters.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/count-characters.raku).

## Вывод

```
4
```

## Комментарии

1. `spurt` записывает строку `Raku` в файл.

1. `slurp` читает её обратно как строку, а `.chars` считает символы — их четыре.

1. Если заглянуть в файл, там действительно будут только эти четыре символа; символ перевода
строки не добавляется.

{% include nav.html %}
