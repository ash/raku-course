---
title: 'Solution: Скільки чисел рівні?'
---

{% include menu.html %}

Програма повинна зробити кілька порівнянь. Для трьох вхідних чисел є два можливі випадки:

1. Всі три числа рівні,
1. Тільки два числа рівні, і
1. Всі числа різні.

## Код

Ось рішення з явними порівняннями.

```raku
my $n1 = prompt 'Введіть число 1: ';
my $n2 = prompt 'Введіть число 2: ';
my $n3 = prompt 'Введіть число 3: ';

if $n1 == $n2 == $n3 {
    say 3;
}
elsif $n1 == $n2 || $n2 == $n3 || $n1 == $n3 {
    say 2;
}
else {
    say 0;
}
```

🦋 Знайдіть програму у файлі [how-many-equal-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/how-many-equal-numbers.raku).

## Вивід

```console
$ raku exercises/conditional-checks/how-many-equal-numbers.raku 0 0 0
Введіть число 1: 14
Введіть число 2: 8
Введіть число 3: 8
2

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Введіть число 1: 15
Введіть число 2: 15
Введіть число 3: 15
3

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Введіть число 1: 4
Введіть число 2: 6
Введіть число 3: 8
0
```

## Коментарі

1. Зверніть увагу, що ви можете порівняти три числа в одному виразі: `$n1 == $n2 == $n3`.
1. Поверніться до цього завдання та вирішіть його знову після вивчення оператора редукції.

{% include nav.html %}