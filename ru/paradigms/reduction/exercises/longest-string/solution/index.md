---
title: 'Решение: Самая длинная строка'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @animals = 'cat', 'elephant', 'dog', 'fox';

say @animals.reduce(-> $a, $b { $b.chars > $a.chars ?? $b !! $a });
```

🦋 Исходный код можно найти в файле [longest-string.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/longest-string.raku).

## Вывод

```
elephant
```

## Комментарии

1. Блок оставляет более длинный из двух своих аргументов: `$a` — самая длинная строка, увиденная
к этому моменту, `$b` — очередная, а тернарный оператор возвращает ту, в которой больше символов.

1. `reduce` переносит победителя дальше как `$a` следующего вызова, поэтому после прохода по всему
списку накопленное значение оказывается самой длинной строкой из всех — `elephant`.

{% include nav.html %}
