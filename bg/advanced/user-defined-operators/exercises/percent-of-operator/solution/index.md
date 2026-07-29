---
title: 'Solution: Оператор за процент от'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub infix:<percent-of>($p, $whole) {
    $whole * $p / 100
}

say 20 percent-of 150;
```

🦋 Можете да намерите пълния код във файла [percent-of-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/percent-of-operator.raku).

## Резултат

```
30
```

## Коментари

1. Операторът приема процента `$p` като ляв операнд и цялата сума `$whole` като десен операнд.

1. Умножаването на `$whole` по `$p` и делението на `100` дава исканата част: `150 * 20 / 100` е `30`.

{% include nav.html %}
