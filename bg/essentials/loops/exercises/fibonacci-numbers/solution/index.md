---
title: 'Solution: Числа на Фибоначи'
---

{% include menu.html %}

Следният алгоритъм определя числата на Фибоначи.

1. _F<sub>0</sub>_ = 0, _F<sub>1</sub>_ = 1
2. _F<sub>n</sub>_ = _F<sub>n-1</sub>_ + _F<sub>n-2</sub>_

## Код

Кодът имплементира алгоритъма буквално. Той използва няколко променливи, за да съхранява текущите две числа на Фибоначи и ги обновява в цикъл. Забележете, че и двете променливи се обновяват [в едно присвояване](/bg/essentials/scalar-variables/assigning-a-value/#multiple-assignment).

```raku
my $a = 0;
my $b = 1;

say $a;
for ^19 {
    ($a, $b) = $b, $a + $b;
    say $a;
}
```

🦋 Намерете програмата във файла [fibonacci-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/fibonacci-numbers.raku).

## Изход

Ето изходът на програмата, която отпечатва първите 20 числа.

```console
$ raku exercises/loops/fibonacci-numbers.raku
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
```

## Повече по темата

Запомнете тази задача, тъй като ще се върнем към нея в бъдеще, за да получим друго интересно решение с _последователности_ в Raku.

{% include nav.html %}