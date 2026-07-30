---
title: 'Lösung: Zwei Zapfstellen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $s = Supply.from-list(1, 2, 3);

my @doubled;
my @tripled;
$s.map(* * 2).tap(-> $v { @doubled.push($v) });
$s.map(* * 3).tap(-> $v { @tripled.push($v) });

say @doubled;
say @tripled;
```

🦋 Du findest den Quellcode in der Datei [two-taps.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/two-taps.raku).

## Ausgabe

```
[2 4 6]
[3 6 9]
```

## Kommentare

1. `Supply.from-list` ist on demand, es spielt seine vollständige Folge also für **jede** Zapfstelle unabhängig erneut ab.

1. Damit können die beiden Zapfstellen verschiedene Pipelines über dieselbe Quelle laufen lassen: Eine verdoppelt, eine verdreifacht. Jede sieht das ganze `1, 2, 3`, die Ergebnisse sind also `[2 4 6]` und `[3 6 9]`.

{% include nav.html %}
