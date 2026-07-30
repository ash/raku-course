---
title: 'Solution: Reisedistanz*'
---

{% include menu.html %}

Der Hash von Hashes, den Sie in der Datei [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) finden, ist eine etwas redundante, aber sehr praktische Datenstruktur, die Sie verwenden können, um die Entfernung zwischen beliebigen Städten zu ermitteln.

Der Rest des Programms besteht aus ein paar verschachtelten Schleifen, um alle Segmente der Reiseroute zu durchlaufen und die Gesamtdistanzen zu summieren.

## Code

Hier ist die Lösung, bei der der große Datensatz nur teilweise angezeigt wird.

```raku
my %distance = 
    Amsterdam => {
        Athens => 3082,
        Berlin => 648,
        # . . .
    },
    # . . .
    Zurich => {
        Amsterdam => 861,
        Athens => 2449,
        # . . .
    };

my @itinerary = < Berlin Prague Vienna Zurich Paris >;

my $total = 0;
for 0 .. @itinerary.elems - 2 -> $index {
    my $from = @itinerary[$index];
    my $to = @itinerary[$index + 1];

    my $distance = %distance{$from}{$to};
    say "$from — $to: $distance km";
    $total += $distance;
}

say "Gesamte Reise: $total km";
```

🦋 Finden Sie das Programm mit der gesamten Datenstruktur in der Datei [travel-distance.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/travel-distance.raku).

## Ausgabe

Für die gegebene Reiseroute wird die Ausgabe des Programms unten angezeigt. Probieren Sie andere Wege durch die Städte aus, die wir im `%distance` Hash haben.

```console
$ raku exercises/associatives/travel-distance.raku
Berlin — Prag: 354 km
Prag — Wien: 312 km
Wien — Zürich: 784 km
Zürich — Paris: 557 km
Gesamte Reise: 2007 km
```

{% include nav.html %}