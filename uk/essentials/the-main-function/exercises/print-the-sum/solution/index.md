---
title: 'Solution: Надрукувати суму'
---

{% include menu.html %}

Ця програма складається з єдиної функції `MAIN`, яка приймає два типізовані аргументи, обидва з яких формуються з аргументів командного рядка.

## Код

Ось рішення:

```raku
sub MAIN(Int $a, Int $b) {
    say $a + $b;
}
```

🦋 Знайдіть програму у файлі [print-the-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/print-the-sum.raku).

## Вивід

Спробуйте різні вхідні числа:

```console
$ raku exercises/the-main-function/print-the-sum.raku 500 700
1200
```

Ви також можете спробувати запустити програму без аргументів або з аргументами різних типів і подивитися, що станеться. Ми поговоримо про обробку цих випадків у другій частині курсу.

{% include nav.html %}