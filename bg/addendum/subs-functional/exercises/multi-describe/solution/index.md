---
title: 'Решение: Опишете по тип'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
multi describe(Int $x) { "integer $x" }
multi describe(Str $x) { "string $x" }
multi describe(@x)     { "list of {@x.elems}" }

say describe(42);
say describe('hi');
say describe([1, 2, 3]);
```

🦋 Намерете програмата във файла [multi-describe.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/multi-describe.raku).

## Изход

```
integer 42
string hi
list of 3
```

## Коментари

1. Всеки `multi` дава по една версия на `describe` с различен тип на параметъра. Raku
избира съвпадащия кандидат според типа на аргумента.

1. Сигнатурата `@x` съвпада със списък, така че масивът се диспечира към третия
кандидат, който съобщава дължината му.

{% include nav.html %}
