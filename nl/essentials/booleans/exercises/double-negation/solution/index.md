---
title: Oplossing voor 'Dubbele negatie'
---

{% include menu.html %}

Laten we het programma uitbreiden om het tweede deel van de oefening op te lossen en dezelfde variabele hergebruiken:

## Code

```raku
my $value = False;
say !!$value;

$value = True;
say !!$value;
```

🦋 Je kunt de volledige code vinden in het bestand [double-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/double-negation.raku).

## Opmerkingen

Voordat we het programma uitvoeren, laten we nadenken over wat het zal afdrukken. Er zijn twee negatie-operatoren voor de variabele. Ze werken als twee negatie-operatoren. In het eerste geval wordt de waarde omgezet van `False` naar `True`, en dan onmiddellijk weer omgezet van `True` naar `False`. In het tweede geval is het algoritme hetzelfde: na twee negaties krijgen we de oorspronkelijke Booleaanse waarde.

## Uitvoer

Het programma geeft de volgende uitvoer, wat de bovenstaande overwegingen bevestigt:

```console
$ raku exercises/booleans/double-negation.raku
False
True
```

{% include nav.html %}