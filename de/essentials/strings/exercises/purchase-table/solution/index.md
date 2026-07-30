---
title: 'Solution: Einkaufstabelle'
---

{% include menu.html %}

## Code

Hier ist eine mögliche Lösung:

```raku
my $chair-price = 20.57;
my $chairs = 4;
my $chairs-total = $chair-price * $chairs;

my $table-price = 50.18;
my $tables = 1;
my $tables-total = $table-price * $tables;

say "Artikel\tPreis\tN\tGesamt";
say "Stühle\t\$$chair-price\t$chairs\t\$$chairs-total";
say "Tische\t\$$table-price\t$tables\t\$$tables-total";
```

Alle Zahlen sind fest codiert und in einer Anzahl von Variablen gespeichert. Wir verwenden auch den Multiplikationsoperator `*`, um das Ergebnis zu berechnen. Wir werden in den nächsten Abschnitten dieses Kurses mehr über Operatoren lernen, aber an diesem Punkt sollte die Konstruktion wie `$chair-price * $chairs` keine Fragen aufwerfen.

Die drei Zeilen, die die Ausgabe erzeugen, drucken die drei Zeilen der Tabelle, einschließlich ihrer Kopfzeile. Beachten Sie, wie die Spalten durch die Tabulatorzeichen `\t` getrennt sind. In den Datenzeilen sehen wir auch ein maskiertes Dollarzeichen: `\$` sowie verschiedene Variablen, die wir interpolieren möchten.

🦋 Sie können den Quellcode in der Datei [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/purchase-table.raku) finden.

## Ausgabe

Führen Sie das Programm aus und sehen Sie, wie es die Tabelle druckt:

```
$ raku exercises/strings/purchase-table.raku
Artikel Preis   N      Gesamt
Stühle  $20.57  4      $82.28
Tische  $50.18  1      $50.18
```

## Kommentare

Haben Sie die Bindestriche in den Namen der Variablen wie `$chair-price` oder `$tables-total` bemerkt? Dies ist eine vollkommen akzeptable Art, Variablen in Raku zu benennen.

Lassen Sie sich nicht von den zwei aufeinanderfolgenden Dollarzeichen verwirren. Raku liest sie separat. Zum Beispiel im Teilstring `\$$price` wird das erste Dollarzeichen maskiert und stellt somit sich selbst dar, während das zweite Teil des Variablennamens `$price` ist.

Alle Zeichenketten sind in doppelte Anführungszeichen gesetzt, um die Interpolation der Variablen und Sonderzeichen zu ermöglichen.

Lassen Sie uns zu dieser Aufgabe zurückkehren, nachdem wir uns mit Arrays und Hashes vertraut gemacht haben.

{% include nav.html %}