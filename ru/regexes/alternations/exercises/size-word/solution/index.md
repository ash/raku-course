---
title: 'Решение: Слово размера'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say 'a large pizza' ~~ / small | medium | large /;
```

🦋 Исходный код можно найти в файле [size-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/size-word.raku).

## Вывод

```
｢large｣
```

## Комментарии

1. Альтернатива перечисляет три возможности; шаблон совпадает с той из них, которая есть
в строке.

1. Встречается только `large`, оно и оказывается совпадением.

{% include nav.html %}
