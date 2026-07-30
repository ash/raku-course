---
title: Gegevenstypen en scalaire containers
translations_gpt:
---

{% include menu.html %}

Laten we een programma bekijken dat dezelfde variabele hergebruikt om verschillende soorten gegevens op te slaan. We gebruiken `dd` om te zien wat de container bij elke stap bevat. Dit voorbeeld is hier ter demonstratie en is geen aanbevolen programmeerstijl.

```raku
my $value;
dd $value;

$value = 42;
dd $value;

$value = 'forty-two';
dd $value;
```

Elke `dd`-aanroep toont wat de variabele `$value` op dat moment bevat:

```
$value = Any
$value = 42
$value = "forty-two"
```

In het begin is de variabele leeg, en `dd` rapporteert de waarde als `Any` — de ongedefinieerde basiswaarde waarmee een container zonder type begint. Na de toewijzingen toont `dd` het gehele getal en vervolgens de string.

Merk op dat `dd` hier geen type voor de naam afdrukt. Een container zonder type bindt zich niet aan een bepaald type, dus alleen de waarde wordt getoond. Zoals je in het volgende onderwerp zult zien, gedraagt [een container met een gedeclareerd type](/nl/advanced/scalar-containers/type-constraints) zich anders.

{% include nav.html %}
