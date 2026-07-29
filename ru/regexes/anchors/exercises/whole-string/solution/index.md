---
title: 'Решение: Вся строка'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say so 'hello' ~~ /^ <[a..z]>+ $/;
```

🦋 Исходный код можно найти в файле [whole-string.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-string.raku).

## Вывод

```
True
```

## Комментарии

1. Якоря `^` и `$` прикрепляют шаблон к началу и концу строки.

1. Между ними `<[a..z]>+` должен покрыть каждый символ, поэтому строка с заглавной буквой или
пробелом, например `Hello there`, не подойдёт.

{% include nav.html %}
