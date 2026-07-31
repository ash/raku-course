---
title: 'Solvo: Rombo el klasoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class A {
}

class B is A {
}

class C is A {
}

class D is B is C {
}

say D.^mro.map(*.^name);
```

🦋 Vi povas trovi la fontkodon en la dosiero [diamond-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/diamond-mro.raku).

## Eligo

```
(D B C A Any Mu)
```

## Komentoj

1. `D` heredas de du patroj samtempe — `class D is B is C` listigas ĉiun el ili kun sia propra `is`. Tio estas multobla heredo, kaj `A`, `B`, `C`, `D` formas *rombon*: du vojoj de `D` supren al la kunhavata prapatro `A`.

1. `.^mro` platigas tiun rombon en unu solan, linian serĉordon. `D` venas unue, poste ĝiaj patroj `B` kaj `C` en la ordo, en kiu ili estis skribitaj, poste la kunhavata `A`, kaj fine `Any` kaj `Mu`.

1. Kvankam kaj `B` kaj `C` kondukas al `A`, la tipo `A` aperas **unufoje**, kaj nur post ambaŭ. Jen la celo de ordo de metodserĉado: ĉiu tipo estas vizitata ekzakte unufoje, kaj patro neniam venas antaŭ ido, kiu heredas de ĝi — do metodo difinita en `B` estas ĉiam trovata antaŭ tiu, kiun ĝi superregus en `A`.

{% include nav.html %}
