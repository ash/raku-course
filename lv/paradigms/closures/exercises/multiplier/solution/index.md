---
title: 'Risinājums: Reizinātājs'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub multiplier($factor) {
    -> $x { $x * $factor };
}

my &triple = multiplier(3);
say triple(4);
```

🦋 Atrodiet programmu failā [multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/multiplier.raku).

## Izvade

```
12
```

## Komentāri

1. Atgrieztais bultiņas bloks noslēdzas pār `$factor`, atceroties, ka tas ir `3`.

1. Izsaucot to ar `4`, iznāk `12`.

{% include nav.html %}
