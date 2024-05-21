---
title: Return type of functions
---

{% include menu.html %}

Het resultaat van de functie kan ook expliciet getypt worden. Er zijn een paar manieren om dat in code uit te drukken.

```raku
sub add(Int $x, Int $y) returns Int { $x + $y }

my Int sub add(Int $x, Int $y) { $x + $y }

sub add(Int $x, Int $y) of Int { $x + $y }

sub add(Int $x, Int $y --> Int) { $x + $y }
```

Kies degene die je het meest bevalt. Let op dat in het vierde voorbeeld het retourtype binnen de haakjes met functieparameters wordt geschreven.

{% include nav.html %}