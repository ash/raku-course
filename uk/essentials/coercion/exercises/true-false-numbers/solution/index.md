---
title: 'Solution: Істинні та хибні числа'
---

{% include menu.html %}

Щоб перетворити число на логічне значення, ви можете використовувати або префіксний оператор `?`, або конструктор, або викликати метод `Bool`, або рутину `so` як префіксний оператор або метод:

```raku
my $value = 42;
say ?$value;
say Bool($value);
say $value.Bool;
say so $value;
say $value.so;
```

Цілком очевидно, що ненульові значення перетворюються на `True`. Тому нас найбільше цікавлять ті варіанти, які стають `False`.

Усі нулі, цілі, з плаваючою комою або раціональні, перетворюються на `False`:

```raku
my Int $int-zero = 0;
say ?$int-zero; # False

my Rat $rat-zero = 0.0;
say ?$rat-zero; # False

my Num $num-zero = 0e0;
say ?$num-zero; # False
```

Звичайно, нічого не змінюється, якщо ви спробуєте спочатку заперечити число:

```raku
my $int = 0;
say ?(-$int); # False
```

🦋 Ви можете знайти повну програму з наведеним вище прикладом у файлі [true-false-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/true-false-numbers.raku).

{% include nav.html %}