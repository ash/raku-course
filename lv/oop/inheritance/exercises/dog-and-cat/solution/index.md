---
title: 'Risinājums: Darbinieki un lomas'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [dog-and-cat.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/dog-and-cat.raku).

## Izvade

```
Anna - manager
Bob - intern
```

## Komentāri

1. `Manager` un `Intern` manto no `Employee` atribūtu `name` un metodi `badge`, tāpēc nevienam no tiem šis kods nav jāatkārto.

1. Katra bērnklase pārraksta `role`. Tā kā `badge` izsauc `self.role`, tā paņem pārrakstīto versiju, kas pieder īstajam objektam, dodot atšķirīgu caurlaidi vadītājam un praktikantam.

1. Metodes nosaukums `role` ir tikai nosaukums. Taču tas sakrīt ar atslēgvārdu `role`, ar ko iepazīsimies vēlāk.

{% include nav.html %}
