---
title: 'Solvo: Maskigu la ciferojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $orig = 'PIN 1234';
say S:g/\d/#/ given $orig;
say $orig;
```

🦋 Vi povas trovi la fontkodon en la dosiero [mask-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/mask-digits.raku).

## Eligo

```
PIN ####
PIN 1234
```

## Komentoj

1. La majuskla `S///` faras la saman laboron kiel `s///`, sed **redonas novan ĉenon** anstataŭ ŝanĝi la variablon surloke. Kun `:g` ĝi anstataŭigas ĉiun ciferon `\d` per `#` en la redonita kopio. Ĝi estas aplikata al `$orig` per `given`, kiu starigas la ĉenon kiel la temon.

1. Presi `$orig` poste montras, ke ĝi ankoraŭ tenas `PIN 1234` — malsame ol `s///`, la originalo restis netuŝita.

{% include nav.html %}
