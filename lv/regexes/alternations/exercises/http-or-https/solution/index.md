---
title: 'Risinājums: http vai https'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say 'https://example' ~~ / http | https /;
```

🦋 Atrodiet programmu failā [http-or-https.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/http-or-https.raku).

## Izvade

```
｢https｣
```

## Komentāri

1. Sākumā varētu sakrist gan `http`, gan `https`, taču `|` izmanto garākā marķiera piemeklēšanu.

1. Tāpēc uzvar garākais `https`, lai gan `http` uzrakstīts pirmais.

## Cits risinājums

Abi vārdi atšķiras tikai ar beigu `s`, tāpēc alternatīvas vietā šo `s` var padarīt neobligātu ar kvantoru `?`:

```raku
say 'https://example' ~~ / https? /; # ｢https｣
```

`?` saistās tikai ar atomu, kas ir tieši pirms tā, — ar `s` —, nevis ar visu vārdu, tāpēc `https?` lasāms kā `http`, kam seko neobligāts `s`. Šis viens raksturs sakrīt gan ar `http`, gan ar `https`, un, būdams rijīgs, tas paņem `s`, kad vien tas ir klāt.

{% include nav.html %}
