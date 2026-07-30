---
title: 'Lösung: Bezeichner prüfen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
for <count total2 2fast my-var _hidden> -> $name {
    my $ok = $name ~~ / ^ <[A..Za..z_]> <[A..Za..z0..9_]>* $ /;

    say "$name: { $ok ?? 'valid' !! 'invalid' }";
}
```

🦋 Du findest den Quellcode in der Datei [validate-identifier.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/validate-identifier.raku).

## Ausgabe

```
count: valid
total2: valid
2fast: invalid
my-var: invalid
_hidden: valid
```

## Kommentare

1. Die Anker `^` und `$` zwingen das Muster, die *ganze* Zeichenkette abzudecken, ein
einziges verirrtes Zeichen wie der Bindestrich in `my-var` macht sie also ungültig.

1. Die erste Zeichenklasse erlaubt einen Buchstaben oder Unterstrich; die zweite, mit `*`
wiederholt, erlaubt zusätzlich Ziffern — was genau der klassischen Bezeichnerregel
entspricht.

1. Die zweite Klasse lässt sich auch als `\w` schreiben, die eingebaute Kurzform für ein
Wortzeichen (einen Buchstaben, eine Ziffer oder einen Unterstrich):

    ```raku
    my $ok = $name ~~ / ^ <[A..Za..z_]> \w* $ /;
    ```

    Ein Unterschied, den man kennen sollte: `\w` ist in Raku Unicode-bewusst, ein Name wie
`café` besteht die Prüfung also ebenfalls — was zufällig zu Raku selbst passt, wo
`my $café = 1;` völlig zulässig ist. Die ausgeschriebene Klasse `<[A..Za..z0..9_]>` hält
die Prüfung streng bei ASCII.

1. Es gibt allerdings eine Wendung: In Raku selbst ist `my-var` ein *gültiger* Bezeichner!
Raku erlaubt einen Bindestrich (oder einen Apostroph, wie in `isn't`) innerhalb eines
Namens, solange ihm ein Buchstabe folgt — und deshalb lesen sich Subroutinen wie
`is-prime` so natürlich. Um *Raku*-Bezeichner zu prüfen, erlauben Sie solche Gruppen nach
dem klassischen Teil:

    ```raku
    for <count total2 2fast my-var _hidden> -> $name {
        my $ok = $name ~~ / ^ <[A..Za..z_]> \w* [ '-' <[A..Za..z]> \w* ]* $ /;

        say "$name: { $ok ?? 'valid' !! 'invalid' }";
    }
    ```

    Jede geklammerte Gruppe `[ '-' <[A..Za..z]> \w* ]` nimmt einen Bindestrich nur an, wenn
ein Buchstabe folgt, `my-var` wird nun also als gültig gemeldet, während `2fast` — und
Zeichenketten wie `a-` oder `a-1` — es weiterhin nicht sind.

{% include nav.html %}
