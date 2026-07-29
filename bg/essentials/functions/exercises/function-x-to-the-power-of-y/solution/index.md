---
title: 'Solution: Функция за изчисляване на _xʸ_'
---

{% include menu.html %}

В тази програма използвайте оператора `**`, за да изчислите степента.

## Код

Ето решението:

```raku
sub f($x, $y) { $x ** $y }

say f(5, 3);
say f(2, 10);
say f(-4, 5);
```

🦋 Намерете програмата във файла [function-x-to-the-power-of-y.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/function-x-to-the-power-of-y.raku).

## Изход

Стартирайте програмата, за да потвърдите, че отпечатва правилни отговори:

```console
$ raku exercises/functions/function-x-to-the-power-of-y.raku
125
1024
-1024
```

## Коментар

Тази функция работи и с отрицателни степени, например:

```raku
say f(5, -1);  # 0.2
say f(10, -2); # 0.01
```

{% include nav.html %}