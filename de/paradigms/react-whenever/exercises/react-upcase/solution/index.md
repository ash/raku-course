---
title: 'Lösung: Großschreiben mit react'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @collected;

react {
    whenever Supply.from-list('a', 'b', 'c') {
        @collected.push($_.uc);
    }
}

say @collected;
```

🦋 Du findest den Quellcode in der Datei [react-upcase.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-upcase.raku).

## Ausgabe

```
[A B C]
```

## Kommentare

1. Der `whenever`-Rumpf läuft einmal je Wert, schreibt ihn groß und legt ihn auf `@collected`.

1. `react` wartet, bis das eine Supply fertig ist, bis `say` läuft, enthält das Array also alle drei Werte in Reihenfolge: `[A B C]`.

1. Ein Supply hat eigene listenartige Methoden, Sie könnten also im Strom statt im Rumpf großschreiben — `whenever Supply.from-list('a', 'b', 'c').map(*.uc) { @collected.push($_) }` — mit derselben Wirkung. `.map` auf einem Supply formt jeden Wert um, während er vorbeifließt; die Wahl ist schlicht, ob die Umformung zum Strom oder zur Reaktion gehört.

{% include nav.html %}
