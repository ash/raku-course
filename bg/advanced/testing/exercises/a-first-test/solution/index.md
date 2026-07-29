---
title: 'Solution: Първи тест'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
use Test;

ok 'Raku'.chars == 4, 'Raku has four letters';

done-testing;
```

🦋 Можете да намерите пълния код във файла [a-first-test.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/a-first-test.raku).

## Резултат

```
ok 1 - Raku has four letters
1..1
```

## Коментари

1. `ok` минава, защото условието `'Raku'.chars == 4` е вярно.

1. `done-testing` извежда реда с плана `1..1`, указващ, че един тест е бил изпълнен.

{% include nav.html %}
