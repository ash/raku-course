---
title: 'Oplossing: Een boolean met proto'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar Bool {
    token TOP { <bool> }

    proto token bool {*}
    token bool:sym<true>  { 'true' }
    token bool:sym<false> { 'false' }
}

say Bool.parse('true').defined;
say Bool.parse('false').defined;
say Bool.parse('unknown').defined;
```

🦋 Je kunt de broncode vinden in het bestand [proto-bool.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-bool.raku).

## Uitvoer

```
True
True
False
```

## Opmerkingen

1. Het prototoken `bool` heeft twee benoemde varianten, `true` en `false`.

1. Elke parse kiest de passende variant, dus slagen zowel `'true'` als `'false'`. Een prototoken is de nette manier waarop een grammatica zegt "een van deze benoemde alternatieven".

1. `'unknown'` matcht geen van beide varianten, dus is er niets waar het prototoken naartoe kan verwijzen en mislukt de parse — `False`. De proto aanvaardt precies de alternatieven die je opsomt, en niets anders.

{% include nav.html %}
