---
title: 'Risinājums: Neobligāta zīme'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say '-42' ~~ / '-'? \d+ /;
```

🦋 Atrodiet programmu failā [optional-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/optional-sign.raku).

## Izvade

```
｢-42｣
```

## Komentāri

1. Daļa `'-'?` piemeklē neobligātu mīnusa zīmi — nulli vai vienu.

1. `\d+` tad piemeklē ciparu virteni. Tas pats raksturs sakrīt arī ar skaitli bez zīmes, piemēram, `42`.

{% include nav.html %}
