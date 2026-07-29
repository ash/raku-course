---
title: 'Розв''язання: Підвищення зарплати'
---

{% include menu.html %}

Програмі потрібно оновити одне зі значень заданого хеша. Присвоєння нового значення мало чим відрізняється від встановлення нового значення скалярної змінної.

## Код

Ось рішення:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;

my $raise = 5; # in percents

%employee<salary> *= (1 + $raise / 100);
say "New salary of %employee<full-name>: %employee<salary>";
```

🦋 Знайдіть програму у файлі [salary-raise.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/salary-raise.raku).

## Вивід

Запускаючи програму, переконайтеся, що обчислення правильні й кількість відсотків перетворено як слід.

```console
$ raku exercises/associatives/salary-raise.raku
New salary of Eliza Vents: 3150
```

{% include nav.html %}
