---
title: 'Oplossing: Vormen die een rol delen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
role Shape {
    method area { ... }
}

class Circle does Shape {
    has $.radius;
    method area { 3.14159 * $.radius ** 2 }
}

class Square does Shape {
    has $.side;
    method area { $.side ** 2 }
}

sub describe(Shape $shape) {
    say "{$shape.^name}: {$shape.area}";
}

for Circle.new(radius => 2), Square.new(side => 3) -> $shape {
    describe($shape);
}
```

🦋 Je kunt de broncode vinden in het bestand [shapes-role.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/shapes-role.raku).

## Uitvoer

```
Circle: 12.56636
Square: 9
```

## Opmerkingen

1. Strikt genomen zou de aanroep `$shape.area` *zonder* de rol ook werken. Raku
lost methoden op naam op op het moment van de aanroep, dus zolang elk object
toevallig een methode `area` heeft, draait de lus — dat staat bekend als *duck typing*.
Wat levert de rol ons hier dan werkelijk op? Twee garanties.

1. **De rol is een type dat je kunt eisen.** `describe` is gedeclareerd als
`sub describe(Shape $shape)`, dus accepteert ze alleen objecten die `Shape` doen en weigert ze
al het andere *voordat de body draait*. Geef haar een gewoon getal en het programma weigert
te compileren:

    ```raku
    describe(42);
    # Calling describe(Int) will never work with declared signature (Shape $shape)
    ```

    Zonder de rol bestaat zo'n type niet — een duck-getypeerde routine zou elk
argument aannemen en pas later, diep binnenin, ontploffen wanneer ze bij `.area` komt.

1. **De rol is een contract.** `area` als stomp declareren (`method area { ... }`)
dwingt elke klasse die de rol doet haar eigen `area` te leveren. Vergeet die, en de
fout kan niet onopgemerkt blijven:

    ```raku
    class Triangle does Shape {
        has $.base;
        has $.height;
    }
    # Method 'area' must be implemented by Triangle because it is required by roles: Shape.

    my $t = Triangle.new(base => 3, height => 4);
    say $t.area; # Stub code executed
    ```

    Rakudo meldt de ontbrekende methode zodra de klasse *samengesteld* wordt — het
programma weigert te compileren voordat er ook maar één `Triangle`-object bestaat. En zelfs in
een implementatie die de klassedefinitie aanvaardt, komt de fout uiterlijk aan het licht
wanneer de methode gebruikt wordt: de stomp `{ ... }` die van de rol geërfd is, is echte
code die met `Stub code executed` sterft zodra iemand haar aanroept.

1. `$shape.^name` vraagt het object om zijn klassenaam, dus labelt dezelfde `describe`
elk resultaat correct zonder het type van tevoren te kennen.

{% include nav.html %}
