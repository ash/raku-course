---
title: 'Lösung: Warten Sie einen Fehlschlag ab'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $p = start { die 'boom' };

try {
    await $p;
    CATCH {
        default { say "caught: {.message}" }
    }
}
```

🦋 Du findest den Quellcode in der Datei [await-failure.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-failure.raku).

## Ausgabe

```
caught: boom
```

## Kommentare

1. Der Block des Promise wirft, das Promise ist also *gebrochen*. Die Ausnahme geht nicht verloren — sie wird festgehalten, bis jemand das Promise abwartet.

1. `await $p` wirft sie genau dort erneut, wo der `CATCH`-Phaser sie wie jede gewöhnliche Ausnahme behandelt. So tauchen Fehler in Hintergrundarbeit dort auf, wo Sie auf das Ergebnis warten.

{% include nav.html %}
