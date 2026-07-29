---
title: 'Решение: Прекарайте големите числа'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
(1..10) ==> grep(* > 5) ==> my @big;
say @big;
```

🦋 Намерете програмата във файла [feed-big-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-big-numbers.raku).

## Изход

```
[6 7 8 9 10]
```

## Коментари

1. Потокът изпраща `1..10` в `grep`, който запазва числата, по-големи от `5`.

1. Резултатът втича в `@big` — целта, която завършва потока.

{% include nav.html %}
