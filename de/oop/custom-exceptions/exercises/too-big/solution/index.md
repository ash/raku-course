---
title: 'Lösung: Zu groß'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class TooBig is Exception {
    has $.value;
    has $.limit;

    method message {
        "Value $.value exceeds the limit of $.limit";
    }
}

my $limit = 50;

for 30, 99, 60 -> $value {
    TooBig.new(value => $value, limit => $limit).throw if $value > $limit;
    say "Value $value is within the limit";

    CATCH {
        when TooBig {
            say .message;
            say "Try a value up to {.limit}.";
        }
    }
}
```

🦋 Du findest den Quellcode in der Datei [too-big.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/too-big.raku).

## Ausgabe

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Kommentare

1. `TooBig is Exception` macht aus der Klasse eine werfbare Ausnahme. Sie trägt zwei Daten mit sich, `value` und `limit`, und ihre Methode `message` verwebt beide im gemeldeten Text.

1. `.throw` löst die Ausnahme aus, und `when TooBig` trifft sie nach Typ. Die Behandlung tut mehr, als die Meldung auszugeben: Sie liest das Attribut `limit` direkt vom gefangenen Objekt, um einen hilfreichen Hinweis zu geben. Das ist der Vorteil einer eigenen Ausnahme gegenüber einer schlichten Zeichenkette — die Behandlung erhält strukturierte Daten, mit denen sie arbeiten kann.

1. Die Ausnahme wird **nur** geworfen, wenn `$value > $limit`. Für `30` wird keine Ausnahme ausgelöst, und der Schleifenrumpf läuft bis zu seinem `say` und gibt aus, dass der Wert innerhalb der Grenze liegt. Für `99` und `60` schlägt das `throw` zu, jenes `say` wird also übersprungen, und stattdessen behandelt das `CATCH`. Der Rumpf der `for`-Schleife ist selbst der Block, den das `CATCH` bewacht, eine gefangene Ausnahme beendet also nur den laufenden Durchgang — die Schleife geht danach einfach zum nächsten Wert über.

{% include nav.html %}
