---
title: '"for"-Schleife'
---

{% include menu.html %}

Die `for`-Schleife ist ein mächtiges Werkzeug, um über mehrere Elemente zu iterieren. Nehmen wir zum Beispiel einen Bereich:

```raku
for 1..5 -> $n {
    say $n;
}
```

In diesem Programm nimmt die Variable `$n` bei jeder Iteration den nächsten Wert aus dem Bereich an. Beachten Sie, dass Sie die Variable nicht explizit mit `my` deklarieren müssen. Der Codeblock wird so oft wiederholt, wie es Elemente in der Datenquelle gibt. Das Programm druckt also die Zahlen zeilenweise:

```console
$ raku t.raku 
1
2
3
4
5
```

Das Programm iteriert über alle Werte, die der [Bereich](/de/essentials/ranges) `1..5` erzeugt. Diese sind `1`, `2`, `3`, `4` und `5`.

## Mehr als einen Wert nehmen

Eine interessante Funktion von Raku ist, dass man in einer einzigen Iteration mehr als ein Element nehmen kann. Das folgende Programm druckt zwei Zahlen in einer Schleife:

```raku
for 1..6 -> $n, $m {
    say "$n und $m";
}
```

Die Ausgabe dieses Programms ist wie folgt:

```console
$ raku t.raku
1 und 2
3 und 4
5 und 6
```

{% include nav.html %}