---
title: Lijsten
---

{% include menu.html %}

Lijsten zijn vergelijkbaar met arrays, maar zijn onveranderlijk. Het is niet mogelijk om de grootte of de elementen van een lijst te veranderen. Gebruik haakjes om een lijst te maken:

```raku
my $odd = (1, 3, 5, 7, 9);
```

## Lijsten subscripten

Om individuele elementen van een lijst te benaderen, gebruik vierkante haken met de index:

```raku
say $odd[3]; # 7
```

Het is echter niet mogelijk om een nieuwe waarde in te stellen:

```raku
$odd[3] = 8; # Niet OK
```

Een dergelijke poging veroorzaakt een uitzondering:

    Kan een onveranderlijke Lijst niet wijzigen ((1 3 5 7 9))
      in block <unit> at t.raku line 4

## Een lijst toewijzen aan een array

Wat gebeurt er wanneer je een lijst opslaat in een variabele met het `@` symbool?

```raku
my @data = (40, 42, 44);
```

In dit geval bevat de `@data` variabele een array, en je kunt de elementen ervan wijzigen.

%%tipblock
## Variabele vs lijst

Merk op dat het feit dat lijsten onveranderlijk zijn niet betekent dat je de variabele die het bevat niet opnieuw kunt gebruiken.

```raku
my $elements = (1, 2);
say $elements[0]; # 1

$elements = (3, 4);
say $elements[0]; # 3
```

%%/tipblock

{% include nav.html %}