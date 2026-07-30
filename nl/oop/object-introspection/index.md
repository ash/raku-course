---
title: Objecten introspecteren
translations_gpt:
---

{% include menu.html %}

In de [sectie over containers](/nl/advanced/containers) gebruikte je `.^name` om een waarde naar haar type te vragen. Dezelfde meta-aanroepen met `.^` laten je een klasse en haar objecten inspecteren: hun namen, hun attributen, en waar ze in een hiërarchie zitten.

De metamethode `.^name` geeft de naam van de klasse terug:

```raku
class Dog {
    has Str $.name;
    method bark { 'Woof' }
}

say Dog.^name; # Dog
```

De metamethode `.^attributes` somt de attributen van de klasse op. Elk wordt getoond met zijn type en zijn interne private naam (de `$!`-vorm die je bij [private attributen](/nl/oop/methods/private-attributes) tegenkwam):

```raku
say Dog.^attributes; # (Str $!name)
```

Introspectie is nuttig voor tools die generiek met objecten werken — bijvoorbeeld om elk attribuut van een object af te drukken zonder de klasse van tevoren te kennen. Het volgende onderwerp bekijkt hoe je de overervingsketen van een klasse kunt zien.

{% include nav.html %}
