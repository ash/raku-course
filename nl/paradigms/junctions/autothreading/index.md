---
title: Autothreading
translations_gpt:
---

{% include menu.html %}

Wanneer je een junctie meegeeft aan iets dat één enkele waarde verwacht — een vergelijking of een gewone functie — past Raku die bewerking stilletjes toe op **elke** waarde achter de junctie en voegt het de resultaten weer tot een junctie samen. Dit heet _autothreading_.

Bij een junctie optellen telt bijvoorbeeld bij elk van haar waarden op:

```raku
my $j = 1 | 2 | 3;
say $j + 10; # any(11, 12, 13)
```

De `+ 10` werd afzonderlijk op `1`, `2` en `3` toegepast, wat een nieuwe _any_-junctie `any(11, 12, 13)` gaf.

Bij een vergelijking klapt het samengevoegde resultaat in tot één enkele waarheidswaarde volgens de soort junctie:

```raku
say so all(3, 7, 2) > 0;  # True  — every value is positive
say so all(3, -1, 2) > 0; # False — not all are positive
say so none(1, 2, 3) == 5; # True — none of them is 5
```

Autothreading is wat juncties zo beknopt maakt: één vergelijking controleert veel waarden. In wezen zijn de controles onafhankelijk, dus Raku is vrij ze parallel te draaien — en daarom horen juncties van nature bij de gereedschapskist voor concurrency.

{% include nav.html %}
