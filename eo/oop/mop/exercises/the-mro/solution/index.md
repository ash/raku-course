---
title: 'Solvo: La ordo de metodserĉado'
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

class C is B {
}

say C.^mro.map(*.^name);
```

🦋 Vi povas trovi la fontkodon en la dosiero [the-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/the-mro.raku).

## Eligo

```
(C B A Any Mu)
```

## Komentoj

1. `.^mro` redonas la ĉenon de tipoj, kiujn Raku traserĉas, kiam ĝi solvas metodon.

1. La ĉeno sekvas la heredan linion paŝon post paŝo: `C`, poste ĝia patro `B`, poste la patro de `B`, `A`, kaj fine `Any` kaj `Mu`, per kiuj ĉiu tipo finiĝas. Pli profunda hierarkio simple faras la liston pli longa.

{% include nav.html %}
