---
title: 'Решение: Когато нищо не се обърква'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $r = try { 21 * 2 };

say $r.defined;
say $r;
```

🦋 Намерете програмата във файла [try-succeeds.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-succeeds.raku).

## Изход

```
True
42
```

## Коментари

1. Когато блокът `try` се изпълни без изключение, той просто се изчислява до стойността на блока.

1. Затова `$r` съдържа `42`, а `$r.defined` дава `True`.

{% include nav.html %}
