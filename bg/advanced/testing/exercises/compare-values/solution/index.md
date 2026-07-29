---
title: 'Solution: Сравнете стойности'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
use Test;

is 'a'.uc, 'A', 'uppercase';

done-testing;
```

🦋 Можете да намерите пълния код във файла [compare-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/compare-values.raku).

## Резултат

```
ok 1 - uppercase
1..1
```

## Коментари

1. `is` сравнява действителната стойност `'a'.uc` с очакваната `'A'`.

1. Те съвпадат, така че тестът минава; при неуспех `is` би извело и двете стойности.

{% include nav.html %}
