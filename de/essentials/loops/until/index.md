---
title: until
---

{% include menu.html %}

Das `until`-Konstrukt ist das Gegenteil von `while`. Es führt den Codeblock aus, bis die Bedingung `True` wird (oder, mit anderen Worten, solange sie `False` ist).

Hier ist ein modifiziertes [Programm von der vorherigen Seite](../while), das `until` und eine neue Bedingung verwendet:

```raku
my $x = 0;
until $x > 10 {
    $x = prompt 'Geben Sie eine Zahl ein, die nicht größer als 10 ist: ';
    say "Sie haben $x eingegeben.";
}
say "$x ist größer als 10.";
```

Führen Sie das Programm aus und überprüfen Sie die Ausgabe:

```console
$ raku t.raku 
Geben Sie eine Zahl ein, die nicht größer als 10 ist: 10
Sie haben 10 eingegeben.
Geben Sie eine Zahl ein, die nicht größer als 10 ist: 4
Sie haben 4 eingegeben.
Geben Sie eine Zahl ein, die nicht größer als 10 ist: 1
Sie haben 1 eingegeben.
Geben Sie eine Zahl ein, die nicht größer als 10 ist: 20
Sie haben 20 eingegeben.
20 ist größer als 10.
```

## `until` vs. `while`

Vergleichen Sie die äquivalenten Programme mit `while` und `until`:

```raku
while $x <= 10 { . . . }

until $x > 10 { . . . }
```

Wie Sie sehen, sind die Bedingungen negierte Versionen voneinander. In diesem Sinne stehen `while` und `until` in der gleichen Beziehung wie `if` und `unless`.

{% include nav.html %}