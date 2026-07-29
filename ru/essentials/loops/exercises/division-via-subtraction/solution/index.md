---
title: 'Решение: Деление через вычитание'
---

{% include menu.html %}

Деление — это повторное вычитание. Программа содержит цикл `while`, который уменьшает `$a` на значение `$b` и повторяет это, пока текущее значение `$a` не станет меньше `$b`. Переменная `$n` считает количество итераций, и это также результат, который нам нужен.

## Код

Вот полная программа:

```raku
my $a = 175;
my $b = 25;

my $n = 0;
while $a >= $b {
    $a -= $b;
    $n++;
}

say $n;
```

🦋 Найдите программу в файле [division-via-subtraction.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/division-via-subtraction.raku).

## Вывод

Запустите программу несколько раз. Начните с заданных значений, которые дают точное целое число:

```console
$ raku exercises/loops/division-via-subtraction.raku
7
```

Также попробуйте, например, изменить `$b` на `20` и убедитесь, что результат правильный:

```console
$ raku exercises/loops/division-via-subtraction.raku
8
```

{% include nav.html %}