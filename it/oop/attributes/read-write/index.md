---
title: Attributi in lettura e scrittura
translations_gpt:
---

{% include menu.html %}

Per impostazione predefinita, l'accessore creato da `has $.name` è di _sola lettura_. Il valore viene inizializzato nel costruttore, dopodiché puoi leggerlo ma non cambiarlo dall'esterno dell'oggetto. Assegnarvi qualcosa è un errore:

```raku
class Dog {
    has $.name;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
```

Il programma si ferma con:

```
Cannot modify an immutable Str (Rex)
```

Per permettere che il valore venga cambiato attraverso l'accessore, contrassegna l'attributo con il tratto `is rw`:

```raku
class Dog {
    has $.name is rw;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
say $rex.name; # Max
```

Ora l'accessore restituisce un contenitore scrivibile, quindi l'assegnamento funziona e il `name` dell'oggetto diventa `Max`.

{% include nav.html %}
