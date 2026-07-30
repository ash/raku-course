---
title: Methoden
translations_gpt:
---

{% include menu.html %}

Attribute geben einem Objekt seine Daten; _Methoden_ geben ihm Verhalten. Eine Methode ist eine Subroutine, die zu einer Klasse gehört und auf einem Objekt aufgerufen wird. Sie deklarieren sie mit dem Schlüsselwort `method`:

```raku
class Dog {
    has $.name;

    method bark {
        return $.name ~ ' says Woof!';
    }
}
```

Rufen Sie eine Methode auf einem Objekt mit dem Punkt auf, genau wie einen Accessor:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.bark; # Rex says Woof!
```

Innerhalb einer Methode steht das Objekt, auf dem die Methode aufgerufen wurde, als `self` zur Verfügung. Die Attribute erreichen Sie über ihre Accessoren, geschrieben als `$.name`, `$.age` und so weiter. Diese funktionieren auch in interpolierten Zeichenketten:

```raku
class Dog {
    has $.name;

    method greet {
        "Hello, my name is $.name";
    }
}

say Dog.new(name => 'Rex').greet; # Hello, my name is Rex
```

Die folgenden Themen behandeln private Attribute (nun, da wir Methoden haben, um sie zu nutzen), Methoden mit Parametern und Methoden, die andere Methoden aufrufen.

{% include nav.html %}
