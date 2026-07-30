---
title: Übung ’Zwei Ausnahmetypen‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Definieren Sie zwei eigene Ausnahmeklassen, `TooSmall` und `TooBig`, die jeweils von `Exception` erben, mit Methoden `message`, die `too small` beziehungsweise `too big` liefern.

Laufen Sie über die beiden Typen und werfen Sie für jeden eine Ausnahme dieses Typs in einem eigenen Block. Verwenden Sie einen `CATCH`-Phaser mit einem `when`-Zweig je Typ, der für `TooSmall` `small` und für `TooBig` `big` ausgibt. So sehen Sie beide Zweige in Aktion.

## Beispiel

Das Programm gibt aus:

```
small
big
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
