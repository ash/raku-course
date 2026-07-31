---
title: 'Solutio: Definitum an non'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Cat {
}

class Dog {
}

for Cat, Dog, Cat.new, Dog.new -> $thing {
    say $thing.defined;
}
```

🦋 Inveni codicem fontem in archivo [defined-or-not.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/defined-or-not.raku).

## Exitus

```
False
False
True
True
```

## Commentarii

1. Anulus obiecta generis (`Cat`, `Dog`) et exemplaria (`Cat.new`, `Dog.new`) mixta percurrit.

1. Utrumque obiectum generis indefinitum est, itaque `defined` pro eis `False` reddit; utrumque exemplar definitum est, itaque `True` reddit. Definitio ab eo pendet utrum valor obiectum generis an verum exemplar sit — non a classe ad quam pertinet.

{% include nav.html %}
