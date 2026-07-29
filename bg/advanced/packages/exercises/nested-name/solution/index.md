---
title: 'Solution: Вложено име'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
module Outer {
    module Inner {
        our $base = 10;
        our sub doubled { $base * 2 }
    }
}

say $Outer::Inner::base;
say Outer::Inner::doubled();
```

🦋 Можете да намерите изходния код във файла [nested-name.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/nested-name.raku).

## Изход

```
10
20
```

## Коментари

1. Влагането на едно пространство от имена вътре в друго изгражда по-дълъг път с `::`. И променливата, и подпрограмата се намират на две нива навътре, в `Outer::Inner`.

1. Пълното име `$Outer::Inner::base` достига до променливата, а `Outer::Inner::doubled()` достига до подпрограмата чрез същите две нива. Името на подпрограмата не носи сигил, така че за разлика от променливата няма `$` отпред.

1. И двата члена са декларирани с `our`, което ги прави видими извън техния модул. Декларация с `my` би ги запазила частни за `Inner`.

{% include nav.html %}
