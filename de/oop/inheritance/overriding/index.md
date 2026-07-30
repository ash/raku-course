---
title: Methoden überschreiben
translations_gpt:
---

{% include menu.html %}

Eine Kindklasse kann ihre eigene Fassung einer geerbten Methode anbieten. Das nennt man _Überschreiben_. Wird die Methode auf einem Objekt der Kindklasse aufgerufen, läuft die Fassung des Kindes statt der des Elternteils.

```raku
class Animal {
    has $.name;
    method speak {
        'some sound';
    }
    method intro {
        "$.name says " ~ self.speak;
    }
}

class Dog is Animal {
    method speak {
        'Woof';
    }
}

class Cat is Animal {
    method speak {
        'Meow';
    }
}
```

`Dog` und `Cat` überschreiben jeweils `speak`. Die Methode `intro`, unverändert von `Animal` geerbt, ruft `self.speak` auf — und dieser Aufruf verwendet dasjenige `speak`, das zum tatsächlichen Objekt gehört:

```raku
say Dog.new(name => 'Rex').intro; # Rex says Woof
say Cat.new(name => 'Tom').intro; # Tom says Meow
```

Dasselbe geerbte `intro` liefert also verschiedene Ergebnisse, weil jedes Objekt sein eigenes `speak` mitbringt. Das ist eine der zentralen Ideen der objektorientierten Programmierung: gemeinsamer Code, der sich an die konkrete Art des Objekts anpasst, mit dem er arbeitet.

{% include nav.html %}
