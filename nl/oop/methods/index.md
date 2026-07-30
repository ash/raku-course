---
title: Methoden
translations_gpt:
---

{% include menu.html %}

Attributen geven een object zijn gegevens; _methoden_ geven het gedrag. Een methode is een subroutine die bij een klasse hoort en die op een object wordt aangeroepen. Je declareert er een met het sleutelwoord `method`:

```raku
class Dog {
    has $.name;

    method bark {
        return $.name ~ ' says Woof!';
    }
}
```

Roep een methode op een object aan met de punt, net als een accessor:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.bark; # Rex says Woof!
```

Binnen een methode is het object waarop de methode is aangeroepen beschikbaar als `self`. De attributen bereik je via hun accessors, geschreven als `$.name`, `$.age` enzovoort. Die werken ook binnen geïnterpoleerde strings:

```raku
class Dog {
    has $.name;

    method greet {
        "Hello, my name is $.name";
    }
}

say Dog.new(name => 'Rex').greet; # Hello, my name is Rex
```

De volgende onderwerpen behandelen private attributen (nu we methoden hebben om ze te gebruiken), methoden die parameters aannemen, en methoden die andere methoden aanroepen.

{% include nav.html %}
