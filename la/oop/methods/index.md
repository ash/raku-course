---
title: Methodi
translations_gpt:
---

{% include menu.html %}

Attributa obiecto data dant; _methodi_ ei agendi rationem dant. Methodus est subprogramma quod ad classem pertinet et in obiecto vocatur. Unam per verbum `method` declaras:

```raku
class Dog {
    has $.name;

    method bark {
        return $.name ~ ' says Woof!';
    }
}
```

Voca methodum in obiecto per punctum, sicut accessorem:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.bark; # Rex says Woof!
```

Intra methodum, obiectum in quo methodus vocata est ut `self` praesto est. Attributa per accessores suos attinguntur, `$.name`, `$.age` et cetera scriptos. Haec etiam intra chordas interpolatas operantur:

```raku
class Dog {
    has $.name;

    method greet {
        "Hello, my name is $.name";
    }
}

say Dog.new(name => 'Rex').greet; # Hello, my name is Rex
```

Argumenta sequentia attributa privata tractant (nunc cum methodos habemus quibus eis utamur), methodos quae parametros accipiunt, et methodos quae alias methodos vocant.

{% include nav.html %}
