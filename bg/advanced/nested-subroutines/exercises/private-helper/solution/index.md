---
title: 'Solution: Частен помощник'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub stats {
    sub double($x) { $x * 2 }

    say double(3) + double(5);
}

stats;
```

🦋 Изходният код на тази програма можете да намерите във файла [private-helper.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/private-helper.raku).

## Изход

```
16
```

## Коментари

1. Помощникът `double` е дефиниран вътре в `stats`, така че е видим само там и не може да бъде извикан от друго място в програмата.

1. `stats` го използва два пъти: `double(3)` е `6`, а `double(5)` е `10`, и тяхната сума е `16`.

{% include nav.html %}
