---
title: 'Risinājums: Normalizējiet atstarpes'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $messy = '  too    many     spaces   ';

say $messy.trim.subst(/\s+/, ' ', :g);
```

🦋 Atrodiet programmu failā [normalize-whitespace.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/normalize-whitespace.raku).

## Izvade

```
too many spaces
```

## Komentāri

1. `.trim` noņem atstarpes sākumā un beigās; aizvietošana pēc tam katru atstarpju
virteni `\s+` aizstāj ar vienu atstarpi.

1. Apstākļa vārds `:g` padara aizvietošanu globālu, tāpēc tiek saspiestas *visas*
spraugas, nevis tikai pirmā.

{% include nav.html %}
