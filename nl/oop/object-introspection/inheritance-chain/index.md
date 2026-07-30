---
title: De overervingsketen
translations_gpt:
---

{% include menu.html %}

Wanneer de ene klasse van de andere erft, kun je de hele keten van typen opvragen waarop ze gebouwd is. De metamethode `.^mro` geeft die keten terug — de naam staat voor _method resolution order_, de volgorde waarin Raku naar een methode zoekt.

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^mro; # ((Dog) (Animal) (Any) (Mu))
```

Van links gelezen: een `Dog` is eerst zichzelf, dan een `Animal` (zijn ouder), dan `Any` en `Mu` — de twee typen waarvan elk Raku-object helemaal bovenaan erft. Wanneer je een methode op een `Dog` aanroept, doorzoekt Raku deze lijst van links naar rechts en gebruikt het de eerste passende methode die het vindt. Precies daarom overschrijft de methode van een kind die van de ouder: het kind staat eerder in de keten.

Voor een klasse zonder expliciete ouder is de keten korter — alleen de klasse zelf, gevolgd door `Any` en `Mu`.

{% include nav.html %}
