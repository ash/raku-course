---
title: Output met say
---

{% include menu.html %}

De `say` functie (of een subroutine, of simpelweg routine) print de waarden naar de standaard uitvoerstream, `STDOUT`. Als je het programma vanuit een terminal uitvoert, verschijnt de uitvoer daar. Als je online diensten gebruikt, wordt de uitvoer naar een speciaal gebied van de webpagina gestuurd.

Hier is een voorbeeld van het gebruik van `say`:

```raku
say 42;
```

Deze regel kan ofwel een deel van een groter programma zijn of het hele programma zelf. Het print duidelijk `42` naar de uitvoer.

Laten we nu met strings werken:

```raku
say 'Hello, World!';
```

Voilà, we hebben `Hello, World!` op het scherm.

De `say` routine kan meer dan één argument accepteren, dus we kunnen meer waarden in één keer printen:

```raku
say 42, 'Hello, World!';
```

Let er wel op dat de delen van deze uitvoer worden samengevoegd tot een enkele string: `42Hello, World!`, dus het is beter om een spatie tussen hen toe te voegen. En je zou dit probleem nu moeten kunnen oplossen, bijvoorbeeld, zo:

```raku
say 42, ' ', 'Hello, World!';
```

Na het printen van alle argumenten, voegt de `say` routine een nieuwe regelkarakter toe aan de uitvoer.

{% include nav.html %}