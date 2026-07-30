---
title: 'Oplossing: Noteer een waarschuwing'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $value = -3;

note 'Warning: the value is negative' if $value < 0;
say $value.abs;
```

🦋 Je kunt de broncode vinden in het bestand [note-a-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/note-a-warning.raku).

## Uitvoer

```
Warning: the value is negative
3
```

## Opmerkingen

1. `note` stuurt de waarschuwing naar de standaardfout, en alleen wanneer de waarde werkelijk negatief is. `say` stuurt het echte resultaat — de absolute waarde `3` — naar de standaarduitvoer.

1. De diagnostiek op de standaardfout houden betekent dat ze de echte uitvoer van het programma niet vervuilt: de standaardfout weggooien met `2>/dev/null` laat alleen de `3` over.

{% include nav.html %}
