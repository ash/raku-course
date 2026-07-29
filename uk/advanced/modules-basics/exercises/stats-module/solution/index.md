---
title: 'Розв''язання: Скористайтеся модулем статистики'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

Програма `stats.raku`:

```raku
use Stats;

my @scores = 10, 20, 30, 40;

say "total: { total(@scores) }";
say "mean: { mean(@scores) }";
```

🦋 Обидва файли з вихідним кодом можна знайти в каталозі [exercises/advanced/modules-basics/stats-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/stats-module).

## Вивід

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Коментарі

1. Один-єдиний `use Stats` приносить *обидві* експортовані підпрограми одразу: `use` імпортує все, що модуль позначає `is export`, а не лише одне ім'я.

1. `mean` викликає `total` усередині модуля. Програма там ніколи не викликає `total` від свого імені, а проте все працює: підпрограми модуля можуть спиратися одна на одну, а викликач бачить лише експортовані імена.

1. Оскільки чотири числа дають у сумі `100`, середнє становить `100 / 4`, тобто `25`.

{% include nav.html %}
