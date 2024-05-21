---
title: Übung 'Kauftabelle'
---

{% include menu.html %}

## Problem

Erstellen Sie ein Programm, das die Preistabelle im folgenden Format ausgibt. Bitte verwenden Sie Variablen, um die Preise und die Gesamtsummen zu speichern.

    Artikel  Preis   N      Gesamt
    Stühle   $20.57  4      $82.28
    Tische   $50.18  1      $50.18

N.B. Wenn Sie mit der Wahl der Währung nicht zufrieden sind, können Sie gerne eine andere verwenden. Vergessen Sie jedoch nicht, dass `$` [eine besondere Bedeutung](/de/essentials/strings/escaping-special-characters) in Raku-Strings hat. Deshalb wurde es gewählt, um Raku besser zu lernen.

## Beispiel

Dieses Programm nimmt keine Eingabe entgegen, daher gibt es die obige Tabelle aus, wenn Sie es ausführen.

```console
$ raku purchase-table.raku
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}