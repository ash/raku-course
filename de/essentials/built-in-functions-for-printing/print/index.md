---
title: Die Druckroutine
---

{% include menu.html %}

Die eingebaute Routine `print` führt Folgendes aus:

1. Wandelt ihre Argumente in einen String um, indem sie die Methode `Str` auf ihnen aufruft.
1. Sendet sie an den `STDOUT`-Stream.

Für einfache Datentypen ähnelt die von `print` erzeugte Ausgabe der Ausgabe von [`say`](../say), jedoch ohne das Zeilenumbruchzeichen am Ende.

```raku
print 42;
print 'Raku';
```

Diese Werte werden nacheinander gedruckt. Auch am Ende der gesamten Ausgabe gibt es keinen Zeilenumbruch.

```console
$ raku t.raku
42Raku
```

Bei aggregierten Daten kann das Ergebnis von dem abweichen, was Sie mit `say` sehen. Probieren Sie zum Beispiel Arrays und Hashes:

```raku
my @data = 'alpha', 'beta', 'gamma';
print @data;

print "\n"; # Um die Teile zu trennen

my %data = alpha => 1, beta => 2, gamma => 3;
print %data;
```

So sieht die Ausgabe aus:

```console
$ raku t.raku
alpha beta gamma
alpha	1
beta	2
gamma	3
```

Die `print`-Routine kann auch als Methode aufgerufen werden:

```raku
my @data = 'alpha', 'beta', 'gamma';
@data.print;

"\n".print;
```

{% include nav.html %}