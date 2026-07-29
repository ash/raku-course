---
title: 'Решение: Филтрирайте поток от стойности'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out;
```

🦋 Намерете програмата във файла [filter-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/filter-a-supply.raku).

## Изход

```
[2 4 6]
```

## Коментари

1. `grep(* %% 2)` произвежда нов поток, който предава нататък само четните стойности — точно както `grep` филтрира списък.

1. Включването събира тези стойности в `@out`, което дава `[2 4 6]`.

{% include nav.html %}
