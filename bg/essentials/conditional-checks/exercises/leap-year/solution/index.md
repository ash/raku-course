---
title: 'Solution: Високосна година'
---

{% include menu.html %}

## Отказ от отговорност

Решението, показано по-долу, има за цел да ви обучи да използвате условни проверки. В реалния живот можете да научите методите на вградената класа `Date`. Ще го изучим във втората част на курса.

## Решение

Алгоритъмът за откриване дали годината е високосна:

1. ако годината не се дели на 4 => обикновена година
1. ако годината не се дели на 100 => високосна година
1. ако годината не се дели на 400 => обикновена година
1. иначе => високосна година

Имайте предвид, че можете да използвате вградените типове за работа с дата и час, така че ще се върнем към тази задача във втората част на курса.

## Код 1

Първото решение възпроизвежда горните стъпки буквално:

```raku
my $year = prompt 'Year: ';

if $year % 4 {
    say 'Common year';
}
elsif $year % 100 {
    say 'Leap year';
}
elsif $year % 400 {
    say 'Common year';
}
else {
    say 'Leap year';
}
```

🦋 Намерете програмата във файла [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/leap-year.raku).

## Код 2

Във второто решение логиката е събрана в едно изразяване. Скобите не винаги са необходими, но са добавени тук за яснота.

```raku
my $year = prompt 'Year: ';

say (($year %% 400) || (($year %% 4) && ($year % 100))) ?? 'Leap year' !! 'Common year';
```

🦋 Намерете програмата във файла [leap-year-formula.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/leap-year-formula.raku).

## Изход

Опитайте и двете програми с най-критичните случаи, например, 1900, 2000, 2020, 2021.

```console
$ raku exercises/conditional-checks/leap-year.raku
Year: 1900
Common year

$ raku exercises/conditional-checks/leap-year.raku
Year: 2000
Leap year
```

```console
$ raku exercises/conditional-checks/leap-year-formula.raku
Year: 2020
Leap year

$ raku exercises/conditional-checks/leap-year-formula.raku
Year: 2021
Common year
```

%%tipblock
## `%%` срещу `%`

Имайте предвид, че в логически контексти операторите `%%` и `%` са допълващи се. Можете да използвате този факт, за да изберете един от операторите, за да избегнете явното сравнение с нула.

```raku
say ?(100 % 3);    # Вярно
say 100 % 3 != 0;  # Вярно

say ?(100 %% 3);   # Невярно
say 100 %% 3 != 0; # Невярно
```
%%/tipblock

{% include nav.html %}