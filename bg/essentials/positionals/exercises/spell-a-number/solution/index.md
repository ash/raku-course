---
title: 'Solution: Спелуване на число'
---

{% include menu.html %}

Програмата по-долу има вграден масив с имената на числата от 0 до 20 и имената на десетиците: 20, 30 и т.н. В редицата от условни проверки числото се разпределя към едно от правилата за изписване.

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
elsif $n % 10 { # Двузначни неокръглени числа, напр. 34
    say @names[$n / 10 + 18] ~ '-' ~ @names[$n % 10];
}
else { # Кратни на 10, напр. 50
    say @names[$n / 10 + 18];
}
```

🦋 Намерете програмата във файла [spell-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/spell-a-number.raku).

## Пример

Стартирайте програмата няколко пъти, за да проверите всички три клона на конструкцията `if`—`elsif`—`else`.

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