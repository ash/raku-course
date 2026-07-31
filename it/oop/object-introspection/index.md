---
title: Introspezione degli oggetti
translations_gpt:
---

{% include menu.html %}

Nella [sezione sui contenitori](/it/advanced/containers) hai usato `.^name` per chiedere a un valore il suo tipo. Le stesse metachiamate `.^` ti permettono di ispezionare una classe e i suoi oggetti: i loro nomi, i loro attributi e la loro posizione in una gerarchia.

Il metametodo `.^name` restituisce il nome della classe:

```raku
class Dog {
    has Str $.name;
    method bark { 'Woof' }
}

say Dog.^name; # Dog
```

Il metametodo `.^attributes` elenca gli attributi della classe. Ciascuno è mostrato con il suo tipo e il suo nome privato interno (la forma `$!` che hai incontrato con gli [attributi privati](/it/oop/methods/private-attributes)):

```raku
say Dog.^attributes; # (Str $!name)
```

L'introspezione è utile per gli strumenti che lavorano con gli oggetti in modo generico — per esempio per stampare ogni attributo di un oggetto senza conoscerne in anticipo la classe. L'argomento successivo esamina come vedere la catena di ereditarietà di una classe.

{% include nav.html %}
