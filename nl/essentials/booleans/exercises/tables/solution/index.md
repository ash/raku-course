---
title: Oplossing voor 'Booleaanse tabellen’
---

{% include menu.html %}

Hier is een mogelijk programma dat alle resultaten van Booleaanse operaties afdrukt.

## Code

```raku
say 'True && True is ', True && True; 
say 'True && False is ', True && False;
say 'False && True is ', False && True;
say 'False && False is ', False && False;

say 'True || True is ', True || True; 
say 'True || False is ', True || False;
say 'False || True is ', False || True;
say 'False || False is ', False || False;

say 'True ^^ True is ', True ^^ True; 
say 'True ^^ False is ', True ^^ False;
say 'False ^^ True is ', False ^^ True;
say 'False ^^ False is ', False ^^ False;
```

🦋 Je kunt de volledige code vinden in het bestand [tables.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/tables.raku).

## Uitvoer

Voer het programma uit, en het drukt de volgende tabel af.

```console
$ raku tables.raku
True && True is True
True && False is False
False && True is False
False && False is False
True || True is True
True || False is True
False || True is True
False || False is False
True ^^ True is Nil
True ^^ False is True
False ^^ True is True
False ^^ False is False
```

## Opmerkingen

Merk op dat vanwege de hogere prioriteit van de Booleaanse operaties, je ze niet tussen haakjes hoeft te zetten. Dit is echter niet het geval als je stringconcatenatie gebruikt:

```raku
say 'True && True is ' ~ (True && True);
```

Als alternatief kun je [code-interpolatie](/nl/essentials/strings/code-interpolation) gebruiken.

{% include nav.html %}