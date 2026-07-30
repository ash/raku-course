---
title: Overerving
translations_gpt:
---

{% include menu.html %}

Met _overerving_ kan de ene klasse op de andere voortbouwen. Een klasse die met `is` achter haar naam gedeclareerd wordt, erft de attributen en methoden van de klasse die ze noemt — haar _ouderklasse_ (of _basisklasse_).

```raku
class Animal {
    has $.name;
    method speak {
        'some sound';
    }
}

class Dog is Animal {
}
```

`Dog is Animal` betekent dat een `Dog` een soort `Animal` is. Zonder iets nieuws te schrijven heeft `Dog` al het attribuut `name` en de methode `speak` van `Animal`:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.name;  # Rex
say $rex.speak; # some sound
```

Een `Dog`-object wordt ook herkend als een `Animal`:

```raku
say Dog.new ~~ Animal; # True
```

De smart-match `~~` tegen een type is waar wanneer het object van dat type is of ervan erft. Het volgende onderwerp laat zien hoe een kindklasse een geërfde methode door haar eigen versie kan vervangen.

{% include nav.html %}
