---
title: 'Решение: Брояч'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub make-counter($step) {
    my $n = 0;
    return sub { $n += $step };
}

my &count = make-counter(10);
say count();
say count();
say count();
```

🦋 Намерете програмата във файла [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/counter.raku).

## Изход

```
10
20
30
```

## Коментари

1. Затварянето улавя две неща от `make-counter`: параметъра `$step` и частната променлива `$n`. И двете остават живи, след като `make-counter` се върне.

1. Всяко извикване добавя `$step` към `$n` и връща новата сума. Брояч, изграден с друга стъпка, би се придвижвал вместо това с нея.

{% include nav.html %}
