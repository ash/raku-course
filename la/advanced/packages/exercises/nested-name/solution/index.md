---
title: 'Solutio: Nomen nidificatum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius operis.

## Codex

```raku
module Outer {
    module Inner {
        our $base = 10;
        our sub doubled { $base * 2 }
    }
}

say $Outer::Inner::base;
say Outer::Inner::doubled();
```

🦋 Codicem fontem in archivo [nested-name.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/nested-name.raku) invenire potes.

## Exitus

```
10
20
```

## Commentarii

1. Nidificatio unius spatii nominum intra alterum longiorem viam `::` aedificat. Tam variabilis quam subroutina duobus nivellis profunde habitant, in `Outer::Inner`.

1. Nomen plenum `$Outer::Inner::base` variabilem attingit, et `Outer::Inner::doubled()` subroutinam per eosdem duos nivellos attingit. Nomen subroutinae sigillum non habet, itaque dissimiliter a variabili `$` ante se non habet.

1. Ambo membra cum `our` declarata sunt, quod ea extra modulum suum visibilia facit. Declaratio `my` ea intra `Inner` privata servavisset.

{% include nav.html %}
