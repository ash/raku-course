---
title: Розв'язання вправи «Розберіть дату іменованими захопленнями»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $date = '2026-07-03';

if $date ~~ / $<year>=(\d ** 4) '-' $<month>=(\d\d) '-' $<day>=(\d\d) / {
    say "year: $<year>, month: $<month>, day: $<day>";
}
```

🦋 Знайдіть програму у файлі [parse-date.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/parse-date.raku).

## Вивід

```
year: 2026, month: 07, day: 03
```

## Коментарі

1. `$<year>=( ... )` дає захопленню ім'я. Після успішного зіставлення `$<year>`,
`$<month>` та `$<day>` містять захоплені шматки.

1. `\d ** 4` означає рівно чотири цифри, тож шаблон зіставляється лише з датою
правильної форми.

{% include nav.html %}
