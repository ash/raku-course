---
title: Розв'язання вправи «Опишіть за типом»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
multi describe(Int $x) { "integer $x" }
multi describe(Str $x) { "string $x" }
multi describe(@x)     { "list of {@x.elems}" }

say describe(42);
say describe('hi');
say describe([1, 2, 3]);
```

🦋 Знайдіть програму у файлі [multi-describe.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/multi-describe.raku).

## Вивід

```
integer 42
string hi
list of 3
```

## Коментарі

1. Кожен `multi` дає одну версію `describe` з іншим типом параметра. Raku обирає
відповідного кандидата за типом аргументу.

1. Сигнатура `@x` зіставляється зі списком, тож масив диспетчеризується на
третього кандидата, який повідомляє його довжину.

{% include nav.html %}
