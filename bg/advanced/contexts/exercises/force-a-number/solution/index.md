---
title: 'Solution: Принудете до число'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @a = 1, 2, 3;
say +@a;
```

🦋 Можете да намерите изходния код във файла [force-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/force-a-number.raku).

## Резултат

```
3
```

## Коментари

1. Префиксът `+` налага числов контекст.

1. В числов контекст масивът се превръща в брой на елементите си, така че резултатът е `3`.

{% include nav.html %}
