---
title: 'Lösung: Nennen Sie den Fehler'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub risky {
    die 'sub failed';
}

{
    risky();

    CATCH {
        default {
            say .^name;
            say .message;
        }
    }
}
```

🦋 Du findest den Quellcode in der Datei [name-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/name-the-error.raku).

## Ausgabe

```
X::AdHoc
sub failed
```

## Kommentare

1. Das `die` geschieht innerhalb von `risky`, aber die Ausnahme wandert hinauf zum Aufrufer. Das `CATCH` in dem Block, der `risky` aufgerufen hat, behandelt sie, und so funktioniert Fehlerbehandlung gewöhnlich: Der Fehlschlag und seine Behandlung müssen nicht in derselben Routine liegen.

1. Ein schlichtes `die` mit einer Zeichenkette erzeugt eine `X::AdHoc`-Ausnahme, die `.^name` meldet, und `.message` liefert den an `die` übergebenen Text.

{% include nav.html %}
