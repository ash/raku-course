---
title: 'Решение: Последняя цифра'
---

{% include menu.html %}

Идея этого решения состоит в том, чтобы использовать остаток от деления на 10
для получения последней цифры числа.

## Код

```raku
my $n = prompt 'Enter a number: ';
my $d = $n % 10;
say "The last digit of $n is $d.";
```

🦋 Вы можете найти исходный код в файле [the-last-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/the-last-digit.raku).

## Вывод

Запустите программу и введите целое положительное число:

```console
$ raku exercises/numbers/the-last-digit.raku
Enter a number: 1234
The last digit of 1234 is 4.
```

## Комментарии

Примечательно, что это не работает для отрицательных чисел, например,
`-11 % 10` равно `9`, а не `1`.

{% assign human=1 %}
{% include nav.html %}
