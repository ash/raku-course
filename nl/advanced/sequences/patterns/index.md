---
title: Reekspatronen
translations_gpt:
---

{% include menu.html %}

De `...`-operator herkent meer dan alleen rekenkundige stappen.

Als je drie waarden opgeeft die door vermenigvuldiging groeien, gaat hij verder met een _meetkundige_ reeks:

```raku
say 1, 2, 4 ... 64; # (1 2 4 8 16 32 64)
```

Hier is elke waarde twee keer de vorige, zodat de reeks verdubbelt totdat hij `64` bereikt.

Reeksen zijn niet beperkt tot getallen. Met tekenreeksen volgt Raku de natuurlijke alfabetische volgorde:

```raku
say 'a' ... 'e'; # (a b c d e)
```

Een reeks kan ook aflopend zijn. Wanneer het eindpunt kleiner is dan het begin, nemen de waarden af:

```raku
say 10 ... 1; # (10 9 8 7 6 5 4 3 2 1)
```

In elk geval beschrijf je het patroon met een voorbeeld, en de `...`-operator vult de rest in.

{% include nav.html %}
