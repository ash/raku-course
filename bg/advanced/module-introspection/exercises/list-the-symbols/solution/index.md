---
title: 'Solution: Изброете символите'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

Програмата, `list.raku`:

```raku
use Circle;

say Circle::.keys.elems;
say Circle::.keys.sort;
```

🦋 Можете да намерите пълния код във файла [exercises/advanced/module-introspection/list-the-symbols](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/list-the-symbols).

## Резултат

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Коментари

1. `Circle::` е пакетът на модула, а `.keys` изброява съдържащите се в него имена, всяко включително сигила си.

1. `.elems` брои тези имена — модулът дефинира две `our` променливи, така че броят е `2`.

1. `.keys` не гарантира определен ред, затова прилагаме `.sort`, за да получим стабилен, азбучен резултат `($pi $tau)`. Без сортиране двете имена могат да излязат в произволен ред при различни изпълнения.

{% include nav.html %}
