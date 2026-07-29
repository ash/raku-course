---
title: 'Solution: Общи елементи'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $a = set(<apple banana cherry>);
my $b = set(<banana cherry date>);

my $common = $a ∩ $b;
say $common.elems;
say 'apple' ∈ $common;
```

🦋 Можете да намерите пълния код във файла [common-elements.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/common-elements.raku).

## Резултат

```
2
False
```

## Коментари

1. Сечението `$a ∩ $b` само по себе си е множество — тук `{banana, cherry}` — така че то има `2` елемента. Ако предпочитате ASCII, напишете `(&)` вместо `∩`.

1. Тъй като сечението е множество, можете да му зададете въпроса за принадлежност с `∈`. `apple` е само в първото множество, затова не е в сечението, и проверката връща `False`.

{% include nav.html %}
