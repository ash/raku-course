---
title: Conversione di tipo per variabili tipizzate
---

{% include menu.html %}

I vincoli di tipo sono abbastanza rigidi. Ad esempio, non è possibile assegnare un valore `Num`, anche se contiene un intero, a una variabile dichiarata come `Int`:

```raku
my Int $x = 42;
# $x = 42e1; # Errore
```

Usa [uno dei metodi](/it/essentials/coercion/#topics-in-this-section) per castare il valore.

```raku
my Int $x = 42;
$x = 42e1.Int;
$x = Int(42e1);
```

{% include nav.html %}