---
title: 'Solutio: Methodum inveni'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Animal {
    method speak { 'generic' }
}

class Dog is Animal {
}

say so Dog.^find_method('speak');
```

🦋 Inveni codicem fontem in archivo [find-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/find-method.raku).

## Exitus

```
True
```

## Commentarii

1. `.^find_method` methodum reddit si exsistit, vel valorem indefinitum si non. `so` illud in simplicem Booleanam vertit.

1. `Dog` nullas methodos ipsa definit, et tamen effectus est `True`: `find_method` totam catenam hereditatis perquirit et `speak` sursum in `Animal` invenit. Hoc speculatur quomodo vera vocatio methodi in `Dog` methodum hereditatam inveniret.

{% include nav.html %}
