---
title: 'Lösung: Zwei Listen zu einem Hash verzippen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @names  = <Anna Bob Cara>;
my @scores = 90, 85, 95;

my %result = @names Z=> @scores;

for %result.sort -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Du findest den Quellcode in der Datei [zip-to-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/zip-to-hash.raku).

## Ausgabe

```
Anna: 90
Bob: 85
Cara: 95
```

## Kommentare

1. `Z=>` ist der Zip-Metaoperator, angewandt auf den Paarkonstruktor `=>`: Er geht beide
Listen im Gleichschritt durch und baut aus jeder Stelle ein `name => punktzahl`-Paar.

1. Diese Liste von Paaren einer `%`-Variablen zuzuweisen erzeugt einen Hash, der dann in
Schlüsselreihenfolge ausgegeben wird.

{% include nav.html %}
