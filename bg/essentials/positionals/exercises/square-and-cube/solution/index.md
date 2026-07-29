---
title: 'Solution: Квадрат и куб'
---

{% include menu.html %}

## Код 1

Едно просто решение е да се използва операторът `**`.

```raku
my $n = @*ARGS[0];
say $n ** 2;
say $n ** 3;
```

🦋 Намерете програмата във файла [square-and-cube.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/square-and-cube.raku).

## Код 2

Малко по-стилно решение е да се използват Unicode надписи.

```raku
my $n = @*ARGS[0];
say $n²;
say $n³;
```

🦋 Намерете програмата във файла [square-and-cube-2.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/square-and-cube-2.raku).

## Изход

Стартирайте програмата няколко пъти и я тествайте с различни числа.

```console
$ raku exercises/positionals/square-and-cube.raku 5
25
125
```

{% include nav.html %}