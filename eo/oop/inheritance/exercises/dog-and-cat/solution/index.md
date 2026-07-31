---
title: 'Solvo: Dungitoj kaj roloj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Employee {
    has $.name;
    method role {
        'staff';
    }
    method badge {
        "$.name - " ~ self.role;
    }
}

class Manager is Employee {
    method role { 'manager' }
}

class Intern is Employee {
    method role { 'intern' }
}

say Manager.new(name => 'Anna').badge;
say Intern.new(name => 'Bob').badge;
```

🦋 Vi povas trovi la fontkodon en la dosiero [dog-and-cat.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/dog-and-cat.raku).

## Eligo

```
Anna - manager
Bob - intern
```

## Komentoj

1. `Manager` kaj `Intern` heredas la atributon `name` kaj la metodon `badge` el `Employee`, do neniu el ili bezonas ripeti tiun kodon.

1. Ĉiu ido superregas `role`. Ĉar `badge` vokas `self.role`, ĝi prenas la superregantan version apartenantan al la efektiva objekto, donante malsaman insignon por la manaĝero kaj la staĝanto.

1. La nomo de la metodo, `role`, estas nur nomo. Sed ĝi koincidas kun la ŝlosilvorto `role`, kiu estos enkondukita poste.

{% include nav.html %}
