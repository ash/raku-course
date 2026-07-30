---
title: 'Lösung: Verdreifachen als Methode'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Number {
    has $.n;

    method triple {
        $.n * 3;
    }
}

say Number.new(n => 7).triple;
```

🦋 Du findest den Quellcode in der Datei [triple-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-method.raku).

## Ausgabe

```
21
```

## Kommentare

1. Als Methode gehört `triple` zum Objekt und arbeitet mit dessen eigenem `n` — es wird nichts übergeben.

1. Verglichen mit der Subroutinen-Fassung liegen die Daten im Objekt, statt als Argument anzukommen. Beide ergeben `21`.

{% include nav.html %}
