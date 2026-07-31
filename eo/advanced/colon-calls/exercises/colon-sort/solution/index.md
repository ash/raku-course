---
title: 'Solvo: Ordigi per dupunkto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @words = <pear fig apple kiwi>;
say @words.sort: *.chars;
```

🦋 Vi povas trovi la fontkodon en la dosiero [colon-sort.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-sort.raku).

## Eligo

```
(fig pear kiwi apple)
```

## Komentoj

1. La dupunkto transdonas la ordigan shlsilon al `sort` sen bezoni krampojn chirkaue de ghi.

1. `*.chars` estas Whatever-esprimo kiu signifas "la nombro de signoj de chiu elemento". `sort` uzas ghin kiel la shlsilon, do la vortoj eliras plej mallonga unue: `fig` (3), poste `pear` kaj `kiwi` (4), poste `apple` (5).

1. `pear` konservas sian lokon antau `kiwi` char ili havas la saman longon kaj `sort` estas stabila, konservante la originalan ordon de egalaj shlsiloj.

{% include nav.html %}
