---
title: 'Lösung: Art des Dreiecks'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub kind($a, $b, $c) {
    return 'invalid' unless $a + $b > $c && $a + $c > $b && $b + $c > $a;

    given ($a, $b, $c).Set.elems {
        when 1  { 'equilateral' }
        when 2  { 'isosceles' }
        default { 'scalene' }
    }
}

for (3, 3, 3), (3, 3, 5), (3, 4, 5), (1, 2, 10) -> ($a, $b, $c) {
    say "$a $b $c: { kind($a, $b, $c) }";
}
```

🦋 Du findest den Quellcode in der Datei [triangle-kind.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/triangle-kind.raku).

## Ausgabe

```
3 3 3: equilateral
3 3 5: isosceles
3 4 5: scalene
1 2 10: invalid
```

## Kommentare

1. Der `unless`-Wächter weist Seitenlängen, welche die Dreiecksungleichung verletzen,
zurück, bevor überhaupt eingeordnet wird.

1. Die Anzahl der *verschiedenen* Seitenlängen verrät die Art: eine bedeutet, alle sind
gleich (gleichseitig), zwei bedeutet, genau ein Paar ist gleich (gleichschenklig), drei
bedeutet, alle sind verschieden (ungleichseitig).

1. Das Zerlegen der Schleifenvariablen als `-> ($a, $b, $c)` packt jede innere Liste
unmittelbar in drei benannte Seiten aus.

{% include nav.html %}
