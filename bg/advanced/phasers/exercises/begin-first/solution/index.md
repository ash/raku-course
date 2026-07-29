---
title: 'Solution: Начало първо'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $compiled = BEGIN { 2 + 3 };

say $compiled;
```

🦋 Можете да намерите изходния код във файла [begin-first.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/begin-first.raku).

## Изход

```
5
```

## Коментари

1. `BEGIN { 2 + 3 }` се изпълнява по време на компилация и дава `5`. Използван като израз, блокът `BEGIN` връща стойността си, която се присвоява на `$compiled`.

1. Изчислението се случва само веднъж, по време на компилация; по време на изпълнение `$compiled` просто съдържа константата `5`. Така `BEGIN` се използва за предварително изчисляване на стойности, а не само за ранно отпечатване.

{% include nav.html %}
