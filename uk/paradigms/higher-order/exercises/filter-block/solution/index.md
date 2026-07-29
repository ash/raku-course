---
title: Розв'язання вправи «Фільтрація блоком»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
say (1..10).grep(* > 5).elems;
```

🦋 Знайдіть програму у файлі [filter-block.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/filter-block.raku).

## Вивід

```
5
```

## Коментарі

1. `grep` приймає блок `* > 5` і залишає числа, для яких він істинний: `6, 7, 8, 9, 10`.

1. `.elems` рахує їх, даючи `5`.

{% include nav.html %}
