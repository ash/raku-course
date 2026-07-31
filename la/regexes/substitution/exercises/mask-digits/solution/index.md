---
title: 'Solutio: Numeros occulta'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $orig = 'PIN 1234';
say S:g/\d/#/ given $orig;
say $orig;
```

🦋 Inveni codicem fontem in archivo [mask-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/mask-digits.raku).

## Exitus

```
PIN ####
PIN 1234
```

## Commentarii

1. Maiusculum `S///` idem munus agit quod `s///` sed **novam catenam reddit** loco eius quod variabilem in loco mutet. Cum `:g` omnem cifram `\d` per `#` in exemplo reddito permutat. Ad `$orig` per `given` applicatur, quod catenam ut thema ponit.

1. `$orig` postea imprimens ostendis illud adhuc `PIN 1234` tenere — dissimile `s///`, originale intactum relictum est.

{% include nav.html %}
