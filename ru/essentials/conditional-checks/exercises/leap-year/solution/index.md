---
title: 'Решение: Високосный год'
---

{% include menu.html %}

## Предупреждение

Целью решения, представленного ниже, является тренировка использования
логических проверок. В реальной жизни вы можете изучить методы встроенного
класса `Date`. Вы познакомимся с ними во второй части этого курса.

## Решение

Алгоритм определения високосного года:

1. Если год не делится на 4 => обычный год;
2. Если год не делится на 100 => високосный год;
3. Если год не делится на 400 => обычный год;
4. Иначе => високосный год.

Вы можете использовать встроенные типы для работы с датой и временем, поэтому мы
вернемся к этой проблеме во второй части этого курса.

## Код 1

Первое решение буквально воспроизводит шаги выше:

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

🦋 Вы можете найти исходный код в файле [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/leap-year.raku).

## Код 2

Во втором решении логика упакована в одно выражение. Скобки не всегда
обязательны, но мы добавили их здесь для ясности:

```raku
my $year = prompt 'Year: ';

say (($year %% 400) || (($year %% 4) && ($year % 100))) ?? 'Leap year' !! 'Common year';
```

🦋 Вы можете найти исходный код в файле [leap-year-formula.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/leap-year-formula.raku).

## Вывод

Попробуйте обе программы с самыми крайними случаями, например: 1900, 2000, 2020,
2021.

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
## `%%` и `%`

Примечательно, что в булевом контексте операторы `%%` и `%` являются дополнением
друг друга, то есть возвращают противоположный результат. Вы можете использовать
эту особенность и выбрать подходящий оператор без явного сравнения с нулем.

```raku
say ?(100 % 3);    # True
say 100 % 3 != 0;  # True

say ?(100 %% 3);   # False
say 100 %% 3 != 0; # Flase
```
%%/tipblock

{% assign human=1 %}
{% include nav.html %}
