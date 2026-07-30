---
title: 'Oplossing: Geef een variabele aan een kind door'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $file = 'notes.txt';
spurt $file, "one\ntwo\nthree\n";

%*ENV<NOTES> = $file;

my $proc = shell 'wc -l < "$NOTES"', :out;
say $proc.out.slurp(:close).trim;

unlink $file;
```

🦋 Je kunt de broncode vinden in het bestand [read-env.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/read-env.raku).

## Uitvoer

```
3
```

## Opmerkingen

1. `spurt` maakt `notes.txt` met drie regels aan. `%*ENV<NOTES>` op die naam zetten plaatst de bestandsnaam in de omgeving die elk kindprogramma erft.

1. Het `shell`-commando erft die omgeving, expandeert `$NOTES` naar `notes.txt` en voert het bestand aan `wc -l`, dat de regels telt. De omleiding `< "$NOTES"` beperkt de uitvoer tot alleen het getal `3`, dat we met `:out` opvangen en trimmen.

1. Het opruimen gebeurt ten slotte weer in Raku met `unlink` — geen shell nodig. Een bestand verwijderen is een gewone bewerking op het bestandssysteem, dus is er geen reden om daar nog een proces voor te starten.

{% include nav.html %}
