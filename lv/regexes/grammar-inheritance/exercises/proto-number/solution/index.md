---
title: 'Risinājums: Skaitlis ar proto'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<dec> { \d+ }
    token number:sym<hex> { '0x' <[0..9a..f]>+ }
}

say Number.parse('0xff').defined;
```

🦋 Atrodiet programmu failā [proto-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-number.raku).

## Izvade

```
True
```

## Komentāri

1. Proto marķierim `number` ir divi varianti — `dec` un `hex`.

1. Virknei `0xff` variants `dec` piemeklē tikai vadošo `0`, kas atstātu pāri `xff`; variants `hex` piemeklē visu. Tāpēc garākā marķiera piemeklēšana izvēlas `hex`, un virkne parsējas. Tā pati gramatika joprojām pieņem arī vienkāršu decimālu skaitli, piemēram, `42`.

{% include nav.html %}
