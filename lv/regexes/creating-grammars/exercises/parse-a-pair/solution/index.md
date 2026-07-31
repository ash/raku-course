---
title: 'Risinājums: Parsējiet pilnu vārdu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar FullName {
    token TOP   { <first> ' ' <last> }
    token first { \w+ }
    token last  { \w+ }
}

say FullName.parse('Grace Hopper')<last>;
```

🦋 Atrodiet programmu failā [parse-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-pair.raku).

## Izvade

```
｢Hopper｣
```

## Komentāri

1. `TOP` apraksta visu vārdu; `first` un `last` apraksta tā daļas ar burtisku atstarpi starp tām.

1. Pēc parsēšanas katrs marķieris ir nosaukts tvērums, tāpēc uzvārdu nolasa kā `<last>` uz sakritības objekta.

{% include nav.html %}
