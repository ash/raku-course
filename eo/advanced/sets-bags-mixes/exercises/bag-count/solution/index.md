---
title: 'Solvo: Kalkuli en sako'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $words = bag('the cat sat on the mat'.words);

say $words<the>;
say $words.total;
```

🦋 Vi povas trovi la fontkodon en la dosiero [bag-count.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/bag-count.raku).

## Eligo

```
2
6
```

## Komentoj

1. `'the cat sat on the mat'.words` produktas la ses vortojn, kaj `bag` kalkulas ĉiun el ili. Subskribi per `<the>` redonas, kiom da fojoj `the` estis vidita — dufoje.

1. La metodo `total` sumigas ĉiujn kalkulojn, kio egalas al la nombro de vortoj enmetitaj en la sakon — `6`.

{% include nav.html %}
