---
title: Eenregelige opmerkingen
---

{% include menu.html %}

De eenvoudigste vorm van een opmerking is een eenregelige opmerking. Deze begint met het `#`-teken en gaat door tot het einde van de huidige regel.

```raku
my $name; # Deze variabele wordt gebruikt om de naam van de gebruiker te bewaren
$name = prompt 'Wat is je naam? ';
say $name; # We zien nu de naam
```

Merk op dat een shebang zoals `#!/usr/bin/env raku` in de eerste regel van de code ook een opmerking is voor Raku, terwijl deze door de shell kan worden gelezen en uitgevoerd.

{% include nav.html %}