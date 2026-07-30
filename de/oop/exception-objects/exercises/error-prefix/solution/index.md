---
title: 'Lösung: Stellen Sie der Meldung etwas voran'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
{
    die 'timeout';

    CATCH {
        default {
            say 'Error: ' ~ .message;
        }
    }
}
```

🦋 Du findest den Quellcode in der Datei [error-prefix.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/error-prefix.raku).

## Ausgabe

```
Error: timeout
```

## Kommentare

1. Das `.message` des Ausnahmeobjekts liefert den an `die` übergebenen Text.

1. Ihn hinter `Error: ` zu hängen baut die endgültige Zeile auf. Das Ausnahmeobjekt ist einfach ein Wert, Sie können seine Meldung also nach Belieben verwenden.

{% include nav.html %}
