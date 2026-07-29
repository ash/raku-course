---
title: 'Решение: Внутренняя сумма'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub compute {
    sub add($x, $y) {
        $x + $y;
    }

    add(2, 3) + add(4, 5);
}

say compute;
```

🦋 Исходный код можно найти в файле [inner-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/inner-sum.raku).

## Вывод

```
14
```

## Комментарии

1. Вложенная `add` используется дважды внутри `compute`: `add(2, 3)` равно `5`, а `add(4, 5)` равно `9`.

1. Их сумма, `14`, — это значение, возвращаемое `compute`.

{% include nav.html %}
