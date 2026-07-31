---
title: 'Solutio: Classem describe'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^name;
say Dog.^mro.elems;
say 'Cat' ∈ Dog.^mro.map(*.^name);
```

🦋 Inveni codicem fontem in archivo [describe-a-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/describe-a-class.raku).

## Exitus

```
Dog
4
False
```

## Commentarii

1. `.^name` proprium classis nomen reddit, `Dog`.

1. `.^mro` catenam hereditatis reddit, et `.elems` eam numerat. Quattuor genera in catena sunt — `Dog`, parens eius `Animal`, et universalia `Any` et `Mu` — itaque numerus est `4`.

1. `.^mro.map(*.^name)` illam catenam in indicem nominum generum vertit, `(Dog Animal Any Mu)`. Operator inclusionis `∈` deinde inspicit utrum `Cat` unum ex eis sit. `Dog` a nullo `Cat` descendit, itaque responsum est `False`.

{% include nav.html %}
