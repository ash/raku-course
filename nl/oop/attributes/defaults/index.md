---
title: Standaardwaarden
translations_gpt:
---

{% include menu.html %}

Een attribuut kan een _standaardwaarde_ krijgen, die gebruikt wordt wanneer een object gemaakt wordt zonder een waarde ervoor. Schrijf de standaardwaarde achter het attribuut, met `=`:

```raku
class Dog {
    has Str $.name;
    has Rat $.weight = 4.0;
}
```

Merk op dat het net als bij variabelen mogelijk is het type van de attributen af te dwingen.

Als je `weight` niet aan `new` meegeeft, neemt het attribuut de standaardwaarde:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.weight; # 4
```

Je kunt de standaardwaarde nog steeds overschrijven door een waarde mee te geven:

```raku
my $lighty = Dog.new(name => 'Lighty', weight => 3.2);
say $lighty.weight; # 3.2
```

Zonder standaardwaarde, en zonder een waarde die aan `new` wordt meegegeven, is een attribuut eenvoudigweg ongedefinieerd, precies als een verse scalaire variabele.

{% include nav.html %}
