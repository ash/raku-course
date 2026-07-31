---
title: 'Solutio: Methodum adde'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Dog {
    has $.name;
}

Dog.^add_method('speak', method { $.name ~ ' says woof' });

say Dog.new(name => 'Rex').speak;
```

🦋 Inveni codicem fontem in archivo [add-a-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/add-a-method.raku).

## Exitus

```
Rex says woof
```

## Commentarii

1. `.^add_method` novam methodum metaobiecto classis tempore exsecutionis adfigit, ut anonymam `method { … }` datam.

1. Methodus addita vera methodus classis est, itaque intra eam `$.name` attributum `name` obiecti attingit, exacte sicut methodus in corpore classis scripta faceret. Post vocationem omnis `Dog` ad `.speak` respondet.

{% include nav.html %}
