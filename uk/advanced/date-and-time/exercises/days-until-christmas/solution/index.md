---
title: 'Розв''язання: Тижнів до Різдва'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $days = Date.new(2026, 12, 25) - Date.new(2026, 6, 27);
say "{$days div 7} weeks and {$days % 7} days";
```

🦋 Вихідний код можна знайти у файлі [days-until-christmas.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/days-until-christmas.raku).

## Вивід

```
25 weeks and 6 days
```

## Коментарі

1. Віднімання одного `Date` від іншого повертає кількість днів між ними — тут `181`, — тож вручну рахувати дні в кожному місяці не потрібно. Пізнішу дату записано першою, тож результат додатний.

1. Цілочислове ділення `div` дає цілу кількість тижнів (`181 div 7` це `25`), а оператор остачі `%` дає решту днів (`181 % 7` це `6`).

{% include nav.html %}
