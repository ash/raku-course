---
title: 'Solution: Истински и фалшиви числа'
---

{% include menu.html %}

За да конвертирате число в булева стойност, можете да използвате или префиксния оператор `?`, или конструкторната форма, или да извикате метода `Bool`, или рутината `so` като префиксен оператор или метод:

```raku
my $value = 42;
say ?$value;
say Bool($value);
say $value.Bool;
say so $value;
say $value.so;
```

Очевидно е, че не-нулевите стойности се конвертират в `True`. Затова най-много ни интересуват опциите, които стават `False`.

Всички нули, цели числа, числа с плаваща запетая или рационални числа, се преобразуват в `False`:

```raku
my Int $int-zero = 0;
say ?$int-zero; # False

my Rat $rat-zero = 0.0;
say ?$rat-zero; # False

my Num $num-zero = 0e0;
say ?$num-zero; # False
```

Разбира се, нищо не се променя, ако първо опитате да негатирате числото:

```raku
my $int = 0;
say ?(-$int); # False
```

🦋 Можете да намерите пълната програма с горния пример във файла [true-false-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/true-false-numbers.raku).

{% include nav.html %}