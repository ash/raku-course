---
title: 'Oplossing: Werknemers en rollen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [dog-and-cat.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/dog-and-cat.raku).

## Uitvoer

```
Anna - manager
Bob - intern
```

## Opmerkingen

1. `Manager` en `Intern` erven het attribuut `name` en de methode `badge` van `Employee`, dus hoeft geen van beide die code te herhalen.

1. Elk kind overschrijft `role`. Omdat `badge` `self.role` aanroept, pakt het de overschrijvende versie op die bij het werkelijke object hoort, wat een andere badge voor de manager en de stagiair oplevert.

1. De naam van de methode, `role`, is slechts een naam. Maar hij valt samen met het sleutelwoord `role` dat later geïntroduceerd wordt.

{% include nav.html %}
