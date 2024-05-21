---
title: 'Oplossing: Eerder gezien?'
---

{% include menu.html %}

Deze taak is een klassiek voorbeeld van het gebruik van een hash om items bij te houden. Voor een lus wordt een hash `%seen` aangemaakt. Binnen de lus dient het ingevoerde `$word` als sleutel van de hash.

## Code

Hier is de oplossing:

```raku
my %seen;
loop {
    my $word = prompt 'Woord: ';
    if %seen{$word} {
        say %seen{$word} == 1 ?? 'Gezien!' !! say "Gezien %seen{$word} keer!";
    }
    %seen{$word}++;
}
```

🦋 Vind het programma in het bestand [seen-before.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/seen-before.raku).

## Uitvoer

```console
$ raku exercises/associatives/seen-before.raku
Woord: Ik
Woord: nooit
Woord: zag
Woord: een
Woord: zag
Gezien!
Woord: dat
Woord: zag
Gezien 2 keer!
Waar
Woord: als
Woord: dat
Gezien!
Woord: zag
Gezien 3 keer!
Waar
Woord: zaagde
Woord: ^C
```

## Opmerking

De constructie `%seen{$word}++` verhoogt niet alleen de waarde, maar creëert deze ook als deze nog niet bestaat. Het proces van creëren wordt _autovivificatie_ genoemd. Merk op dat dit niet gebeurt wanneer je de waarde alleen _leest_ zoals in de voorwaarde: `if %seen{$word}`.

{% include nav.html %}