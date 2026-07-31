---
title: Ereditarietà
translations_gpt:
---

{% include menu.html %}

L'_ereditarietà_ permette a una classe di costruire su un'altra. Una classe dichiarata con `is` dopo il proprio nome eredita gli attributi e i metodi della classe che nomina — la sua classe _genitrice_ (o _base_).

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

`Dog is Animal` significa che un `Dog` è un tipo di `Animal`. Senza scrivere nulla di nuovo, `Dog` ha già l'attributo `name` e il metodo `speak` di `Animal`:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.name;  # Rex
say $rex.speak; # some sound
```

Un oggetto `Dog` viene riconosciuto anche come `Animal`:

```raku
say Dog.new ~~ Animal; # True
```

Lo smart-match `~~` contro un tipo è vero quando l'oggetto è di quel tipo o ne eredita. L'argomento successivo mostra come una classe figlia possa sostituire un metodo ereditato con una versione propria.

{% include nav.html %}
