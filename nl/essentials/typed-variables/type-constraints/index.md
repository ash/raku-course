---
title: Type constraints
---

{% include menu.html %}

Raku is een taal met het zogenaamde graduele typesysteem. In de meeste gevallen hoef je je geen zorgen te maken over het specificeren van het type van de variabele. In sommige gevallen wil je echter het type voor de gegeven variabele beperken, en dat kun je doen door het type als volgt op te geven:

```raku
my Int $var = 42;
```

Nu is het mogelijk om een andere integer-waarde aan `$var` toe te wijzen, maar een poging om een string of zelfs een drijvend-komma getal toe te wijzen eindigt met een uitzondering:

```raku
my Int $var = 42;
$var = '314E-2';
```

Dit programma geeft de volgende foutmelding:

    Type check failed in assignment to $var; expected Int but got Str ("314E-2")
      in block <unit> at t.raku line 2

{% include nav.html %}