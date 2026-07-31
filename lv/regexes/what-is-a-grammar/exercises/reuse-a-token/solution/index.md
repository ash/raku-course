---
title: 'Risinājums: Izmantojiet marķieri atkārtoti'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my regex word { \w+ }

if 'cat dog' ~~ / <word> ' ' <word> / {
    say $<word>[0];
    say $<word>[1];
}
```

🦋 Atrodiet programmu failā [reuse-a-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/reuse-a-token.raku).

## Izvade

```
｢cat｣
｢dog｣
```

## Komentāri

1. Viena un tā pati nosauktā regulārā izteiksme `word` raksturā tiek izsaukta divreiz.

1. Kad nosaukts tvērums parādās vairāk nekā vienu reizi, rezultāti veido sarakstu, tāpēc tos nolasa kā `$<word>[0]` un `$<word>[1]`.

{% include nav.html %}
