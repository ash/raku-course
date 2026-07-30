---
title: 'Lösung: Summieren bis über hundert'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $sum = 0;
my $n   = 0;

loop {
    $n++;
    $sum += $n;
    last if $sum > 100;
}

say "reached $sum after adding 1..$n";
```

🦋 Du findest den Quellcode in der Datei [sum-until.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/sum-until.raku).

## Ausgabe

```
reached 105 after adding 1..14
```

## Kommentare

1. Ein nacktes `loop { }` wiederholt sich endlos; das `last if $sum > 100` ist es, was es
beendet, sobald die Summe die Schwelle überschreitet.

1. `1 + 2 + … + 14` ist `105`, die erste Teilsumme über `100`, die Schleife hält also mit
`$n` bei `14` an.

1. Diese Summe können Sie mit einer [Reduktion](/de/advanced/metaoperators/reduction) prüfen:

    ```raku
    say [+] 1..14; # 105
    ```

{% include nav.html %}
