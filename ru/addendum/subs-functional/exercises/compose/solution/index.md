---
title: 'Решение: Композиция двух функций'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub compose(&f, &g) {
    return -> $x { f(g($x)) };
}

my $combined = compose(* * 2, * + 1);

say $combined(5);
```

🦋 Исходный код можно найти в файле [compose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/compose.raku).

## Вывод

```
12
```

## Комментарии

1. Параметры `&f` и `&g` принимают любые вызываемые объекты — здесь это функции с Whatever
`* * 2` и `* + 1`.

1. `compose` возвращает новую анонимную функцию `-> $x { f(g($x)) }`. Её вызов на `5` сперва
выполняет `g` (`5 + 1`), затем `f` (`6 * 2`), давая `12`.

{% include nav.html %}
