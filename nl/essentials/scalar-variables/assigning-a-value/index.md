---
title: Een waarde toewijzen
---

{% include menu.html %}

Gebruik de `=` operator om een nieuwe waarde in een scalair container te plaatsen.

```raku
my $name;
$name = 'Anna';
```

Je kunt nu de variabele gebruiken en bijvoorbeeld afdrukken:

```raku
say $name;
```

## Meervoudige toewijzingen

Meerdere variabelen kunnen tegelijk worden toegewezen. Bijvoorbeeld, dit is hoe je twee scalairen in een enkele instructie toewijst:

```raku
my ($a, $b);
($a, $b) = 10, 20;
```

Merk op dat je de haakjes aan de linkerkant niet kunt weglaten. Maar je kunt ze toevoegen voor symmetrie aan de rechterkant:

```raku
($a, $b) = (10, 20);
```

{% include nav.html %}