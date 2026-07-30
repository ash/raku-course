---
title: 'Lösung: Eine Schleife überleben'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
for 1, 2, 3 -> $n {
    if $n == 2 {
        die "bad: $n";
    }
    say "ok: $n";

    CATCH {
        default {
            say "caught: " ~ .message;
        }
    }
}
```

🦋 Du findest den Quellcode in der Datei [survive-a-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/survive-a-loop.raku).

## Ausgabe

```
ok: 1
caught: bad: 2
ok: 3
```

## Kommentare

1. Der `CATCH`-Phaser behandelt eine im Schleifenrumpf geworfene Ausnahme, das `die` im zweiten Durchlauf wird also gefangen statt fatal.

1. Sobald die Ausnahme behandelt ist, läuft die Schleife einfach mit dem nächsten Wert weiter, weshalb `ok: 3` dennoch ausgegeben wird.

{% include nav.html %}
