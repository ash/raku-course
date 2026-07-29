---
title: 'Решение: Булева стойност с proto'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
grammar Bool {
    token TOP { <bool> }

    proto token bool {*}
    token bool:sym<true>  { 'true' }
    token bool:sym<false> { 'false' }
}

say Bool.parse('true').defined;
say Bool.parse('false').defined;
say Bool.parse('unknown').defined;
```

🦋 Намерете програмата във файла [proto-bool.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-bool.raku).

## Изход

```
True
True
False
```

## Коментари

1. Прототокенът `bool` има два именувани варианта — `true` и `false`.

1. Всеки разбор избира съответстващия вариант, така че и `'true'`, и `'false'` успяват. Прототокенът е подреденият граматичен начин да се каже „една от тези именувани възможности“.

1. `'unknown'` не съвпада с нито един вариант, така че прототокенът няма към какво да диспечира и разборът се проваля — `False`. Прото приема точно онези възможности, които сте изброили, и нищо друго.

{% include nav.html %}
