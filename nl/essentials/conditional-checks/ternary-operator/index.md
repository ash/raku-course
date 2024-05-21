---
title: Ternary operator
---

{% include menu.html %}

De ternary operator in Raku is een tweedelige constructie `??` ... `!!`. Een Booleaanse test wordt gevolgd door twee expressies, waarvan er één wordt uitgevoerd afhankelijk van het resultaat van de test.

```raku
my $shines = 'Sun';
my $day-time = $shines eq 'Sun' ?? 'day' !! 'night';
say $day-time;
```

Met de huidige waarde van de variabele `$shines`, print dit programma `day`. Als je het verandert in `Moon`, zal het resultaat `night` zijn.

Het is mogelijk om ternary expressies te ketenen. Zorg er alleen voor dat het niet te ingewikkeld wordt.

```raku
my $hours = 20;
my $day-time =
    $hours <= 6 ?? 'Night' !!
    $hours <= 12 ?? 'Morning' !! 
    $hours <= 18 ?? 'Afternoon' !! 'Evening';
say $day-time;
```

Hier, afhankelijk van de waarde in `$hours`, zal een ander deel van de dag worden gerapporteerd.

{% include nav.html %}