---
title: 'Lösung: Formen mit gemeinsamer Rolle'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

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

🦋 Du findest den Quellcode in der Datei [shapes-role.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/shapes-role.raku).

## Ausgabe

```
Circle: 12.56636
Square: 9
```

## Kommentare

1. Streng genommen wirkte der Aufruf `$shape.area` auch *ohne* jede Rolle. Raku löst
Methoden im Augenblick des Aufrufs über den Namen auf, solange also jedes Objekt zufällig
eine Methode `area` hat, läuft die Schleife — das ist als *Ententypisierung* bekannt. Was
bringt uns die Rolle hier also wirklich? Zwei Zusicherungen.

1. **Die Rolle ist ein Typ, den man verlangen kann.** `describe` ist als
`sub describe(Shape $shape)` erklärt, nimmt also nur Objekte an, welche `Shape` erfüllen,
und weist alles andere zurück, *bevor der Rumpf läuft*. Übergeben Sie ihr eine schlichte
Zahl, und das Programm weigert sich zu übersetzen:

    ```raku
    describe(42);
    # Calling describe(Int) will never work with declared signature (Shape $shape)
    ```

    Ohne die Rolle gibt es keinen solchen Typ — eine entengetypte Routine nähme jedes
Argument an und flöge erst später tief im Inneren auseinander, wenn sie `.area` erreicht.

1. **Die Rolle ist ein Vertrag.** `area` als Stummel zu erklären (`method area { ... }`)
zwingt jede Klasse, welche die Rolle erfüllt, ihr eigenes `area` beizusteuern. Vergessen
Sie es, und der Fehler kann nicht unbemerkt bleiben:

    ```raku
    class Triangle does Shape {
        has $.base;
        has $.height;
    }
    # Method 'area' must be implemented by Triangle because it is required by roles: Shape.

    my $t = Triangle.new(base => 3, height => 4);
    say $t.area; # Stub code executed
    ```

    Rakudo meldet die fehlende Methode, sobald die Klasse *zusammengesetzt* wird — das
Programm weigert sich zu übersetzen, bevor auch nur ein einziges `Triangle`-Objekt
besteht. Und selbst in einer Umsetzung, welche die Klassendefinition annähme, träte der
Fehler spätestens bei der Verwendung der Methode hervor: Der von der Rolle geerbte Stummel
`{ ... }` ist echter Code, der mit `Stub code executed` stirbt, sobald ihn jemand aufruft.

1. `$shape.^name` fragt das Objekt nach seinem Klassennamen, dasselbe `describe`
beschriftet also jedes Ergebnis richtig, ohne den Typ im Voraus zu kennen.

{% include nav.html %}
