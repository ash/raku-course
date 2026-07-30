---
title: 'Lösung: Sortieren Sie in zwei Arrays'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @small;
my @big;

react {
    whenever Supply.from-list(4, 42, 7, 100, 15) {
        if $_ > 10 { @big.push($_) }
        else       { @small.push($_) }
    }
}

say @small;
say @big;
```

🦋 Du findest den Quellcode in der Datei [react-collect.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-collect.raku).

## Ausgabe

```
[4 7]
[42 100 15]
```

## Kommentare

1. Der `whenever`-Rumpf ist gewöhnlicher Code, er kann also mehr als sammeln — hier **entscheidet** er und lenkt jeden Wert bei seinem Eintreffen nach `@big` oder `@small`. Innerhalb jedes Arrays behalten die Werte ihre Stromreihenfolge.

1. Der react-Block wartet, bis der Strom fertig ist, beide Arrays sind also vollständig, bevor sie ausgegeben werden.

{% include nav.html %}
