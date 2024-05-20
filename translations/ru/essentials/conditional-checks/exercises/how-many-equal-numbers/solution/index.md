---
title: Решения для ‘Сколько одинаковых чисел?’
---

{% include menu.html %}

Программа должна произвести несколько сравнений. Для трех чисел есть три
возможных варианта:

1. Все три числа равны;
2. Только два числа равны;
3. Все числа разные.

## Код

Вот решение с явными сравнениями.

```raku
my $n1 = prompt 'Enter number 1: ';
my $n2 = prompt 'Enter number 2: ';
my $n3 = prompt 'Enter number 3: ';

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

🦋 Вы можете найти исходный код в файле [how-many-equal-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/how-many-equal-numbers.raku).

## Вывод

```console
$ raku exercises/conditional-checks/how-many-equal-numbers.raku 0 0 0
Enter number 1: 14
Enter number 2: 8
Enter number 3: 8
2

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Enter number 1: 15
Enter number 2: 15
Enter number 3: 15
3

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Enter number 1: 4
Enter number 2: 6
Enter number 3: 8
0
```

## Комментарии

1. Интересно, что мы можем сравнить три числа в одном выражении: `$n1 == $n2 == $n3`.
2. Попробуйте вернуться к этому заданию еще раз, когда вы узнаете об операторе
   свёртки.

{% include nav.html %}

