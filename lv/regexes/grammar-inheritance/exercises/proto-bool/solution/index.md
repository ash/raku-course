---
title: 'Risinājums: Būla vērtība ar proto'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [proto-bool.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-bool.raku).

## Izvade

```
True
True
False
```

## Komentāri

1. Proto marķierim `bool` ir divi nosaukti varianti — `true` un `false`.

1. Katra parsēšana izvēlas atbilstošo variantu, tāpēc izdodas gan `'true'`, gan `'false'`. Proto marķieris ir gramatikas kārtīgais veids, kā pateikt «viens no šiem nosauktajiem variantiem».

1. `'unknown'` neatbilst nevienam variantam, tāpēc proto marķierim nav kam nodot vadību un parsēšana neizdodas — `False`. Proto pieņem tieši tos variantus, ko uzskaitāt, un neko citu.

{% include nav.html %}
