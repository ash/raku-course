---
title: 'Lösung: Behandeln und weitermachen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
for <ok bad ok> -> $item {
    {
        die 'boom' if $item eq 'bad';
        say "processed $item";

        CATCH {
            default {
                say "skipped ($item): {.message}";
            }
        }
    }
}
```

🦋 Du findest den Quellcode in der Datei [handle-and-continue.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/handle-and-continue.raku).

## Ausgabe

```
processed ok
skipped (bad): boom
processed ok
```

## Kommentare

1. Der `CATCH`-Phaser steht im Block je Element, er behandelt ein `die` also für genau dieses eine Element. Weil die Ausnahme dort behandelt wird, entkommt sie nie, um die ganze Schleife anzuhalten.

1. Das ist die typische Verwendung von `CATCH` gegenüber `try`: Ein Fehlschlag in einem Durchlauf wird örtlich erledigt, und die Schleife geht zum nächsten Element über. Das mittlere Element schlägt fehl, die beiden `ok`-Elemente werden aber dennoch verarbeitet.

{% include nav.html %}
