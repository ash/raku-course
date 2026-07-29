---
title: 'Решение: Сумма с сигилом `&`'
translations_gpt: true
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my &add = -> $a, $b {
    $a + $b;
};

say add(2, 3);
```

🦋 Исходный код можно найти в файле [sum-with-sigil.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/sum-with-sigil.raku).

## Вывод

```
5
```

## Комментарии

1. Остроконечный блок перечисляет два параметра, `-> $a, $b`, поэтому анонимная подпрограмма принимает два аргумента.

1. Поскольку переменная объявлена с сигилом `&`, её можно вызывать как `add(2, 3)` — точно так же, как именованную подпрограмму, — без сигила в месте вызова, — что даёт `5`.

{% include nav.html %}
