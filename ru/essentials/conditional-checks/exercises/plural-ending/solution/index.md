---
title: 'Решение: Окончание множественного числа'
---

{% include menu.html %}

Программа должна проверить, если введенное число больше одного, и если это
окажется так, то использовать множественную форму числа.

## Код

```raku
my $n = prompt 'How many files to copy? ';
my $ending = $n == 1 ?? '' !! 's';
say "$n file{$ending} copied.";
```

🦋 Вы можете найти исходный код в файле [plural-ending.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/plural-ending.raku).

## Вывод

Запустите программу как минимум дважды и проверьте ее с числом 1 и любым другим
положительным числом.

```console
$ raku exercises/conditional-checks/plural-ending.raku
How many files to copy? 10
10 files copied.

$ raku exercises/conditional-checks/plural-ending.raku
How many files to copy? 1
1 file copied.
```

## Комментарии

Возможно, вам приходится трудно, и вы каждый раз пишете единственный знак `?`
заместо двойного `??`, и/или двоеточие `:` заместо `!!`.

{% assign human=1 %}
{% include nav.html %}
