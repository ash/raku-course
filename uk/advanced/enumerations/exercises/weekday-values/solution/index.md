---
title: 'Розв''язання: Номери днів тижня'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Day(5);
say Day(1);
```

🦋 Вихідний код можна знайти у файлі [weekday-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/weekday-values.raku).

## Вивід

```
Fri
Mon
```

## Коментарі

1. Запис констант парами дозволяє обрати числа — тут починаючи з `1`.

1. Виклик типу перелічення як `Day(5)` виконує зворотний пошук: він знаходить константу, значення якої дорівнює `5`, тобто `Fri`. Так само `Day(1)` дає `Mon`. Це обернене до `Fri.value`, який ішов би від імені до числа.

{% include nav.html %}
