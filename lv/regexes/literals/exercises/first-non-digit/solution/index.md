---
title: 'Risinājums: Pirmā rakstzīme, kas nav cipars'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say '42abc' ~~ /\D/;
```

🦋 Atrodiet programmu failā [first-non-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/first-non-digit.raku).

## Izvade

```
｢a｣
```

## Komentāri

1. `\D` ir `\d` pretstats: tā piemeklē jebkuru rakstzīmi, kas nav cipars.

1. Pirmās divas rakstzīmes ir cipari, tāpēc sakritība sākas pie `a`.

{% include nav.html %}
