---
title: Containers introspecteren
---

{% include menu.html %}

_Introspectie_ betekent dat je een waarde of een container vraagt over zichzelf — zijn type, zijn onderliggende container en het mechanisme erachter. Je hebt al één introspectietool gebruikt, `.^name`, om het type van een waarde af te drukken.

Raku biedt een kleine familie van zulke tools, geschreven in hoofdletters: `WHAT`, `VAR`, `WHO` en `HOW`. Ze worden soms _pseudo-methodes_ genoemd, omdat de compiler ze een speciale betekenis geeft in plaats van ze als gewone methodes te behandelen. Dit gedeelte bekijkt ze allemaal.

Ter herinnering: hier rapporteert `.^name` hoe het type van een container zonder typebeperking verandert als je er verschillende waarden in opslaat:

```raku
my $value;
say $value.^name; # Any

$value = 42;
say $value.^name; # Int

$value = 'forty-two';
say $value.^name; # Str
```

De container begint als `Any` en rapporteert vervolgens het type van de waarde die hij op dat moment bevat.

{% include nav.html %}
