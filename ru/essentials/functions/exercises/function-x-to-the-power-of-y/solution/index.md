---
title: 'Решение: Функция для вычисления _xʸ_'
---

{% include menu.html %}

В этой программе используется оператор `**` для вычисления степени.

## Код

Вот решение:

```raku
sub f($x, $y) { $x ** $y }

say f(5, 3);
say f(2, 10);
say f(-4, 5);
```

🦋 Найдите программу в файле [function-x-to-the-power-of-y.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/function-x-to-the-power-of-y.raku).

## Вывод

Запустите программу, чтобы убедиться, что она выводит правильные ответы:

```console
$ raku exercises/functions/function-x-to-the-power-of-y.raku
125
1024
-1024
```

## Комментарий

Эта функция также работает с отрицательными степенями, например:

```raku
say f(5, -1);  # 0.2
say f(10, -2); # 0.01
```

{% include nav.html %}