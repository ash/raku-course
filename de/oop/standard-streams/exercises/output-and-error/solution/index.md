---
title: 'Lösung: Ausgabe und Fehler'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @data = 3, 5, 7;

my $sum = 0;
for @data -> $n {
    $sum += $n;
    $*ERR.say("running total: $sum");
}

$*OUT.say($sum);
```

🦋 Du findest den Quellcode in der Datei [output-and-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/output-and-error.raku).

## Ausgabe

Am Bildschirm erscheinen beide Ströme — die Zwischenstände, dann das Endergebnis:

```
running total: 3
running total: 8
running total: 15
15
```

Wird die Standardfehlerausgabe verworfen, bleibt nur die eigentliche Ausgabe:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Kommentare

1. `$*OUT` und `$*ERR` sind die Handles für die Standardausgabe und die Standardfehlerausgabe. Jeder hat seine eigene Methode `say`.

1. Jeder Durchgang der Schleife addiert die nächste Zahl und schreibt den Zwischenstand nach `$*ERR`; nur die Endsumme geht nach `$*OUT`. Am Bildschirm sehen Fortschritt und Ergebnis gleich aus, sie laufen aber durch verschiedene Ströme — weshalb das Umleiten der Standardfehlerausgabe mit `2>/dev/null` nur die abschließende `15` übrig lässt.

{% include nav.html %}
