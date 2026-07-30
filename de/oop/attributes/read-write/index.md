---
title: Les- und schreibbare Attribute
translations_gpt:
---

{% include menu.html %}

Standardmäßig ist der Accessor, den `has $.name` erzeugt, _nur lesbar_. Der Wert wird im Konstruktor gesetzt; danach können Sie ihn lesen, aber von außerhalb des Objekts nicht mehr ändern. Eine Zuweisung ist ein Fehler:

```raku
class Dog {
    has $.name;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
```

Das bricht ab mit:

```
Cannot modify an immutable Str (Rex)
```

Damit der Wert über den Accessor geändert werden darf, versehen Sie das Attribut mit dem Trait `is rw`:

```raku
class Dog {
    has $.name is rw;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
say $rex.name; # Max
```

Jetzt liefert der Accessor einen schreibbaren Container, die Zuweisung funktioniert also, und der `name` des Objekts wird zu `Max`.

{% include nav.html %}
