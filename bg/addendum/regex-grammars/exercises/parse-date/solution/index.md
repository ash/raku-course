---
title: 'Решение: Разберете дата с именувани прихващания'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $date = '2026-07-03';

if $date ~~ / $<year>=(\d ** 4) '-' $<month>=(\d\d) '-' $<day>=(\d\d) / {
    say "year: $<year>, month: $<month>, day: $<day>";
}
```

🦋 Намерете програмата във файла [parse-date.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/parse-date.raku).

## Изход

```
year: 2026, month: 07, day: 03
```

## Коментари

1. `$<year>=( ... )` дава име на прихващането. След успешно съпоставяне `$<year>`,
`$<month>` и `$<day>` съдържат прихванатите парчета.

1. `\d ** 4` означава точно четири цифри, така че шаблонът съвпада само с дата с
правилна форма.

{% include nav.html %}
