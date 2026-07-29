---
title: 'Решение: Сначала фамилия'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
if 'Grace Hopper' ~~ / (\w+) ' ' (\w+) / {
    say "$1, $0";
}
```

🦋 Исходный код можно найти в файле [swap-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/swap-words.raku).

## Вывод

```
Hopper, Grace
```

## Комментарии

1. Имя и фамилия захватываются в `$0` и `$1`.

1. Внутри строки с двойными кавычками каждый захват интерполируется как совпавший текст. Печать
`"$1, $0"` ставит фамилию первой, за ней буквальные запятую и пробел, а затем имя.

{% include nav.html %}
