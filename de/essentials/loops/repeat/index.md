---
title: Verwendung von repeat
---

{% include menu.html %}

Die `while`- und `until`-Blöcke werden möglicherweise nie ausgeführt, wenn die Bedingung anfangs `False` ist. Im Gegensatz dazu wird der `repeat`-Block immer mindestens einmal ausgeführt. Die Abbruchbedingung wird nach dem Codeblock überprüft. Sie verwenden die gleichen Wörter `while` oder `until` für den Test.

Betrachten Sie dieses Programm.

```raku
my $x = 100;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} while $x <= 10;
say "$x is bigger than 10.";
```

Die Variable `$x` wird anfangs auf `100` gesetzt, und die `while`-Bedingung überprüft, ob `$x` kleiner oder gleich `10` ist. Mit dem gegebenen Wert der Variablen ist die Bedingung bereits `False`, aber der Codeblock wird trotzdem zuerst ausgeführt.

```console
$ raku t.raku
Enter a number: 10
You entered 10.
Enter a number: 20
You entered 20.
20 is bigger than 10.
```

Lassen Sie uns das Programm ändern, um `until` zu verwenden.

```raku
my $x = 0;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} until $x > 10;
say "$x is bigger than 10.";
```

Führen Sie es aus, um zu bestätigen, dass es wie erwartet funktioniert:

```console
$ raku t.raku
Enter a number: 5
You entered 5.
Enter a number: 15
You entered 15.
15 is bigger than 10.
```

{% include nav.html %}