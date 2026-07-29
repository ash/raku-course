---
title: 'Решение: Филтриране с блок'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say (1..10).grep(* > 5).elems;
```

🦋 Намерете програмата във файла [filter-block.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/filter-block.raku).

## Изход

```
5
```

## Коментари

1. `grep` приема блока `* > 5` и запазва числата, за които той е истина: `6, 7, 8, 9, 10`.

1. `.elems` ги преброява и дава `5`.

{% include nav.html %}
