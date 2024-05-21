---
title: Oplossing van ‘True and False integers’
---

{% include menu.html %}

Om een getal naar een Booleaanse waarde om te zetten, kun je de `?` prefix-operator of een constructorvorm gebruiken, of de `Bool` methode aanroepen, of de `so` routine als een prefix-operator of een methode gebruiken:

```raku
my $value = 42;
say ?$value;
say Bool($value);
say $value.Bool;
say so $value;
say $value.so;
```

Het is vrij duidelijk dat niet-nul waarden worden omgezet naar `True`. We zijn dus vooral geïnteresseerd in het bekijken van die opties die `False` worden.

Alle nullen, geheel getal, floating-point, of rationeel, worden omgezet naar `False`:

```raku
my Int $int-zero = 0;
say ?$int-zero; # False

my Rat $rat-zero = 0.0;
say ?$rat-zero; # False

my Num $num-zero = 0e0;
say ?$num-zero; # False
```

Natuurlijk verandert er niets als je eerst probeert het getal te negateren:

```raku
my $int = 0;
say ?(-$int); # False
```

🦋 Je kunt het volledige programma met het bovenstaande voorbeeld vinden in het bestand [true-false-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/true-false-numbers.raku).

{% include nav.html %}