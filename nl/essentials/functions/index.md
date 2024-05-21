---
title: Functies maken en aanroepen in Raku
---

{% include menu.html %}

Je hebt het laatste gedeelte van het eerste deel van de cursus bereikt. Door dit te voltooien, heb je alle kennis die nodig is om vrijwel _elk_ programma in Raku te maken. Het onderwerp van dit gedeelte is _functies_, of _subroutines_, of zelfs gewoon _routines_.

Een functie is een herbruikbaar deel van de code met een eigen naam. Je kunt functies _aanroepen_ vanuit verschillende plaatsen in het programma.

## Een functie maken

Om een functie te maken, gebruik je het sleutelwoord `sub` gevolgd door de naam van de functie. Het lichaam van de functie is ingesloten in een paar accolades.

```raku
sub greet {
    say 'Hello, World!';
}
```

## Een functie gebruiken

Om de functie te gebruiken, zet je gewoon de naam ervan op de plaats waar je deze wilt aanroepen. In Raku kan de definitie van een functie zich vóór of na de plaats bevinden waar de functie wordt gebruikt.

```raku
say 'Dit is wat het eerste programma meestal afdrukt:';
greet;    

sub greet {
    say 'Hello, World!';
}
```

Het programma drukt beide berichten af:

```console
$ raku t.raku
Dit is wat het eerste programma meestal afdrukt:
Hello, World!
```

Laten we nu naar andere details van het maken en gebruiken van functies kijken.

{% include nav.html %}