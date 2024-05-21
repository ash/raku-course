---
title: Typen converteren met voorvoegseloperatoren
---

{% include menu.html %}

Een andere manier om het type van een object te transformeren is door voorvoegseloperatoren te gebruiken. Dit zijn eenkarakteroperatoren die direct voor de waarde (of een variabele) worden geplaatst.

`~` | String-coërcie
`+` | Numerieke coërcie
`?` | Booleaanse coërcie

Overweeg een voorbeeld van het creëren van een Booleaanse waarde uit een geheel getal:

```raku
say ?42; # True
```

Converteren naar een string is vergelijkbaar:

```raku
my $n = -30;
my $s = ~$n;
say $s.chars; # 3, aangezien "-30" 3 tekens heeft
```

Merk op dat bij numerieke conversie het type van de geconverteerde waarde verschilt afhankelijk van het betreffende getal. Vergelijk de volgende conversies van strings:

```raku
say (+'100').WHAT;   # (Int)
say (+'3.14').WHAT;  # (Rat)
say (+'27E-1').WHAT; # (Num)
```

Voor Booleaanse conversies is er een andere routine genaamd `so`. Je kunt deze gebruiken als een voorvoegseloperator of als een methode:

```raku
my $value = 42;
say so $value; # True
say $value.so; # True
```

{% include nav.html %}