---
title: Hashes
---

{% include menu.html %}

Ein _Hash_ ist ein weiteres Beispiel für assoziative Datentypen in Raku. Es ist ein aggregierter Datentyp, der die Namen seiner Elemente ihren Werten zuordnet. Lassen Sie uns das neue Sigil einführen, das Hash-Variablen verwenden: `%`.

```raku
my %capitals;
```

Sie können nun den Hash verwenden und ihm einige Anfangswerte zuweisen.

```raku
%capitals = France => 'Paris', Italy => 'Rome';
```

Wie bei anderen Datentypen können beide Aktionen zusammen durchgeführt werden:

```raku
my %capitals = France => 'Paris', Italy => 'Rome';
```

## Zugriff auf die Elemente

Das Subskriptieren der Elemente ist ähnlich wie bei [Paaren](../pairs). Verwenden Sie ein Paar spitze Klammern oder geschweifte Klammern mit einem String:

```raku
say %capitals<France>;
say %capitals{'Italy'};
```

Hashes sind veränderbar, sodass Sie sowohl die vorhandenen Werte ändern als auch neue hinzufügen können:

```raku
%capitals<Germany> = 'Berlin';
```

## Schlüssel und Werte

Die beiden eingebauten Methoden `keys` und `values` geben die Listen der Schlüssel und der Werte eines Hashes zurück:

```raku
say %capitals.keys;
say %capitals.values;
```

Hier ist ein Beispiel für die Ausgabe dieses Programms:

    (Germany Italy France)
    (Berlin Rome Paris)

Beachten Sie, dass Hash-Elemente nicht geordnet sind, aber die Reihenfolge der Schlüssel und Werte, die von den obigen Methoden zurückgegeben wird, identisch ist.

{% include nav.html %}