---
title: 'Решение: Отбележете предупреждение'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $value = -3;

note 'Warning: the value is negative' if $value < 0;
say $value.abs;
```

🦋 Намерете програмата във файла [note-a-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/note-a-warning.raku).

## Изход

```
Warning: the value is negative
3
```

## Коментари

1. `note` изпраща предупреждението в стандартната грешка и то само когато стойността наистина е отрицателна. `say` изпраща истинския резултат — абсолютната стойност `3` — в стандартния изход.

1. Държането на диагностиката в стандартната грешка означава, че тя не замърсява истинския изход на програмата: отхвърлянето на стандартната грешка с `2>/dev/null` оставя само `3`.

{% include nav.html %}
