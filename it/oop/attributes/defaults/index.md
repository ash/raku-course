---
title: Valori predefiniti
translations_gpt:
---

{% include menu.html %}

A un attributo si può dare un _valore predefinito_, usato quando un oggetto viene creato senza un valore per quell'attributo. Scrivi il valore predefinito dopo l'attributo, con `=`:

```raku
class Dog {
    has Str $.name;
    has Rat $.weight = 4.0;
}
```

Nota che, come per le variabili, è possibile imporre il tipo degli attributi.

Se non passi `weight` a `new`, l'attributo prende il valore predefinito:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.weight; # 4
```

Puoi comunque scavalcare il valore predefinito passando un valore:

```raku
my $lighty = Dog.new(name => 'Lighty', weight => 3.2);
say $lighty.weight; # 3.2
```

Senza valore predefinito e senza un valore passato a `new`, un attributo è semplicemente non definito, esattamente come una variabile scalare appena dichiarata.

{% include nav.html %}
