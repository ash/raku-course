---
title: Het resultaat retourneren
---

{% include menu.html %}

Functies doen vaak niet alleen iets, maar retourneren ook een resultaat. Bijvoorbeeld, in functionele programmering zouden functies geen bijwerkingen moeten hebben, zoals printen naar de console. Desalniettemin beperkt Raku je niet om dit te doen. Laten we eens kijken hoe we een waarde uit een functie kunnen retourneren en hoe we deze kunnen verkrijgen in de aanroepende code.

```raku
sub add($x, $y) {
    return $x + $y;
}

my $sum = add(10, 20);
say $sum; # 30
```

Hier neemt de functie genaamd `add` twee getallen en retourneert hun som. Een expliciete `return` wordt gebruikt. Aan de aanroepende kant kan de waarde die de functie retourneert worden gebruikt als elke andere waarde. In het bovenstaande programma wordt deze toegewezen aan een variabele.

## De laatst geëvalueerde waarde

In Raku is een expliciete `return` niet vereist als het resultaat dat je wilt retourneren uit een functie de laatst berekende waarde in het lichaam is. Onze `add` functie kan worden vereenvoudigd:

```raku
sub add($x, $y) {
    $x + $y
}
```

Zoals je misschien hebt opgemerkt, is er geen puntkomma aan het einde van de regel omdat dit niet nodig is wanneer de regel het huidige codeblok beëindigt.

Dergelijke triviale en kleine functies worden vaak in één regel geformatteerd voor een compacter code:

```raku
sub add($x, $y) { $x + $y }
```

## Geen retourgegevens

Als je moet terugkeren uit een functie voordat het einde van het lichaam is bereikt, en de functie geen resultaat retourneert, gebruik dan een kale `return`.

```raku
sub test($x) {
    return if $x <= 10;
    say "$x is boven de limiet";
}
```

{% include nav.html %}