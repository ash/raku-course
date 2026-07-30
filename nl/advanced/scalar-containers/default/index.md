---
title: Standaardwaarden
translations_gpt:
---

{% include menu.html %}

Wanneer een nieuwe scalaire variabele wordt aangemaakt zonder directe toewijzing, bevat de container toch een waarde — zijn standaardwaarde. De exacte standaardwaarde hangt af van het type van de variabele.

Het onderstaande programma is niet de beste manier om Raku te gebruiken, maar het illustreert het punt:

```raku
my $int;
say $int + 5;
```

De uitvoer bevat `5`, wat je misschien verwachtte als je ervan uitging dat de standaardwaarde van `$int` gelijk is aan `0`. Het programma drukt echter ook een waarschuwing af:

```
Use of uninitialized value $int of type Any in numeric context
  in block <unit> at t.raku line 2
5
```

Om deze onzekerheid weg te nemen, wijs je ofwel expliciet een waarde toe:

```raku
my $int = 0;
say $int + 5; # 5
```

Of declareer je een standaardwaarde met de `is default`-eigenschap:

```raku
my $int is default(0);
say $int + 5; # 5
```

De standaardwaarde is niet beperkt tot nul. Het kan elke waarde zijn die je geschikt acht, bijvoorbeeld:

```raku
my $int is default(1);
say $int + 5; # 6
```

{% include nav.html %}
