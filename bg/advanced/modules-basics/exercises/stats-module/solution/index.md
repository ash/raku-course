---
title: 'Solution: Използвайте модул за статистика'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

Програмата, `stats.raku`:

```raku
use Stats;

my @scores = 10, 20, 30, 40;

say "total: { total(@scores) }";
say "mean: { mean(@scores) }";
```

🦋 Можете да намерите двата файла с изходния код в директорията [exercises/advanced/modules-basics/stats-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/stats-module).

## Изход

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Коментари

1. Един единствен `use Stats` внася *и двете* експортирани подпрограми наведнъж — `use` импортира всичко, което модулът маркира с `is export`, не само едно име.

1. `mean` извиква `total` вътре в модула. Програмата никога не извиква `total` от свое име там, но въпреки това работи: подпрограмите на модула могат да разчитат една на друга и извикващият вижда само експортираните имена.

1. С четири числа, даващи общо `100`, средното аритметично е `100 / 4`, което е `25`.

{% include nav.html %}
