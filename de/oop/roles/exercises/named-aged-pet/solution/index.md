---
title: 'Lösung: Ein Haustier mit Namen und Alter'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
role Named {
    method label {
        'I am ' ~ self.name;
    }
}

role Aged {
    method status {
        self.age ~ ' years';
    }
}

class Pet does Named does Aged {
    has $.name;
    has $.age;
}

my $p = Pet.new(name => 'Rex', age => 3);
say $p.label;
say $p.status;
```

🦋 Du findest den Quellcode in der Datei [named-aged-pet.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/named-aged-pet.raku).

## Ausgabe

```
I am Rex
3 years
```

## Kommentare

1. `Pet` bindet zwei Rollen auf einmal ein und erhält so sowohl die Methode `label` als auch die Methode `status`.

1. Die Methode jeder Rolle verwendet ein Attribut (`name` oder `age`), das die Klasse `Pet` bereitstellt.

{% include nav.html %}
