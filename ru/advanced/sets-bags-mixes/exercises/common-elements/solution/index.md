---
title: 'Решение: Общие элементы'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений этой задачи.

## Код

```raku
my $a = set(<apple banana cherry>);
my $b = set(<banana cherry date>);

my $common = $a ∩ $b;
say $common.elems;
say 'apple' ∈ $common;
```

🦋 Исходный код можно найти в файле [common-elements.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/common-elements.raku).

## Вывод

```
2
False
```

## Комментарии

1. Пересечение `$a ∩ $b` само является множеством -- в данном случае `{banana, cherry}` -- поэтому в нём `2` элемента. Если вы предпочитаете ASCII, вместо `∩` можно написать `(&)`.

1. Поскольку пересечение является множеством, к нему можно задать вопрос о принадлежности с помощью `∈`. `apple` есть только в первом множестве, поэтому его нет в пересечении, и проверка возвращает `False`.

{% include nav.html %}
