---
title: Afvlakken en itemisatie
---

{% include menu.html %}

Wanneer je een array in een ander array plaatst, voegt Raku hun elementen _niet_ automatisch samen. Bekijk het volgende programma:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;
my @c = @a, @b;

say @c.elems; # 2
say @c;       # [[1 2 3] [4 5]]
```

Het array `@c` heeft slechts twee elementen: de arrays `@a` en `@b`. Raku bewaart elke container als een enkel item in plaats van de inhoud uit te storten in het buitenste array. Hetzelfde gebeurt voor een waarde die tussen andere wordt geplaatst:

```raku
my @a = 1, 2, 3;
my @d = 0, @a, 99;
say @d; # [0 [1 2 3] 99]
```

Wanneer je daadwerkelijk een enkele platte reeks wilt, vraag er dan expliciet om met de `flat` routine:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat(@a, @b);       # (1 2 3 4 5)
say flat(@a, @b).elems; # 5
```

## Itemisatie (Itemization)

Soms wil je het tegenovergestelde: een container beschermen tegen flattening, zelfs binnen `flat`. De `$(...)` constructie _itemiseert_ zijn argument — het markeert het resultaat als een enkel item. Vergelijk het vorige voorbeeld met dit:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat($(@a), @b); # ([1 2 3] 4 5)
```

Hier houdt `$(@a)` het array `@a` als één element, terwijl `@b` nog steeds wordt platgeslagen tot zijn twee waarden. Dit is het `$` sigil-idee opnieuw: een `$` betekent "behandel dit als een enkel ding".

{% include nav.html %}
