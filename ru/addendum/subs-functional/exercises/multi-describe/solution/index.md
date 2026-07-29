---
title: 'Решение: Описание по типу'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
multi describe(Int $x) { "integer $x" }
multi describe(Str $x) { "string $x" }
multi describe(@x)     { "list of {@x.elems}" }

say describe(42);
say describe('hi');
say describe([1, 2, 3]);
```

🦋 Исходный код можно найти в файле [multi-describe.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/multi-describe.raku).

## Вывод

```
integer 42
string hi
list of 3
```

## Комментарии

1. Каждый `multi` задаёт свою версию `describe` с параметром другого типа. Raku выбирает подходящего
кандидата по типу аргумента.

1. Сигнатура `@x` соответствует списку, поэтому массив попадает в третьего кандидата, который
сообщает его длину.

{% include nav.html %}
