---
title: 'Lösung: Fangen Sie die Ausgabe auf'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $proc = run 'echo', 'hello world raku', :out;
my $output = $proc.out.slurp(:close).trim;
say $output.words.elems;
```

🦋 Du findest den Quellcode in der Datei [capture-output.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/capture-output.raku).

## Ausgabe

```
3
```

## Kommentare

1. `:out` leitet die Ausgabe des Programms in das `Proc` statt an den Bildschirm, und `.out.slurp(:close)` liest sie vollständig zurück; `.trim` entfernt den abschließenden Zeilenumbruch, den `echo` anfügt.

1. Sobald die Ausgabe eine gewöhnliche Zeichenkette in unserem Programm ist, behandeln wir sie wie alle anderen Daten: `.words.elems` zerlegt sie an Leerraum und zählt die Teile, was `3` ergibt. Genau darum geht es beim Auffangen — das externe Programm wird zu einem Baustein, dessen Ergebnis wir weiterverarbeiten.

{% include nav.html %}
