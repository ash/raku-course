---
title: 'Решение: Сравнение значений'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
use Test;

is 'a'.uc, 'A', 'uppercase';

done-testing;
```

🦋 Исходный код можно найти в файле [compare-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/compare-values.raku).

## Вывод

```
ok 1 - uppercase
1..1
```

## Комментарии

1. `is` сравнивает фактическое значение `'a'.uc` с ожидаемым `'A'`.

1. Они совпадают, поэтому тест проходит; в случае неудачи `is` вывел бы оба значения.

{% include nav.html %}
