---
title: Types converteren met type-coercie methoden
---

{% include menu.html %}

Om een type te converteren, of te _forceren_, roep je een methode aan met de naam van het datatype. Bijvoorbeeld, om een string om te zetten naar een integer:

```raku
my $howmany = '42';
my $n = $howmany.Int;
say $n;
```

In veel gevallen hoef je waarden niet expliciet te converteren, omdat Raku dat werk voor je doet. De volgende code werkt correct en voorspelbaar:

```raku
my $a = '10';
my $b = '20';
my $c = $a + $b;
say "The result is $c."; # The result is 30.
```

De twee variabelen, `$a` en `$b`, bevatten strings, maar ze worden gebruikt in een rekenkundige expressie met `+`. Op dit punt worden beide strings omgezet naar integers, en dus krijgt `$c` ook een integer. Een variabele die een integer bevat, wordt geïnterpoleerd in een string in de laatste regel, waar Raku de nodige bewerkingen uitvoert om het getal als een reeks cijfertekens weer te geven.

{% include nav.html %}