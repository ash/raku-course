---
title: Lijsten
---

{% include menu.html %}

Een list is ook een geordende verzameling van waarden, maar in tegenstelling tot een array is hij _onveranderlijk_: je kunt de elementen niet wijzigen, toevoegen of verwijderen. Een list wordt geschreven als een door komma's gescheiden reeks waarden, vaak tussen haakjes geplaatst:

```raku
my $colours = ('red', 'green', 'blue');
```

Je kunt de elementen van een list opvragen via hun index, en vragen hoeveel er zijn, net als bij een array:

```raku
my $colours = ('red', 'green', 'blue');
say $colours[0];    # red
say $colours.elems; # 3
```

Het verschil wordt zichtbaar wanneer je probeert een element te wijzigen. Bij een array werkt het, omdat elk element een container is:

```raku
my @array = 1, 2, 3;
@array[0] = 10;
say @array; # [10 2 3]
```

Bij een list is het een fout, omdat de elementen van een list gewone waarden zijn, geen containers:

```raku
my $list = (1, 2, 3);
$list[0] = 10;
```

Het tweede programma stopt met een melding:

```
Cannot modify an immutable List ((1 2 3))
  in block <unit> at t.raku line 2
```

Gebruik dus een array (de `@` sigil) wanneer je de inhoud wilt wijzigen, en een list wanneer je alleen een vaste reeks waarden wilt bewaren.

{% include nav.html %}
