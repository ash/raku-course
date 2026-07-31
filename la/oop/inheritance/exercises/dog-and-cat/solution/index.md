---
title: 'Solutio: Operarii et partes'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [dog-and-cat.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/dog-and-cat.raku).

## Exitus

```
Anna - manager
Bob - intern
```

## Commentarii

1. `Manager` et `Intern` attributum `name` et methodum `badge` ex `Employee` heredant, itaque neutra illum codicem repetere debet.

1. Unaquaeque filia `role` superscribit. Quia `badge` `self.role` vocat, versionem superscribentem obiecti actualis capit, unde tessera administratrici et tironi diversa.

1. Nomen methodi, `role`, merum nomen est. Sed cum verbo `role` congruit quod postea introducetur.

{% include nav.html %}
