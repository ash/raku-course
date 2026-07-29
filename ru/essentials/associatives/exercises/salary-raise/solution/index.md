---
title: 'Решение: Повышение зарплаты'
---

{% include menu.html %}

Программа должна обновить одно из значений данного хэша. Присвоение нового значения не сильно отличается от установки нового значения скалярной переменной.

## Код

Вот решение:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;

my $raise = 5; # в процентах

%employee<salary> *= (1 + $raise / 100);
say "Новая зарплата %employee<full-name>: %employee<salary>";
```

🦋 Найдите программу в файле [salary-raise.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/salary-raise.raku).

## Вывод

При запуске программы убедитесь, что вы правильно произвели расчеты и корректно преобразовали количество процентов.

```console
$ raku exercises/associatives/salary-raise.raku
Новая зарплата Eliza Vents: 3150
```

{% include nav.html %}