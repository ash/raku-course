---
title: 'Lösung: Treffen Sie den Typ'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
{
    my $x = 1 / 0;
    say $x;

    CATCH {
        when X::Numeric::DivideByZero {
            say 'cannot divide by zero';
        }
    }
}
```

🦋 Du findest den Quellcode in der Datei [match-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/match-the-type.raku).

## Ausgabe

```
cannot divide by zero
```

## Kommentare

1. In Raku fliegt `1 / 0` nicht sofort auf; es erzeugt ein träges `Failure`. Die Ausnahme wird erst geworfen, wenn wir den Wert *verwenden*, hier durch den Versuch, ihn mit `say` auszugeben.

1. Die geworfene Ausnahme ist vom eingebauten Typ `X::Numeric::DivideByZero`, und `when X::Numeric::DivideByZero` trifft sie genau. Auf einen bestimmten Typ zu prüfen, statt alles mit `default` zu fangen, erlaubt es, verschiedene Fehler verschieden zu behandeln.

{% include nav.html %}
