---
title: 'Решение: Выведите сумму'
---

{% include menu.html %}

Эта программа состоит из одной функции `MAIN`, которая принимает два типизированных аргумента, каждый из которых создается из аргументов командной строки.

## Код

Вот решение:

```raku
sub MAIN(Int $a, Int $b) {
    say $a + $b;
}
```

🦋 Найдите программу в файле [print-the-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/print-the-sum.raku).

## Вывод

Попробуйте разные входные числа:

```console
$ raku exercises/the-main-function/print-the-sum.raku 500 700
1200
```

Вы также можете попробовать запустить программу без аргументов или с аргументами разных типов и посмотреть, что произойдет. Мы обсудим обработку этих случаев во второй части курса.

{% include nav.html %}