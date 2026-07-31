---
title: Hereditas
translations_gpt:
---

{% include menu.html %}

_Hereditas_ permittit ut una classis super alteram aedificetur. Classis per `is` post nomen suum declarata attributa et methodos classis quam nominat heredat — classis _parentis_ (vel _basis_) suae.

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

`Dog is Animal` significat `Dog` genus quoddam `Animal` esse. Nullo novo scripto, `Dog` iam attributum `name` et methodum `speak` ex `Animal` habet:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.name;  # Rex
say $rex.speak; # some sound
```

Obiectum `Dog` etiam ut `Animal` agnoscitur:

```raku
say Dog.new ~~ Animal; # True
```

Comparatio callida `~~` contra genus vera est cum obiectum illius generis est vel ab eo heredat. Argumentum sequens ostendit quomodo classis filia methodum hereditariam sua versione substituere possit.

{% include nav.html %}
