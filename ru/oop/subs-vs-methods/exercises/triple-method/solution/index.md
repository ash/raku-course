---
title: 'Решение: Утроение как метод'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Number {
    has $.n;

    method triple {
        $.n * 3;
    }
}

say Number.new(n => 7).triple;
```

🦋 Исходный код можно найти в файле [triple-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-method.raku).

## Вывод

```
21
```

## Комментарии

1. Как метод, `triple` принадлежит объекту и работает с собственным `n` объекта — ничего
передавать не нужно.

1. По сравнению с вариантом-подпрограммой данные живут в объекте, а не приходят аргументом.
Оба варианта дают `21`.

{% include nav.html %}
