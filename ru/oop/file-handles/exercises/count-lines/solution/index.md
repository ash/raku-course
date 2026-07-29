---
title: 'Решение: Подсчёт строк'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
spurt 'data.txt', "a\nb\nc\nd\n";

say 'data.txt'.IO.lines.elems;
```

🦋 Исходный код можно найти в файле [count-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/count-lines.raku).

## Вывод

```
4
```

## Комментарии

1. `.IO.lines` возвращает строки файла в виде списка.

1. `.elems` их считает, давая `4`.

{% include nav.html %}
