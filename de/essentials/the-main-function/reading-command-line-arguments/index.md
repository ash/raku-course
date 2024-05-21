---
title: Lesen von Befehlszeilenargumenten
---

{% include menu.html %}

Die `MAIN`-Funktion ist nicht nur praktisch, um den Start des Programms explizit zu lokalisieren, sondern auch wegen ihrer Argumente, die die in der Befehlszeile übergebenen Werte erhalten.

Es gibt zwei Möglichkeiten, Befehlszeilenargumente zu lesen. Eine davon ist über das [`@*ARGS`-Array](/de/essentials/positionals/args-array), das wir bereits verwendet haben. Lassen Sie uns nun die zweite Methode untersuchen.

Betrachten Sie ein Programm, das zwei Zahlen addiert.

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

Sie können das Programm auf folgende Weise ausführen. Das Programm gibt die Summe seiner beiden Argumente aus:

```console
$ raku t.raku 123 45
168
```

Wie jede andere Funktion kann die `MAIN`-Funktion Standardwerte für einige (oder sogar alle) ihrer Argumente haben. Zum Beispiel:

```raku
sub MAIN($a, $b = 100) {
    say $a + $b;
}
```

Wenn das zweite Argument nicht angegeben wird, wird der Standardwert verwendet:

```console
$ raku t.raku 15
115
```

{% include nav.html %}