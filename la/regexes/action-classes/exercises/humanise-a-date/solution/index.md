---
title: 'Solutio: Diem homini legibilem redde'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar Date {
    token TOP   { <year> '-' <month> '-' <day> }
    token year  { \d ** 4 }
    token month { \d ** 2 }
    token day   { \d ** 2 }
}

class Humanise {
    method year($/)  { make $/.Int }
    method month($/) { make <January February March April May June
                             July August September October November December>[$/ - 1] }
    method day($/)   { make $/.Int }
    method TOP($/)   { make "{$<day>.made} {$<month>.made} {$<year>.made}" }
}

say Date.parse('2026-07-05', actions => Humanise.new).made;
```

🦋 Inveni codicem fontem in archivo [humanise-a-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/humanise-a-date.raku).

## Exitus

```
5 July 2026
```

## Commentarii

1. Dissimiles actioni arithmeticae simplici, methodi tesserarum valores **diversorum generum** faciunt: `year` et `day` integros faciunt, sed `month` *catenam* facit valore suo numerico ut indice in seriem nominum mensium utens. `$/ - 1` congruentiam duarum cifrarum in numerum vertit (`07` → `7`) et ad indicem a nulla incipientem movet, itaque `month` `07` `July` facit.

1. Methodus `TOP` textum crudum numquam iterum inspicit. Solum tres valores quos submethodi iam fecerunt legit — `$<day>.made`, `$<month>.made`, `$<year>.made` — eosque in catenam finalem interpolat. `5` ex `day` relegens etiam nullam praefixam gratis omittis.

1. Hoc est munus cotidianum classis actionum: introitum structuratum semel analysa, deinde sine unamquamque methodum propriam partem in id vertere quo cetera programmatis pars eget.

{% include nav.html %}
