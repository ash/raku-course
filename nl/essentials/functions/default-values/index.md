---
title: Standaardwaarden
---

{% include menu.html %}

Zowel positionele als benoemde parameters kunnen standaardwaarden hebben. Als de functie een standaardwaarde heeft voor de gegeven parameter, kan die parameter worden overgeslagen bij het aanroepen van de functie.

## Positionele parameters

Een voorbeeld van een standaardwaarde voor een functie met positionele parameters:

```raku
sub greet($name = 'World') {
    say "Hello, $name!";
}

greet('Merinda');
greet();
```

De eerste aanroep gebruikt de naam die als enig argument is doorgegeven en drukt dus `Hello, Merinda!` af. De tweede aanroep gebruikt de standaardwaarde en drukt `Hello, World!` af.

Als een functie meer dan één parameter heeft, kunnen de standaardwaarden alleen aan het einde van de lijst worden gebruikt:

```raku
sub f($a, $b, $c = 42, $d = 50) { . . . } # correct
# sub f($a = 10, $b = 20, $c, $d) { . . . } # FOUT
```

## Benoemde parameters

Dezelfde syntaxis wordt gebruikt voor het instellen van standaardwaarden voor benoemde parameters:

```raku
sub greet(:$name = 'World') {
    say "Hello, $name!";
}

greet(name => 'Merinda'); # Hello, Merinda!
greet(); # Hello, World!
```

De volgorde van de benoemde parameters maakt niet uit, dus elk van hen kan standaardwaarden hebben, zelfs de eerste in de lijst:

```raku
sub greet(:$greeting = 'Hello', :$name) {
    say "$greeting, $name!";
}

greet(name => 'Alla'); # Hello, Alla!
```

{% include nav.html %}