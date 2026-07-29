---
title: 'Розв''язання: Внутрішня сума'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

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

🦋 Вихідний код можна знайти у файлі [inner-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/inner-sum.raku).

## Вивід

```
14
```

## Коментарі

1. Вкладений `add` використано двічі всередині `compute`: `add(2, 3)` дає `5`, а `add(4, 5)` дає `9`.

1. Їхня сума, `14`, і є значенням, яке повертає `compute`.

{% include nav.html %}
