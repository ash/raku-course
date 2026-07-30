---
title: 'Lösung: Eine Grammatik, die addiert'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar Sum {
    token TOP    { <number>+ % '+' }
    token number { \d+ }
}

class SumActions {
    method TOP($/) { make [+] $<number>.map(*.Int) }
}

say Sum.parse('3+4+5', actions => SumActions).made;
```

🦋 Du findest den Quellcode in der Datei [grammar-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-sum.raku).

## Ausgabe

```
12
```

## Kommentare

1. `<number>+ % '+'` trifft eine oder mehrere Zahlen, durch `+`-Zeichen getrennt — der
Modifikator `%` beschreibt das Trennzeichen zwischen den Wiederholungen.

1. Die Aktionsmethode läuft, wenn `TOP` trifft. `make` hängt einen berechneten Wert an —
die Summe der Zahlen —, den `.made` nach dem Zerlegen zurückliest.

1. Ein `token` überspringt niemals Leerraum, diese Grammatik ist bei ihrer Eingabe also
streng: `'3+4+5'` lässt sich zerlegen, `'3 + 4 + 5'` nicht (`.parse` liefert `Nil`). Um
Leerzeichen um die Pluszeichen anzunehmen, machen Sie `TOP` zu einer `rule` — und lösen
Sie den Quantor von seinem Atom:

    ```raku
    grammar Sum {
        rule TOP     { <number> + % '+' }
        token number { \d+ }
    }
    ```

    In einer `rule` steht Leerraum im Muster für einen stillschweigenden `<.ws>`-Aufruf.
Als `<number> + % '+'` geschrieben, mit einem Leerzeichen vor dem Quantor `+`, deckt
dieser mitgemeinte Leerraum die ganze Wiederholung ab — Trennzeichen eingeschlossen —,
sowohl `'3+4+5'` als auch `'3 + 4 + 5'` werden also zerlegt, und die Summe ist so wie so
`12`. (Bleiben Sie lieber bei einem `token`, schreiben Sie die Leerzeichen im Trennzeichen
aus: `<number>+ % [ \s* '+' \s* ]`.)

{% include nav.html %}
