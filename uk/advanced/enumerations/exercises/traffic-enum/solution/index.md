---
title: 'Розв''язання: Світлофор'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
enum Light <red amber green>;

my Light $current = red;
say "$current is {$current.value}";

$current = amber;
say "$current is {$current.value}";

$current = green;
say "$current is {$current.value}";
```

🦋 Вихідний код можна знайти у файлі [traffic-enum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/traffic-enum.raku).

## Вивід

```
red is 0
amber is 1
green is 2
```

## Коментарі

1. `my Light $current` — це звичайна змінна, яку можна змінювати, лише обмежена типом `Light`. Присвоєння наступної константи переводить сигнал далі, і число щоразу йде за іменем: `0`, `1`, `2`.

1. Здається, ніби `$current++` мав би сам крокувати до наступного сигналу, але він зазнає невдачі з помилкою перевірки типу. `++` розглядає константу як звичайне число й повертає `Int` (`red` стає `1`), а `Int` уже не вміщується в тип `Light`. Тож сигнал перемикають присвоєнням наступної константи, як вище.

1. Обмеження типу стосується кожного присвоєння, а не лише першого. `$current` прийме `red`, `amber` або `green`, але присвоєння чогось, що не є `Light` — голого числа чи рядка, — стане помилкою перевірки типу.

{% include nav.html %}
