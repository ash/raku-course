---
title: 'Solution: Een heredoc'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $name  = 'Anna';
my $item  = 'Raku Book';
my $price = 25;
my $count = 3;

print qq:to/END/;
    Dear $name,
    You ordered $count copies of "$item".
    That comes to {$count * $price} dollars.
    Thank you!
    END
```

🦋 Je kunt de broncode vinden in het bestand [a-heredoc.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/a-heredoc.raku).

## Uitvoer

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Opmerkingen

1. De heredoc begint met `qq:to` in plaats van `q:to`, dus hij interpoleert. Net als een `qq`-string vult hij scalars in — `$name`, `$count`, `$item` — *en* voert hij ingebedde code uit: het blok `{$count * $price}` berekent `3 * 25`, dus het totaal `75` verschijnt inline.

1. De dubbele aanhalingstekens rond `"$item"` zijn hier gewoon letterlijke tekens; binnen een heredoc is er geen scheidingsteken om te escapen, dus ze worden afgedrukt zoals ze zijn terwijl `$item` toch wordt geinterpoleerd.

1. De inhoud en het afsluitende `END` zijn met dezelfde vier spaties ingesprongen. De inspringging van het afsluitwoord wordt van elke regel verwijderd, dus die vier spaties bereiken de string nooit — de uitvoer begint aan de linkerkantlijn.

1. De heredoc eindigt al met een nieuwe regel, dus `print` wordt gebruikt in plaats van `say` om te voorkomen dat er een tweede lege regel wordt toegevoegd.

{% include nav.html %}
