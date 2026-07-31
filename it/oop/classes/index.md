---
title: Classi
translations_gpt:
---

{% include menu.html %}

Finora i tipi di dati che hai usato — numeri, stringhe, array e così via — erano tutti incorporati in Raku. La _programmazione a oggetti_ ti permette di definire tipi tuoi, chiamati _classi_, e di creare valori di quei tipi, chiamati _oggetti_.

Una classe si definisce con la parola chiave `class`, seguita da un nome e da un blocco:

```raku
class Dog {
}
```

Questa classe `Dog` per ora è vuota, ma è già un tipo nuovo. Per creare un oggetto della classe — un'_istanza_ — chiama il metodo `new` sul nome della classe:

```raku
class Dog {
}

my $rex = Dog.new;
say $rex; # Dog.new
```

Ora la variabile `$rex` contiene un oggetto `Dog`. Ogni chiamata a `new` crea un oggetto separato:

```raku
my $rex = Dog.new;
my $fido = Dog.new;
```

`$rex` e `$fido` sono due cani distinti, anche se la classe non ha ancora alcun contenuto. Nelle sezioni che seguono darai a una classe dati propri (gli _attributi_) e comportamenti propri (i _metodi_). Il primo argomento guarda più da vicino la differenza fra una classe e le sue istanze.

{% include nav.html %}
