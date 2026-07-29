---
title: 'Розв''язання: Оператор відсотка від'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub infix:<percent-of>($p, $whole) {
    $whole * $p / 100
}

say 20 percent-of 150;
```

🦋 Вихідний код можна знайти у файлі [percent-of-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/percent-of-operator.raku).

## Вивід

```
30
```

## Коментарі

1. Оператор бере відсоток `$p` лівим операндом, а всю величину `$whole` — правим.

1. Множення `$whole` на `$p` і ділення на `100` дає потрібну частку: `150 * 20 / 100` дорівнює `30`.

{% include nav.html %}
