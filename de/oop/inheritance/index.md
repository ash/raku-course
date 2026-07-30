---
title: Vererbung
translations_gpt:
---

{% include menu.html %}

Mit _Vererbung_ kann eine Klasse auf einer anderen aufbauen. Eine Klasse, die mit `is` hinter ihrem Namen deklariert wird, erbt die Attribute und Methoden der genannten Klasse — ihrer _Elternklasse_ (oder _Basisklasse_).

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

`Dog is Animal` bedeutet, dass ein `Dog` eine Art `Animal` ist. Ohne dass Sie etwas Neues schreiben, hat `Dog` bereits das Attribut `name` und die Methode `speak` von `Animal`:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.name;  # Rex
say $rex.speak; # some sound
```

Ein `Dog`-Objekt wird auch als `Animal` erkannt:

```raku
say Dog.new ~~ Animal; # True
```

Der Smartmatch `~~` gegen einen Typ ist wahr, wenn das Objekt von diesem Typ ist oder von ihm erbt. Das nächste Thema zeigt, wie eine Kindklasse eine geerbte Methode durch ihre eigene Fassung ersetzen kann.

{% include nav.html %}
