---
title: 'Solutio: Ordo resolutionis methodorum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class A {
}

class B is A {
}

class C is B {
}

say C.^mro.map(*.^name);
```

🦋 Inveni codicem fontem in archivo [the-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/the-mro.raku).

## Exitus

```
(C B A Any Mu)
```

## Commentarii

1. `.^mro` catenam generum reddit quam Raku perquirit cum methodum resolvit.

1. Catena lineam hereditatis gradatim sequitur: `C`, deinde parens eius `B`, deinde parens ipsius `B` scilicet `A`, et denique `Any` et `Mu`, quibus omne genus desinit. Hierarchia altior indicem simpliciter longiorem facit.

{% include nav.html %}
