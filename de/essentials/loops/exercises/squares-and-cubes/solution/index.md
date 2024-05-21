---
title: 'Lösung: Quadrate und Kuben in einer Schleife'
---

{% include menu.html %}

## Code

Hier ist der Code der Lösung. Die `for`-Schleife verwendet einen Bereich, der von `-5` bis `5` reicht.

```raku
for -5 .. 5 -> $n {
    say "$n\t{$n²}\t{$n³}";
}
```

🦋 Finde das Programm in der Datei [squares-and-cubes-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/squares-and-cubes-loop.raku).

## Beispiel

Führe das Programm aus und überprüfe das Ergebnis.

```console
$ raku exercises/loops/squares-and-cubes-loop.raku
-5	25	-125
-4	16	-64
-3	9	-27
-2	4	-8
-1	1	-1
0	0	0
1	1	1
2	4	8
3	9	27
4	16	64
5	25	125
```

{% include nav.html %}