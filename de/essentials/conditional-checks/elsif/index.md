---
title: Verwendung von eslif
---

{% include menu.html %}

Bisher haben wir `if` und `else` gelernt. Was ist, wenn Sie eine Kette von Tests organisieren möchten? Es gibt mindestens zwei Möglichkeiten, dies in Raku zu tun (tatsächlich gibt es sogar noch mehr).

Eine der Möglichkeiten ist die Verwendung einer Kette von `if`, `elsif` und `else` Blöcken. Beachten Sie die Schreibweise von `elsif`. Es ist weder `elseif` noch `else if`.

```raku
my $x = prompt 'Geben Sie die Zahl ein: ';
if $x > 100 {
    say "$x ist größer als 100.";
}
elsif $x > 50 {
    say "$x ist größer als 50.";
}
elsif $x > 25 {
    say "$x ist größer als 25.";
}
else {
    say "$x ist 25 oder kleiner.";
}
```

In diesem Programm gibt es drei Zweige und drei Tests nacheinander. Sobald eine der Bedingungen als `True` herausstellt, wird der entsprechende Codeblock ausgeführt. Wenn keine der Prüfungen `True` ist, wird der `else` Block ausgeführt.

Hier sind einige Testläufe des Programms, die alle Blöcke auslösen:

```console
$ raku t.raku
Geben Sie die Zahl ein: 120
120 ist größer als 100.

$ raku t.raku
Geben Sie die Zahl ein: 75      
75 ist größer als 50.

$ raku t.raku
Geben Sie die Zahl ein: 30
30 ist größer als 25.

$ raku t.raku
Geben Sie die Zahl ein: 10
10 ist 25 oder kleiner.
```

Eine alternative Möglichkeit ist die Verwendung des `given` und `when` Paares, das wir in Zukunft lernen werden.

{% include nav.html %}