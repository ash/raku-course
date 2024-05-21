---
title: 'Lösung: Ungerade Indizes'
---

{% include menu.html %}

Um diese Aufgabe zu lösen, können Sie die `loop`-Konstruktion verwenden und die Schleifenvariable bei jeder Iteration um 2 erhöhen. Sie können aber auch eine `for`-Schleife verwenden und die Zahlen von 1 bis zur Hälfte der Länge des Arrays durchlaufen und sie dann mit zwei multiplizieren.

## Code

Hier ist die Lösung:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21;

say @data[2 * $_ - 1] for 1 .. @data/2;
```

🦋 Finden Sie das Programm in der Datei [odd-indices.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/odd-indices.raku).

## Ausgabe

Führen Sie zuerst das Programm mit den ursprünglichen Datenelementen aus.

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
```

Fügen Sie dann ein weiteres Element zu den Daten hinzu:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21, 22;
```

Bestätigen Sie, dass das neue Element mit einem ungeraden Index in der Ausgabe erscheint:

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
22
```

## Kommentare

Im nächsten Teil des Kurses werden wir zu dieser Aufgabe zurückkehren, um sie mit einem völlig anderen Ansatz zu lösen.

{% include nav.html %}