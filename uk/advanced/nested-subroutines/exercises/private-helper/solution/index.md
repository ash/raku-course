---
title: 'Розв''язання: Приватний помічник'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub stats {
    sub double($x) { $x * 2 }

    say double(3) + double(5);
}

stats;
```

🦋 Вихідний код можна знайти у файлі [private-helper.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/private-helper.raku).

## Вивід

```
16
```

## Коментарі

1. Помічника `double` визначено всередині `stats`, тож він видимий лише там і його не можна викликати звідкись іще в програмі.

1. `stats` користується ним двічі: `double(3)` дає `6`, а `double(5)` дає `10`, і їхня сума становить `16`.

{% include nav.html %}
