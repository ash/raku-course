---
title: Розв'язання вправи «Застосуйте двічі»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
sub twice(&f, $x) {
    f(f($x));
}

say twice(* * 3, 2);
```

🦋 Знайдіть програму у файлі [apply-twice.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/apply-twice.raku).

## Вивід

```
18
```

## Коментарі

1. Параметр `&f` отримує підпрограму; внутрішній `f($x)` подається у зовнішній `f(...)`.

1. Потроєння `2` дає `6`, а потроєння ще раз дає `18`.

{% include nav.html %}
