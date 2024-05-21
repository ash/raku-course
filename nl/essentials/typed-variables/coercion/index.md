---
title: Typeconversie voor getypeerde variabelen
---

{% include menu.html %}

Typebeperkingen zijn streng genoeg. Bijvoorbeeld, je kunt geen `Num`-waarde toewijzen, zelfs als het een geheel getal bevat, aan een variabele die als `Int` is gedeclareerd:

```raku
my Int $x = 42;
# $x = 42e1; # Fout
```

Gebruik [een van de methoden](/nl/essentials/coercion/#topics-in-this-section) om de waarde te casten.

```raku
my Int $x = 42;
$x = 42e1.Int;
$x = Int(42e1);
```

{% include nav.html %}