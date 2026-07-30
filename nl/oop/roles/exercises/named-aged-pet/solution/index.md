---
title: 'Oplossing: Een huisdier met naam en leeftijd'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

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

🦋 Je kunt de broncode vinden in het bestand [named-aged-pet.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/named-aged-pet.raku).

## Uitvoer

```
I am Rex
3 years
```

## Opmerkingen

1. `Pet` stelt twee rollen tegelijk samen en krijgt zo zowel de methode `label` als de methode `status`.

1. De methode van elke rol gebruikt een attribuut (`name` of `age`) dat de klasse `Pet` levert.

{% include nav.html %}
