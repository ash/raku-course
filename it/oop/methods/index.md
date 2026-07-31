---
title: Metodi
translations_gpt:
---

{% include menu.html %}

Gli attributi danno a un oggetto i suoi dati; i _metodi_ gli danno un comportamento. Un metodo è una subroutine che appartiene a una classe e viene chiamata su un oggetto. Se ne dichiara uno con la parola chiave `method`:

```raku
class Dog {
    has $.name;

    method bark {
        return $.name ~ ' says Woof!';
    }
}
```

Chiama un metodo su un oggetto usando il punto, proprio come un accessore:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.bark; # Rex says Woof!
```

Dentro un metodo, l'oggetto su cui il metodo è stato chiamato è disponibile come `self`. Gli attributi si raggiungono attraverso i loro accessori, scritti `$.name`, `$.age` e così via. Funzionano anche dentro le stringhe interpolate:

```raku
class Dog {
    has $.name;

    method greet {
        "Hello, my name is $.name";
    }
}

say Dog.new(name => 'Rex').greet; # Hello, my name is Rex
```

Gli argomenti che seguono trattano gli attributi privati (ora che abbiamo i metodi per usarli), i metodi che prendono parametri e i metodi che chiamano altri metodi.

{% include nav.html %}
