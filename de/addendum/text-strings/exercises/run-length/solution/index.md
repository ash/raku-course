---
title: 'Lösung: Lauflängenkodierung'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $text = 'aaabbbbcc';

my $encoded = '';
for $text ~~ m:g/ (.) $0* / -> $match {
    $encoded ~= $match[0] ~ $match.chars;
}

say $encoded;
```

🦋 Du findest den Quellcode in der Datei [run-length.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/run-length.raku).

## Ausgabe

```
a3b4c2
```

## Kommentare

1. Das Muster `(.) $0*` capturt ein Zeichen und trifft dann so viele weitere Kopien davon,
wie folgen — ein ganzer Lauf je Treffer. `m:g` sammelt jeden Lauf ein.

1. Für jeden Lauf ist `$match[0]` der wiederholte Buchstabe und `$match.chars` die Länge
des Laufs, beides zusammen ergibt also Einträge wie `a3`.

1. Den Treffer mit `-> $match` zu benennen ist freiwillig. Ohne das wird jeder Treffer zum
Thema `$_`, und Sie können die Variable weglassen und die Methoden unmittelbar darauf
aufrufen:

    ```raku
    my $text = 'aaabbbbcc';
    my $encoded = '';

    for $text ~~ m:g/ (.) $0* / {
        $encoded ~= .[0] ~ .chars;
    }

    say $encoded;
    ```

{% include nav.html %}
