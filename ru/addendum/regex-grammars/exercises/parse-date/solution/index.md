---
title: 'Решение: Разберите дату именованными захватами'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $date = '2026-07-03';

if $date ~~ / $<year>=(\d ** 4) '-' $<month>=(\d\d) '-' $<day>=(\d\d) / {
    say "year: $<year>, month: $<month>, day: $<day>";
}
```

🦋 Исходный код можно найти в файле [parse-date.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/parse-date.raku).

## Вывод

```
year: 2026, month: 07, day: 03
```

## Комментарии

1. `$<year>=( ... )` даёт захвату имя. После успешного сопоставления `$<year>`, `$<month>`
и `$<day>` содержат захваченные части.

1. `\d ** 4` означает ровно четыре цифры, поэтому шаблон подходит только к правильно оформленной
дате.

{% include nav.html %}
