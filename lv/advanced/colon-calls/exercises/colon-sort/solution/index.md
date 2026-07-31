---
title: 'Risinājums: Kārtot ar kolu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @words = <pear fig apple kiwi>;
say @words.sort: *.chars;
```

🦋 Atrodiet programmu failā [colon-sort.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-sort.raku).

## Izvade

```
(fig pear kiwi apple)
```

## Komentāri

1. Kols nodod `sort` kārtošanas atslēgu, un iekavas ap to nav vajadzīgas.

1. `*.chars` ir Whatever izteiksme, kas apzīmē «katra elementa rakstzīmju skaitu». `sort` to izmanto kā atslēgu, tāpēc vārdi iznāk ar īsāko pa priekšu: `fig` (3), tad `pear` un `kiwi` (4), tad `apple` (5).

1. `pear` patur savu vietu pirms `kiwi`, jo tie ir vienāda garuma un `sort` ir stabila, saglabājot vienādu atslēgu sākotnējo secību.

{% include nav.html %}
