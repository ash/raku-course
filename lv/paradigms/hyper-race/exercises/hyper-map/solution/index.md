---
title: 'Risinājums: map ar hyper'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say <apple banana pear cherry>.hyper.map(*.uc).grep(*.chars > 4).join(' ');
```

🦋 Atrodiet programmu failā [hyper-map.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-map.raku).

## Izvade

```
APPLE BANANA CHERRY
```

## Komentāri

1. `.hyper` visu ķēdi — `map`, kas pārvērš lielajos burtos, un `grep`, kas filtrē pēc garuma — izpilda paralēli pa pavedieniem.

1. Tā kā `.hyper` saglabā secību, izdzīvojušie vārdi paliek savā sākotnējā kārtībā, tāpēc `.join(' ')` dod `APPLE BANANA CHERRY`. `pear` ar saviem četriem burtiem tiek atmests.

{% include nav.html %}
