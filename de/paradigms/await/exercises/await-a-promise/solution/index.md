---
title: 'Lösung: Warten Sie ein Promise ab'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @jobs =
    (start { sleep 0.3; 'slow'   }),
    (start { sleep 0.1; 'quick'  }),
    (start { sleep 0.2; 'medium' });

say await @jobs;
```

🦋 Du findest den Quellcode in der Datei [await-a-promise.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-promise.raku).

## Ausgabe

```
(slow quick medium)
```

## Kommentare

1. Alle drei Aufgaben starten zugleich und schlafen nebenläufig, das ganze Programm dauert also rund `0.3` Sekunden — die Dauer der langsamsten Aufgabe, nicht die Summe aller drei.

1. Obwohl `quick` zuerst fertig ist und `slow` zuletzt, lautet die Ausgabe `(slow quick medium)`: `await` liefert jedes Ergebnis an derselben Stelle wie sein Promise in `@jobs`. Die Reihenfolge der Fertigstellung beeinflusst nur, *wann* `await` zurückkehrt, nie die Anordnung der Ergebnisse.

{% include nav.html %}
