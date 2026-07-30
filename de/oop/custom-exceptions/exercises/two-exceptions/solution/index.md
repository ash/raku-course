---
title: 'Lösung: Zwei Ausnahmetypen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class TooSmall is Exception {
    method message { 'too small' }
}

class TooBig is Exception {
    method message { 'too big' }
}

for TooSmall, TooBig -> $type {
    {
        $type.new.throw;

        CATCH {
            when TooSmall { say 'small' }
            when TooBig   { say 'big' }
        }
    }
}
```

🦋 Du findest den Quellcode in der Datei [two-exceptions.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/two-exceptions.raku).

## Ausgabe

```
small
big
```

## Kommentare

1. Die Schleife wirft im ersten Durchgang eine `TooSmall` und im zweiten eine `TooBig`, jeweils in einem eigenen Block mit eigenem `CATCH`.

1. Der `CATCH`-Phaser hat einen `when`-Zweig je Ausnahmetyp. In jedem Durchgang läuft nur der Zweig, der auf den geworfenen Typ passt — der erste Durchgang gibt also `small` aus und der zweite `big`. So reagiert ein einziger Satz von Behandlungen unterschiedlich auf verschiedene Arten von Fehlern.

{% include nav.html %}
