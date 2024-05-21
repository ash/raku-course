---
title: String-arrays citeren
---

{% include menu.html %}

Voor string-arrays, waarbij de items korte strings zonder spaties zijn, biedt Raku een mooie syntaxis voor het initialiseren ervan.

```raku
my @digits = <zero one two three four five six seven eight nine>;
```

Het is aan jou om te beslissen of je extra spaties rond de hoekige haken toevoegt of niet. De compiler accepteert beide opties.

```raku
my @digits = < zero one two three four five six seven eight nine >;
```

Beide constructies zijn gelijk aan een eenvoudige variant:

```raku
my @digits = 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine';
```

%%tipblock
## Array vs Lijst

Let op dat in de bovenstaande voorbeelden de aanhalingstekens `< . . . >` een `List` creëren, geen `Array`. Je kunt dit bevestigen door de `WHAT`-methode aan te roepen:

```raku
say <a b c>.WHAT; # (List)
```

Desalniettemin, wanneer je het toewijst aan een array, krijg je een array met de elementen uit de lijst.

```raku
my @a = <a b c>;
say @a.WHAT; # (Array)
```

%%/tipblock

{% include nav.html %}