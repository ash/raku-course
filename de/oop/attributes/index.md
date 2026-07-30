---
title: Attribute
translations_gpt:
---

{% include menu.html %}

Eine leere Klasse ist nicht besonders nützlich. Damit ein Objekt eigene Daten tragen kann, geben Sie der Klasse _Attribute_. Ein Attribut wird innerhalb der Klasse mit dem Schlüsselwort `has` deklariert:

```raku
class Dog {
    has $.name;
    has $.age;
}
```

Jedes Objekt der Klasse erhält seine eigene Kopie dieser Attribute. Ihre Werte setzen Sie beim Erzeugen des Objekts, indem Sie sie `new` als benannte Argumente übergeben:

```raku
class Dog {
    has $.name;
    has $.age;
}

my $rex = Dog.new(name => 'Rex', age => 3);
```

Das `$.` in `has $.name` tut zweierlei auf einmal: Es deklariert ein Attribut und erzeugt eine gleichnamige Methode — einen _Accessor_ —, die den Wert des Attributs liefert:

```raku
say $rex.name; # Rex
say $rex.age;  # 3
```

Verschiedene Objekte halten ihre eigenen Werte, unabhängig voneinander:

```raku
my $rex  = Dog.new(name => 'Rex',  age => 3);
my $fido = Dog.new(name => 'Fido', age => 5);

say $rex.name;  # Rex
say $fido.name; # Fido
```

Die folgenden Themen zeigen, wie Sie Attribute veränderbar machen und wie Sie ihnen Standardwerte geben. (Es gibt außerdem eine Möglichkeit, _private_ Attribute zu deklarieren, die von außen verborgen sind; darauf kommen wir zurück, sobald Methoden eingeführt sind.)

{% include nav.html %}
