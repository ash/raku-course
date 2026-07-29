---
title: 'Решение: Сумма чисел'
---

{% include menu.html %}

Ниже решение к этой проблеме.

## Код

```raku
my $a = prompt 'Enter number A: ';
my $b = prompt 'Enter number B: ';
my $c = prompt 'Enter number C: ';

my $sum = $a + $b + $c;

say "The sum of numbers is $sum.";
```

🦋 Вы можете найти исходный код в файле [sum-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/sum-of-numbers.raku).

## Вывод

Запустите программу несколько раз, чтобы убедиться, что она работает для разных
чисел.

```console
$ raku exercises/numbers/sum-of-numbers.raku
Enter number A: 1.2
Enter number B: -3.4
Enter number C: 45
The sum of the numbers is 42.8.
```

## Комментарии

Примечательно, что мы напрямую используем значение, которое вернула подпрограмма
`prompt`. Это может вызвать проблемы, если пользователь введет строку, которая
не является числом. Мы можем улучшить программу в будущем, когда узнаем об
исключениях.

{% assign human=1 %}
{% include nav.html %}
