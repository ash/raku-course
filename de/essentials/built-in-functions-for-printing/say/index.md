---
title: Die say-Routine
---

{% include menu.html %}

Die eingebaute Routine `say` führt die folgenden Aktionen aus:

1. Ruft die Methode `gist` auf ihren Argumenten auf.
1. Fügt ein Zeilenumbruchzeichen hinzu.
1. Konvertiert das Ergebnis in UTF-8.
1. Sendet es an den `STDOUT`-Stream.

Aus der Sicht des Benutzers druckt `say` einfach den Inhalt einer Variablen auf das Terminal und fügt den Zeilenumbruch hinzu.

Der erste Schritt erfordert einige Erklärungen. Die Methode `gist` ist eine Methode, die für jeden eingebauten Datentyp definiert ist, wie z.B. Ganzzahlen oder Zeichenketten. Für solche einfachen Typen ist das Rückgabeergebnis ein menschenlesbarer Wert, der das Element darstellt.

```raku
say 42; # 42
say 'Raku'; # Raku
```

Für komplexere Daten, wie Arrays oder Hashes, fügt die Methode `gist` etwas Formatierung hinzu.

```raku
my @data = 'alpha', 'beta', 'gamma';
say @data; # [alpha beta gamma]

my %data = alpha => 1, beta => 2, gamma => 3;
say %data; # {alpha => 1, beta => 2, gamma => 3}
```

Die `say`-Routine kann sowohl als Funktion als auch als Methode aufgerufen werden:

```raku
say 42;
say(42);
42.say;
```

Man kann mehr als ein Argument an `say` übergeben. Die Ausgabeteile werden ohne Leerzeichen dazwischen verbunden.

```raku
say(100, 500); # 100500
```

{% include nav.html %}