---
title: 'Розв''язання: Сума чисел'
---

{% include menu.html %}

Ось рішення задачі.

## Код

```raku
my $a = prompt 'Enter number A: ';
my $b = prompt 'Enter number B: ';
my $c = prompt 'Enter number C: ';

my $sum = $a + $b + $c;

say "The sum of numbers is $sum.";
```

🦋 Повний код можна знайти у файлі [sum-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/sum-of-numbers.raku).

## Вивід

Запустіть програму кілька разів і переконайтеся, що вона працює з числами різного роду.

```console
$ raku exercises/numbers/sum-of-numbers.raku
Enter number A: 1.2
Enter number B: -3.4
Enter number C: 45
The sum of the numbers is 42.8.
```

## Коментарі

Зверніть увагу, що ми напряму використовуємо значення, яке повертає підпрограма `prompt`. Це може спричинити проблеми, якщо користувач введе рядок, що не є числом. Зробити програму кращою ми зможемо згодом, коли вивчимо винятки.

{% include nav.html %}
