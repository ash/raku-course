---
title: 'Risinājums: Piešķiršana ar atstarpēm'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar Assign {
    rule TOP    { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

say Assign.parse('x = 5').defined;
```

🦋 Atrodiet programmu failā [spaced-assignment.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-assignment.raku).

## Izvade

```
True
```

## Komentāri

1. Tā kā `TOP` ir `rule`, atstarpes raksturā atļauj atstarpes ap `=` ievadē.

1. Tāpēc `'x = 5'` parsējas. Ja `TOP` būtu `token`, sakristu tikai `'x=5'`.

Atstarpe, ko `rule` atļauj, ir **neobligāta**, nevis obligāta: nozīmīgā atstarpe tikpat labprāt sakrīt ar *nulli* atstarpju kā ar vienu, tāpēc parsējas arī forma bez atstarpēm:

```raku
say Assign.parse('x=5').defined; # True
```

Tāpēc `rule` vienlīdz pieņem `'x = 5'`, `'x=5'` un pat `'x =5'` — elastība, nenorādot, kur atstarpe drīkst vai nedrīkst būt.

{% include nav.html %}
