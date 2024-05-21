---
title: 'Lösung: Vergleiche `say` und `put`'
---

{% include menu.html %}

## Code

Hier ist eine der möglichen Lösungen:

```raku
my Int $i = 42;
say $i;
put $i;

my Rat $r = 3/4;
say $r;
put $r;

my Num $n = 3e4;
say $n;
put $n;

my Str $s = 'Raku';
say $s;
put $s;

my @a = <this is an array>;
# say @a.WHAT;
say @a;
put @a;

my List $l = <this is a list>;
# say $l.WHAT;
say $l;
put $l;

my %h = A => 'alpha', B => 'beta';
say %h;
put %h;
```

Zur besseren Sicherheit kannst du auch den Typ der Variable ausgeben, z.B. wie bei Arrays und Listen gezeigt, um sicherzustellen, dass du eine Variable des gewünschten Typs erstellt hast.

🦋 Finde das Programm in der Datei [compare-say-and-put.raku](https://github.com/ash/raku-course/blob/master/exercises/built-in-functions-for-printing/compare-say-and-put.raku).

## Ausgabe

Die Ausgabe des oben gezeigten Programms ist unten dargestellt.

```console
$ raku exercises/built-in-functions-for-printing/compare-say-and-put.raku
42
42
0.75
0.75
30000
30000
Raku
Raku
[this is an array]
this is an array
(this is a list)
this is a list
{A => alpha, B => beta}
A	alpha
B	beta
```

## Kommentare

Durch die Untersuchung der Ausgabe des Programms kannst du deutlich sehen, dass es keinen Unterschied gibt, wenn einfache Datentypen wie Zahlen und Zeichenketten gedruckt werden. Bei aggregierten Datentypen erzeugt `say` im Vergleich zu `put` eine etwas 'lautere' Ausgabe. Auf der anderen Seite druckt `put` bei Hashes diese als Tabelle im Vergleich zu einer einzigen Zeile von `say`.

Der Unterschied zwischen den Ausgabeformaten wird durch die Implementierung der Methoden `Str` und `gist` für den jeweiligen Typ bestimmt. Wir werden später im Kurs mehr darüber sprechen.

{% include nav.html %}