---
title: Gebruik van unit sub
---

{% include menu.html %}

De `unit sub` constructie is een handige manier om de rest van het bestand het lichaam van de functie te maken! Wanneer gebruikt met `MAIN`, maakt het het mogelijk om af te komen van de accolades die vrijwel het hele bestand omarmen, evenals van onnodige inspringing.

Het gebruik van `unit sub` wordt gedemonstreerd in het volgende voorbeeld van een programma.

```raku
unit sub MAIN($a, $b);

my $sum = $a + $b;
say "De som van $a en $b is $sum.";
```

De `MAIN` functie is de enige functie in dit bestand. Als dit ook het geval is voor jouw programma, overweeg dan om `unit sub MAIN` te gebruiken zoals hierboven getoond.

{% include nav.html %}