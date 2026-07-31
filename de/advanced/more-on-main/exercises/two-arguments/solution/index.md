---
title: 'Solution: Zwei Argumente addieren'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

🦋 Den Quellcode finden Sie in der Datei [two-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/two-arguments.raku).

## Ausgabe

```console
$ raku two-arguments.raku 2 3
5
```

## Kommentare

1. Die zwei positionalen Parameter empfangen die zwei Wörter von der Kommandozeile.

1. Kommandozeilenargumente kommen als Zeichenketten an, aber der `+`-Operator konvertiert sie in Zahlen, sodass `2` und `3` zu `5` addiert werden.

{% include nav.html %}
