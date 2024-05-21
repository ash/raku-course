---
title: 'Вправа: Підвищення зарплати'
---

{% include menu.html %}

## Завдання

Дано хеш з даними працівника:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;
```

Збільшіть зарплату на 5&thinsp;% і виведіть її разом з ім'ям працівника. Переконайтеся, що хеш `%employee` зберігає правильні значення після підвищення.

## Приклад

Ось очікуваний результат програми:

```console
$ raku salary-raise.raku
New salary of Eliza Vents: 3150
```

## Рішення

✅ [Дивіться рішення](solution)

{% include nav.html %}