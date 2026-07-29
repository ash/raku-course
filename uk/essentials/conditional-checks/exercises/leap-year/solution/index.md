---
title: 'Solution: Високосний рік'
---

{% include menu.html %}

## Відмова від відповідальності

Рішення, показане нижче, має на меті навчити вас використовувати умовні перевірки. У реальному житті ви можете вивчити методи вбудованого класу `Date`. Ми вивчимо це у другій частині курсу.

## Рішення

Алгоритм визначення, чи є рік високосним:

1. якщо рік не ділиться на 4 => звичайний рік
1. якщо рік не ділиться на 100 => високосний рік
1. якщо рік не ділиться на 400 => звичайний рік
1. інакше => високосний рік

Зверніть увагу, що ви можете використовувати вбудовані типи для роботи з датою та часом, тому ми повернемося до цього завдання у другій частині курсу.

## Код 1

Перше рішення буквально відтворює наведені вище кроки:

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

🦋 Знайдіть програму у файлі [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/leap-year.raku).

## Код 2

У другому рішенні логіка зібрана в один вираз. Дужки не завжди потрібні, але додані тут для ясності.

```raku
my $year = prompt 'Year: ';

say (($year %% 400) || (($year %% 4) && ($year % 100))) ?? 'Leap year' !! 'Common year';
```

🦋 Знайдіть програму у файлі [leap-year-formula.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/leap-year-formula.raku).

## Вихідні дані

Спробуйте обидві програми з найважливішими випадками, наприклад, 1900, 2000, 2020, 2021.

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
## `%%` vs `%`

Зверніть увагу, що в логічних контекстах оператори `%%` і `%` є взаємодоповнюючими. Ви можете використовувати цей факт, щоб вибрати один із операторів, щоб уникнути явного порівняння з нулем.

```raku
say ?(100 % 3);    # True
say 100 % 3 != 0;  # True

say ?(100 %% 3);   # False
say 100 %% 3 != 0; # False
```
%%/tipblock

{% include nav.html %}