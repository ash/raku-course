---
title: Sovrascrivere i metodi
translations_gpt:
---

{% include menu.html %}

Una classe figlia può fornire una propria versione di un metodo ereditato. Questo si chiama _sovrascrittura_. Quando il metodo viene chiamato su un oggetto della classe figlia, gira la versione della figlia invece di quella della genitrice.

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

`Dog` e `Cat` sovrascrivono ciascuno `speak`. Il metodo `intro`, ereditato immutato da `Animal`, chiama `self.speak` — e quella chiamata usa lo `speak` che appartiene all'oggetto vero e proprio:

```raku
say Dog.new(name => 'Rex').intro; # Rex says Woof
say Cat.new(name => 'Tom').intro; # Tom says Meow
```

Così lo stesso `intro` ereditato produce risultati diversi, perché ogni oggetto porta con sé il proprio `speak`. Questa è una delle idee centrali della programmazione a oggetti: codice condiviso che si adatta al tipo preciso di oggetto su cui lavora.

{% include nav.html %}
