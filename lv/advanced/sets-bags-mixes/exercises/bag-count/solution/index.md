---
title: 'Risinājums: Saskaitīt somā'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $words = bag('the cat sat on the mat'.words);

say $words<the>;
say $words.total;
```

🦋 Atrodiet programmu failā [bag-count.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/bag-count.raku).

## Izvade

```
2
6
```

## Komentāri

1. `'the cat sat on the mat'.words` dod sešus vārdus, un `bag` katru saskaita. Indeksējot ar `<the>`, tiek atgriezts, cik reižu `the` redzēts — divreiz.

1. Metode `total` saskaita visus skaitus, kas sakrīt ar maisā ielikto vārdu skaitu — `6`.

{% include nav.html %}
