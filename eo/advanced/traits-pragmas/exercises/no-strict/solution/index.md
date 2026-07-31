---
title: 'Solvo: Malstreĉi strict'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
no strict;

$a = 10;
$b = 20;
say $a + $b;
```

🦋 Vi povas trovi la fontkodon en la dosiero [no-strict.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/no-strict.raku).

## Eligo

```
30
```

## Komentoj

1. `no strict` malŝaltas la postulon, ke variabloj estu deklaritaj, do `$a` kaj `$b` povas esti atribuitaj sen `my`. Sub la defaŭlta `strict`, ĉiu el tiuj linioj estus kompiltempa eraro.

1. Post la atribuo la variabloj kondutas normale, do `$a + $b` estas `30`. La malstreĉo estas leksika — ĝi daŭras nur ĝis la fino de la amplekso, kie `no strict` aperas.

1. Ĉi tio estas demonstro, ne rekomendata praktiko: `strict` estas ŝaltita defaŭlte pro bona kialo — ĝi kaptas tajperarojn en variablaj nomoj dum kompilado. En vera kodo, tenu ĝin ŝaltita kaj deklaru viajn variablojn per `my`.

{% include nav.html %}
