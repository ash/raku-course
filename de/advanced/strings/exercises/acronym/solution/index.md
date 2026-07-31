---
title: 'Solution: Akronym'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $phrase = 'hyper text markup language';

my $acronym = '';
for $phrase.words -> $word {
    $acronym ~= $word.substr(0, 1);
}

say $acronym.uc;
```

🦋 Du findest den Quellcode in der Datei [acronym.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/acronym.raku).

## Ausgabe

```
HTML
```

## Kommentare

1. `$phrase.words` liefert die Liste der Wörter. Die Schleife nimmt von jedem Wort das erste Zeichen mit `substr(0, 1)` und hängt es an `$acronym` an.

1. Wenn alle Anfangsbuchstaben gesammelt sind, wandelt `uc` das Ergebnis in Grossbuchstaben um: `HTML`.

{% include nav.html %}
