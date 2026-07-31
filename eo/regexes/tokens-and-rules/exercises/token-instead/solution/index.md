---
title: 'Solvo: regex kontraŭ token'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my regex r { \d+ '5' }
my token t { \d+ '5' }

say so '12345' ~~ / <r> /;
say so '12345' ~~ / <t> /;
```

🦋 Vi povas trovi la fontkodon en la dosiero [token-instead.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/token-instead.raku).

## Eligo

```
True
False
```

## Komentoj

1. En la `regex`, `\d+` unue kaptas la tutan `12345`, poste **retropaŝas** — redonante la finan `5`, por ke la laŭlitera `5` povu kongrui. Do la regulesprimo sukcesas.

1. La `token` rifuzas redoni ion ajn: `\d+` konservas la tutan `12345`, la laŭlitera `5` trovas nenion restantan, kaj la ĵetono malsukcesas. Ĉi tiu ne-retropaŝanta konduto estas ĝuste tial, ke `token` estas la ĝusta defaŭlto ene de gramatikoj.

{% include nav.html %}
