---
title: 'Risinājums: Izveidojiet reizinātāju'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub multiplier($n) {
    sub ($x) { $x * $n };
}

my &double = multiplier(2);
my &triple = multiplier(3);

say double(7);
say triple(7);
```

🦋 Atrodiet programmu failā [make-multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/make-multiplier.raku).

## Izvade

```
14
21
```

## Komentāri

1. `multiplier(2)` atgriež apakšprogrammu, kas atceras, ka `$n` ir `2`; `multiplier(3)` atgriež atsevišķu apakšprogrammu, kas atceras `3`.

1. Katra atgrieztā apakšprogramma patur savu `$n`, tāpēc `double(7)` dod `14` un `triple(7)` dod `21` — divas neatkarīgas funkcijas, uzbūvētas no vienas un tās pašas rūpnīcas.

{% include nav.html %}
