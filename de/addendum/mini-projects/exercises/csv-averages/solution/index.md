---
title: 'Lösung: Punktzahlen aus CSV-Zeilen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @lines = 'Anna,90', 'Bob,72', 'Cara,84';
my %score;

for @lines -> $line {
    my ($name, $mark) = $line.split(',');
    %score{$name} = $mark.Int;
}

my $average = ([+] %score.values) / %score.elems;
say "average: $average";

say "above average:";
for %score.sort -> $pair {
    say "  {$pair.key}" if $pair.value > $average;
}
```

🦋 Du findest den Quellcode in der Datei [csv-averages.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/csv-averages.raku).

## Ausgabe

```
average: 82
above average:
  Anna
  Cara
```

## Kommentare

1. Jede Zeile am Komma zu zerlegen und `($name, $mark)` zuzuweisen packt die beiden Felder
auf einmal aus; `.Int` verwandelt den Punktzahltext in eine Zahl.

1. Der Durchschnitt ist die Summe der Werte geteilt durch ihre Anzahl; wer ihn übertrifft,
wird aufgeführt. Hier ergibt der Durchschnitt glatte `82`.

1. Diese abschließende Schleife lässt sich als Pipeline schreiben. `sort` ordnet die Paare,
`grep` behält die über dem Durchschnitt, und `map` reduziert jedes übrig gebliebene Paar
auf seinen Namen — der Schleifenrumpf trägt dann keine Logik mehr, nur noch die Ausgabe:

    ```raku
    say "  $_" for %score.sort.grep(*.value > $average).map(*.key);
    ```

    Von links nach rechts gelesen sagt das genau, was es tut: sortieren, die über dem
Durchschnitt behalten, ihre Namen nehmen. Jede Stufe ist ein kleiner, in sich
abgeschlossener Schritt, und `*.value` / `*.key` sind
[Whatever-Sterne](/de/advanced/whatever), die im Fluge einen Block mit einem Argument bauen.

{% include nav.html %}
