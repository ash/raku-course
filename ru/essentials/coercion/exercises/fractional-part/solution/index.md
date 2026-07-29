---
title: 'Решение: Дробная часть'
---

{% include menu.html %}

Чтобы получить дробную часть числа, вы можете вычесть целую часть, которую можно получить, приведя число к `Int`.

## Код

Возможное решение показано ниже:

```raku
my $n = 15.8972;
say $n - $n.Int;
```

🦋 Найдите программу в файле [fractional-part.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/fractional-part.raku).

## Вывод

```console
$ raku exercises/coercion/fractional-part.raku
0.8972
```

## Комментарий

Попробуйте ту же программу с отрицательными числами, например:

```raku
my $n = -15.8972;
say $n - $n.Int;
```

В этом случае результат также должен быть правильным:

```console
$ raku exercises/coercion/fractional-part.raku
-0.8972
```

{% include nav.html %}