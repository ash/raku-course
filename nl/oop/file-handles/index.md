---
title: Bestandshandles
translations_gpt:
---

{% include menu.html %}

Een heel bestand in één keer lezen of schrijven is handig, maar soms wil je een bestand regel voor regel doorlopen, of een bestand open houden terwijl je er herhaaldelijk naar schrijft. Daarvoor gebruik je een _bestandshandle_.

De eenvoudigste manier om een bestand regel voor regel te lezen heeft niet eens een expliciete handle nodig: de methode `lines` op een padobject geeft de regels een voor een, klaar voor een `for`-lus:

```raku
spurt 'words.txt', "one\ntwo\nthree\n";

for 'words.txt'.IO.lines -> $line {
    say $line.uc;
}
```

Elke `$line` is één regel, zonder de afsluitende newline. Het programma drukt af:

```
ONE
TWO
THREE
```

Om via een handle naar een bestand te schrijven, open je het met `open` en de vlag `:w` (write), gebruik je de methoden `say` of `print` van de handle, en `close` je hem als je klaar bent:

```raku
my $fh = open 'out.txt', :w;
$fh.say('first line');
$fh.say('second line');
$fh.close;
```

De handle sluiten zorgt ervoor dat alles wat je geschreven hebt naar schijf weggeschreven wordt. Regel voor regel lezen, zoals hierboven, is de gebruikelijke manier om bestanden te verwerken die te groot zijn om in één keer in het geheugen te slurpen.

{% include nav.html %}
