---
title: 'Решение: Число в своих границах'
---

{% include menu.html %}

Программа использует интервал из чисел, введенных пользователем. Затем она
проверяет, если третье число входит в интервал с помощью умного
сопоставления. Результат умного сопоставления уже является булевым значением,
поэтому мы можем сразу его вывести.

## Код

Вот решение:

```raku
my $begin = prompt 'From (including): ';
my $end = prompt 'To (excluding): ';

my $n = prompt 'What is the number? ';

say $n ~~ $begin ..^ $end;
```

🦋 Вы можете найти исходный код в файле [number-in-limits.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/ranges/number-in-limits.raku).

## Вывод

Проверьте разные случаи, включая случаи, когда число совпадает с одной из границ
интервала:

```console
$ raku exercises/ranges/number-in-limits.raku
From (including): 1
To (excluding): 2
What is the number? 1.5
True

$ raku exercises/ranges/number-in-limits.raku
From (including): 100
To (excluding): 200
What is the number? 100
True

$ raku exercises/ranges/number-in-limits.raku
From (including): -5
To (excluding): -2
What is the number? -2
False
```

## Комментарий

Заметьте, как правая граница исключена из интервала:`$begin ..^ $end`.

{% assign human=1 %}
{% include nav.html %}
