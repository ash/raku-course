---
title: 'Solution: Написати число'
---

{% include menu.html %}

Нижче наведена програма має вбудований масив з назвами чисел від 0 до 20 та назвами десятків: 20, 30 і т.д. У ланцюжку умовних перевірок число розподіляється за одним із правил написання.

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
elsif $n % 10 { # Двозначні непарні числа, наприклад, 34
    say @names[$n / 10 + 18] ~ '-' ~ @names[$n % 10];
}
else { # Кратні 10, наприклад, 50
    say @names[$n / 10 + 18];
}
```

🦋 Знайдіть програму у файлі [spell-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/spell-a-number.raku).

## Приклад

Запустіть програму кілька разів, щоб перевірити всі три гілки конструкції `if`—`elsif`—`else`.

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