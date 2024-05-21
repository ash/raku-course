---
title: Reeksen
---

{% include menu.html %}

Reeksen in Raku genereren lijsten van opeenvolgende items.

In het eenvoudigste geval is een reeks een lijst van oplopende gehele getallen. Om een reeks te maken, gebruik je de `..` operator en de twee waarden die de minimum- en maximumwaarden van de reeks definiëren:

```raku
1 .. 5
```

Spaties rond de operator zijn optioneel. De volgende constructie kan geschreven worden als:

```raku
1..5
```

Hoewel een reeks een middel is om lijsten te genereren, is het nog steeds een enkel object, dus het kan worden opgeslagen in een scalair variabele:

```raku
my $r = 1 .. 5;
```

## Niet alleen nummers

Het is mogelijk om een reeks te construeren van andere datatypes, waarvoor Raku weet hoe ze moeten worden opgehoogd. Bijvoorbeeld:

```raku
my $letters = 'a' .. 'z';
```

Reeksen zijn objecten van hun eigen datatype in Raku. Het type van de variabele `$r` is `Range`.

{% include nav.html %}