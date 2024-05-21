---
title: 'Lösung: Umfang eines Rechtecks'
---

{% include menu.html %}

Dieses Programm muss in der Lage sein, entweder ein oder zwei Kommandozeilenargumente zu übernehmen. Ein neuer Trick wird hier in der Lösung gezeigt. Der Standardwert der zweiten Variablen wird auf den Wert der ersten Variablen gesetzt: `sub MAIN($a, $b = $a)`. Anstatt also zwei Multi-Funktionen zu erstellen, haben wir eine allgemeine Funktion, die die Größe der zweiten Seite festlegt, wenn die Figur ein Quadrat ist.

## Code

Hier ist die Lösung:

```raku
sub MAIN($a, $b = $a) {
    my $perimeter = 2 * ($a + $b);

    my $shape = $a == $b ?? 'Quadrat' !! 'Rechteck';
    say "Der Umfang eines $shape beträgt $perimeter.";
}
```

🦋 Finde das Programm in der Datei [perimeter.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/perimeter.raku).

## Ausgabe

Versuche verschiedene Eingabewerte, um sowohl Quadrate als auch Rechtecke zu testen.

```console
$ raku exercises/the-main-function/perimeter.raku 1    
Der Umfang eines Quadrats beträgt 4.

$ raku exercises/the-main-function/perimeter.raku 1 2
Der Umfang eines Rechtecks beträgt 6.
```

Beachte, dass es den dritten Fall gibt, der ebenfalls getestet werden sollte. Wenn zwei gleiche Zahlen übergeben werden, sollte das Programm immer noch verstehen, dass es sich um ein Quadrat handelt:

```console
$ raku exercises/the-main-function/perimeter.raku 2 2
Der Umfang eines Quadrats beträgt 8.
```

{% include nav.html %}