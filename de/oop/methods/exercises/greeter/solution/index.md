---
title: 'Lösung: Ein umgedrehtes Wort'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Word {
    has $.text;

    method reversed {
        $.text.flip;
    }
}

say Word.new(text => 'Raku').reversed;
```

🦋 Du findest den Quellcode in der Datei [greeter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/greeter.raku).

## Ausgabe

```
ukaR
```

## Kommentare

1. Die Methode `reversed` erreicht den eigenen `text` des Objekts über dessen Accessor `$.text` und ruft darauf das eingebaute `flip` auf, das die Zeichenkette umgedreht liefert.

1. Die Methode wird direkt auf dem frisch erzeugten `Word`-Objekt aufgerufen. Es wird nichts zurückgespeichert — `reversed` berechnet aus dem Attribut schlicht einen neuen Wert und gibt ihn zurück.

1. Beachten Sie, dass Sie innerhalb der Klasse die Variable direkt lesen können, ohne den Accessor zu bemühen:

```raku
    method reversed {
        $!text.flip;
    }
```

{% include nav.html %}
