---
title: 'Решение: Мягкое обратное число'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub reciprocal($n) {
    fail 'no reciprocal of zero' if $n == 0;
    return 1 / $n;
}

say reciprocal(4);
say reciprocal(0) // 'undefined';
```

🦋 Исходный код можно найти в файле [soft-divide.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/soft-divide.raku).

## Вывод

```
0.25
undefined
```

## Комментарии

1. `reciprocal(4)` обычным образом возвращает `1 / 4`, то есть `0.25`.

1. `reciprocal(0)` вызывает `fail`, поэтому возвращает `Failure`, который не определён. Оператор
`//` возвращает свою правую часть всякий раз, когда левая не определена, — так мы и получаем
запасное `undefined`.

1. Использование `//` считается обработкой сбоя: оно проверяет определённость, не пользуясь
значением, поэтому `Failure` остаётся мягким и никогда не превращается в настоящее исключение.

{% include nav.html %}
