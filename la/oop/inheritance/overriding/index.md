---
title: Methodos superscribere
translations_gpt:
---

{% include menu.html %}

Classis filia propriam versionem methodi hereditariae praebere potest. Hoc _superscribere_ appellatur. Cum methodus in obiecto classis filiae vocatur, versio filiae loco parentis exsequitur.

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

`Dog` et `Cat` uterque `speak` superscribit. Methodus `intro`, ex `Animal` immutata hereditata, `self.speak` vocat — et illa vocatio adhibet quaecumque `speak` ad obiectum actuale pertinet:

```raku
say Dog.new(name => 'Rex').intro; # Rex says Woof
say Cat.new(name => 'Tom').intro; # Tom says Meow
```

Itaque eadem `intro` hereditata diversos effectus producit, quia unumquodque obiectum propriam `speak` secum fert. Haec est una ex ideis principalibus programmationis ad obiecta directae: codex communis qui ad certum genus obiecti in quo operatur se accommodat.

{% include nav.html %}
