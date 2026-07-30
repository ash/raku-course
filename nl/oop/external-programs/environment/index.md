---
title: De omgeving
translations_gpt:
---

{% include menu.html %}

Elk programma wordt gestart met een verzameling _omgevingsvariabelen_ — benoemde waarden als `HOME`, `PATH` of `USER` die het besturingssysteem levert. In Raku zijn ze beschikbaar in de dynamische hash `%*ENV`:

```raku
say %*ENV<HOME>; # the home directory, e.g. /home/anna
```

Je leest een omgevingsvariabele door `%*ENV` met haar naam te indexeren. Omdat het een gewone hash is, kun je ook nagaan of een variabele gezet is, of haar wijzigen voor programma's die je start:

```raku
%*ENV<GREETING> = 'Hello';
say %*ENV<GREETING>; # Hello
```

Een sleutel in `%*ENV` zetten voegt hem toe aan de omgeving die elk programma erft dat je daarna met `run` of `shell` start, en zo geef je configuratie aan een kindprogramma door:

```raku
%*ENV<GREETING> = 'Hello';

my $proc = run 'sh', '-c', 'echo $GREETING', :out;
say $proc.out.slurp(:close).chomp; # Hello
```

De variabele wordt in de omgeving van jouw programma gezet *voordat* het kind gestart wordt, dus de shell die `run` start heeft `GREETING` al in zijn eigen omgeving en kan hem terugsturen. Elke variabele die je zo zet bereikt elk programma dat je daarna start.

De twigil `*` vertelt je dat `%*ENV` een dynamische variabele is, net als `$*OUT` uit het deel over invoer en uitvoer. Een paar andere variabelen met een ster beschrijven de wereld van het draaiende programma — `@*ARGS` bevat de opdrachtregelargumenten, en `$*PROGRAM-NAME` is de naam van het script zelf. Samen laten ze een programma de context begrijpen waarin het gestart is.

{% include nav.html %}
