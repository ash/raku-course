---
title: Captures in de vervanging
translations_gpt:
---

{% include menu.html %}

Het vervangingsdeel van `s///` kan verwijzen naar de captures die het patroon gemaakt heeft. Zo kun je de gematchte tekst herschikken in plaats van haar eenvoudigweg weg te gooien.

Zet bijvoorbeeld een datum die als `jaar-maand` geschreven is om naar `maand/jaar` door beide getallen te capturen en ze in de andere volgorde terug te zetten:

```raku
my $d = '2025-06';
$d ~~ s/ (\d+) '-' (\d+) /$1\/$0/;
say $d; # 06/2025
```

Het patroon captureert het jaar in `$0` en de maand in `$1`. In de vervanging staan `$1` en `$0` in omgekeerde volgorde, met een schuine streep ertussen. (De schuine streep wordt als `\/` ge-escapet zodat hij niet voor het einde van de substitutie aangezien wordt.) Merk op dat spaties aan de **patroon**kant onbetekenend zijn maar aan de **vervangings**kant letterlijk, dus is de vervanging zonder omringende spaties geschreven.

Benoemde captures werken op dezelfde manier. Dat laat een substitutie duidelijk lezen, zelfs wanneer er meerdere stukken zijn:

```raku
my $name = 'Doe, Jane';
$name ~~ s/ $<last>=(\w+) ', ' $<first>=(\w+) /$<first> $<last>/;
say $name; # Jane Doe
```

{% include nav.html %}
