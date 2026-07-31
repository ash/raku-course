---
title: 'Soluzione: Dipendenti e ruoli'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [dog-and-cat.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/dog-and-cat.raku).

## Output

```
Anna - manager
Bob - intern
```

## Commenti

1. `Manager` e `Intern` ereditano da `Employee` l'attributo `name` e il metodo `badge`, quindi nessuno dei due deve ripetere quel codice.

1. Ciascuna figlia sovrascrive `role`. Poiché `badge` chiama `self.role`, raccoglie la versione sovrascritta che appartiene all'oggetto vero e proprio, dando un badge diverso per la manager e per lo stagista.

1. Il nome del metodo, `role`, è solo un nome. Ma coincide con la parola chiave `role` che verrà introdotta più avanti.

{% include nav.html %}
