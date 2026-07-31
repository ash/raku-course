---
title: 'Risinājums: Darbība ar lielajiem burtiem'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar WordG {
    token TOP  { <word> }
    token word { \w+ }
}

class UpcaseAction {
    method TOP($/) { make $<word>.Str.uc }
}

say WordG.parse('hello', actions => UpcaseAction.new).made;
```

🦋 Atrodiet programmu failā [upcase-action.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/upcase-action.raku).

## Izvade

```
HELLO
```

## Komentāri

1. Gramatika satver vārdu; darbību klase izlemj, ko ar to darīt.

1. `$<word>.Str` dod sakritušo tekstu un `.uc` to pārvērš lielajos burtos, un tieši to `make` saglabā uz sakritības.

{% include nav.html %}
