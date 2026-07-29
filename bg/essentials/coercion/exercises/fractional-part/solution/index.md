---
title: 'Solution: Дробна част'
---

{% include menu.html %}

За да получите дробната част на едно число, можете да извадите цялата част, която можете да получите, като преобразувате числото в `Int`.

## Код

Възможното решение е показано по-долу:

```raku
my $n = 15.8972;
say $n - $n.Int;
```

🦋 Намерете програмата във файла [fractional-part.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/fractional-part.raku).

## Изход

```console
$ raku exercises/coercion/fractional-part.raku
0.8972
```

## Коментар

Опитайте същата програма и с отрицателни числа, например:

```raku
my $n = -15.8972;
say $n - $n.Int;
```

В този случай резултатът също трябва да е правилен:

```console
$ raku exercises/coercion/fractional-part.raku
-0.8972
```

{% include nav.html %}