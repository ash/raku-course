---
title: 'Oplossing: Draaien in een thread'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $t = Thread.start({ say 'working' });
$t.finish;
```

🦋 Je kunt de broncode vinden in het bestand [run-in-thread.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/run-in-thread.raku).

## Uitvoer

```
working
```

## Opmerkingen

1. `Thread.start` draait het blok op een nieuwe thread.

1. `.finish` wacht tot de thread klaar is, zodat het programma niet eindigt voordat `working` afgedrukt is.

{% include nav.html %}
