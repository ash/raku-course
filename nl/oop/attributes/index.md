---
title: Attributen
translations_gpt:
---

{% include menu.html %}

Een lege klasse is niet erg nuttig. Om een object zijn eigen gegevens te laten dragen, geef je de klasse _attributen_. Een attribuut wordt binnen de klasse gedeclareerd met het sleutelwoord `has`:

```raku
class Dog {
    has $.name;
    has $.age;
}
```

Elk object van de klasse krijgt zijn eigen exemplaar van deze attributen. Je stelt hun waarden in wanneer je het object maakt, door ze als benoemde argumenten aan `new` mee te geven:

```raku
class Dog {
    has $.name;
    has $.age;
}

my $rex = Dog.new(name => 'Rex', age => 3);
```

De `$.` in `has $.name` doet twee dingen tegelijk: hij declareert een attribuut, en hij maakt een methode met dezelfde naam — een _accessor_ — die de waarde van het attribuut teruggeeft:

```raku
say $rex.name; # Rex
say $rex.age;  # 3
```

Verschillende objecten bevatten hun eigen waarden, onafhankelijk van elkaar:

```raku
my $rex  = Dog.new(name => 'Rex',  age => 3);
my $fido = Dog.new(name => 'Fido', age => 5);

say $rex.name;  # Rex
say $fido.name; # Fido
```

De volgende onderwerpen laten zien hoe je attributen wijzigbaar maakt en hoe je ze standaardwaarden geeft. (Er is ook een manier om _private_ attributen te declareren, verborgen voor de buitenwereld; daar komen we op terug zodra methoden zijn geïntroduceerd.)

{% include nav.html %}
