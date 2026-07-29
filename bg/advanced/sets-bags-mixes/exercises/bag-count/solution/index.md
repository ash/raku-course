---
title: 'Solution: Пребройте в торба'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $words = bag('the cat sat on the mat'.words);

say $words<the>;
say $words.total;
```

🦋 Можете да намерите пълния код във файла [bag-count.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/bag-count.raku).

## Резултат

```
2
6
```

## Коментари

1. `'the cat sat on the mat'.words` произвежда шестте думи, а `bag` брои всяка от тях. Индексирането с `<the>` връща колко пъти е срещнато `the` — два пъти.

1. Методът `total` сумира всички броячи, което е равно на броя на думите, добавени в торбата — `6`.

{% include nav.html %}
