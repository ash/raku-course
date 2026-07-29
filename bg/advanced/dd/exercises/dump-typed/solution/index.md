---
title: 'Solution: Изведете типизирана променлива'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my Int $n = 42;
dd $n;
```

🦋 Можете да намерите пълния код във файла [dump-typed.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-typed.raku).

## Резултат

```
Int $n = 42
```

## Коментари

1. Тъй като променливата има деклариран тип, `dd` отпечатва този тип преди името: `Int $n = 42`.

1. Нетипизирана променлива би била изведена просто като `$n = 42`, без типа.

{% include nav.html %}
