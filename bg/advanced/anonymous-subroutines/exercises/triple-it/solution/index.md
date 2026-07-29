---
title: 'Solution: Утройте го'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $factor = 3;
my $scale = -> $x { $x * $factor };

say $scale(7);
```

🦋 Можете да намерите изходния код във файла [triple-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/triple-it.raku).

## Изход

```
21
```

## Коментари

1. Стрелковият блок използва `$factor`, променлива от заобикалящия обхват, въпреки че приема само параметъра `$x`. Улавянето на такива променливи е това, което го прави затваряне (closure).

1. При `$factor` равно на `3`, извикването на `$scale(7)` дава `21`. Променете `$factor` и същият блок ще мащабира с новата стойност:

```raku
$factor = 5;
say $scale(7); # 35
```

Тъй като затварянето улавя самата *променлива*, а не стойността й в момента на написване, по-късното извикване вижда обновения `$factor` и връща `35`.

{% include nav.html %}
