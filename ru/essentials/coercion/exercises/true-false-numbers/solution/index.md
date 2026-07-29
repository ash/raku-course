---
title: 'Решение: Числа True и False'
---

{% include menu.html %}

Чтобы преобразовать число в логическое значение, вы можете использовать либо префиксный оператор `?`, либо форму конструктора, либо вызвать метод `Bool`, либо рутину `so` как префиксный оператор или метод:

```raku
my $value = 42;
say ?$value;
say Bool($value);
say $value.Bool;
say so $value;
say $value.so;
```

Довольно очевидно, что ненулевые значения преобразуются в `True`. Таким образом, нас больше всего интересуют те варианты, которые становятся `False`.

Все нули, целые, с плавающей запятой или рациональные, приводятся к `False`:

```raku
my Int $int-zero = 0;
say ?$int-zero; # False

my Rat $rat-zero = 0.0;
say ?$rat-zero; # False

my Num $num-zero = 0e0;
say ?$num-zero; # False
```

Конечно, ничего не изменится, если вы сначала попытаетесь отрицать число:

```raku
my $int = 0;
say ?(-$int); # False
```

🦋 Полную программу с приведенным выше примером вы можете найти в файле [true-false-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/true-false-numbers.raku).

{% include nav.html %}