---
title: 'Решение: Сумма всех аргументов'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub total(*@nums) {
    [+] @nums
}

say total(3, 5, 7);
```

🦋 Исходный код можно найти в файле [sum-all-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/sum-all-arguments.raku).

## Вывод

```
15
```

## Комментарии

1. Поглощающий параметр `*@nums` собирает все аргументы в массив `@nums`, сколько бы их ни было.

1. Мета-оператор редукции `[+]` затем складывает их все вместе, давая `15`.

{% include nav.html %}
