---
title: 'Solution: Einkaufstabelle'
---

{% include menu.html %}

Die Tabelle enthält eine Kopfzeile (die Sie einfach mit einem einzigen `say` ausgeben) und eine Anzahl von Zeilen mit einer ähnlichen Struktur: Artikelname, Artikelpreis, Menge und die Gesamtkosten dieser Artikel.

Da Sie die Reihenfolge der Zeilen beibehalten möchten, ist ein Array eine gute Wahl, um die Artikel zu speichern. Jede Zeile der Tabelle entspricht also einem einzelnen Element eines Arrays.

Auf der zweiten Ebene kann ein Datensatz in einer Hash-Struktur mit einigen benannten Feldern gespeichert werden: `name`, `price` und `quantity`.

Der Rest des Programms besteht darin, über die Artikel zu iterieren, die Gesamtsummen zu berechnen und die Tabellenzeilen auszugeben.

## Code

Hier ist eine der möglichen Lösungen für diese Aufgabe:

```raku
my @items = [
    {
        name => 'Stühle',
        price => 20.57,
        quantity => 4,
    },
    {
        name => 'Tische',
        price => 50.18,
        quantity => 1,
    }
];

say "Artikel\tPreis\tMenge\tGesamt";
for @items -> $item {
    my $total = $item<price> * $item<quantity>;
    say "$item<name>\t\$$item<price>\t$item<quantity>\t\$$total";
}
```

🦋 Finden Sie das Programm in der Datei [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/purchase-table.raku).

## Ausgabe

```console
$ raku exercises/associatives/purchase-table.raku
Artikel	Preis	Menge	Gesamt
Stühle	$20.57	4	$82.28
Tische	$50.18	1	$50.18
```

{% include nav.html %}