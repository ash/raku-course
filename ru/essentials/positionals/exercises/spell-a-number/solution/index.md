---
title: 'Решение: Название числа'
---

{% include menu.html %}

Программа ниже имеет встроенный массив с названиями чисел от 0 до 20 и названиями десятков: 20, 30 и т.д. В цепочке условных проверок число распределяется по одному из правил написания.

## Код

```raku
my $n = @*ARGS[0];

my @names = <
    zero one two three four five six seven eight nine ten
    eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty
    thirty fourty fifty sixty seventy eighty ninety >;

if $n < 20 {
    say @names[$n];
}
elsif $n % 10 { # Двузначные неокругленные числа, например, 34
    say @names[$n / 10 + 18] ~ '-' ~ @names[$n % 10];
}
else { # Кратные 10, например, 50
    say @names[$n / 10 + 18];
}
```

🦋 Найдите программу в файле [spell-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/spell-a-number.raku).

## Пример

Запустите программу несколько раз, чтобы проверить все три ветви конструкции `if`—`elsif`—`else`.

```console
$ raku exercises/positionals/spell-a-number.raku 5
five

$ raku exercises/positionals/spell-a-number.raku 12
twelve

$ raku exercises/positionals/spell-a-number.raku 67
sixty-seven

$ raku exercises/positionals/spell-a-number.raku 80
eighty
```

{% include nav.html %}