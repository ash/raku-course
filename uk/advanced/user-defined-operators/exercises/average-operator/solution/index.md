---
title: 'Розв''язання: Оператор середнього'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub infix:<avg>($a, $b) {
    ($a + $b) / 2
}

say 4 avg 10;
```

🦋 Вихідний код можна знайти у файлі [average-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/average-operator.raku).

## Вивід

```
7
```

## Коментарі

1. Оператор оголошено як `infix:<avg>`, тож його записують між двома операндами — так само, як `+` чи `~`.

1. Тіло додає два операнди й ділить на два. Для `4` та `10` результатом є `7`.

{% include nav.html %}
