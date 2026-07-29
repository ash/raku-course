---
title: 'Solution: Колко числа са равни?'
---

{% include menu.html %}

Програмата трябва да направи няколко сравнения. За три входни числа има две възможни случая:

1. И трите числа са равни,
1. Само две числа са равни, и
1. Всички числа са различни.

## Код

Ето решението с явни сравнения.

```raku
my $n1 = prompt 'Въведете число 1: ';
my $n2 = prompt 'Въведете число 2: ';
my $n3 = prompt 'Въведете число 3: ';

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

🦋 Намерете програмата във файла [how-many-equal-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/how-many-equal-numbers.raku).

## Изход

```console
$ raku exercises/conditional-checks/how-many-equal-numbers.raku 0 0 0
Въведете число 1: 14
Въведете число 2: 8
Въведете число 3: 8
2

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Въведете число 1: 15
Въведете число 2: 15
Въведете число 3: 15
3

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Въведете число 1: 4
Въведете число 2: 6
Въведете число 3: 8
0
```

## Коментари

1. Обърнете внимание, че можете да сравните три числа в едно изразяване: `$n1 == $n2 == $n3`.
1. Върнете се към тази задача и я решете отново след като научите за оператора за редукция.

{% include nav.html %}