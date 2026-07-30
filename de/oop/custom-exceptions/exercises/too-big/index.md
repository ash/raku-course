---
title: Übung ’Zu groß‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Definieren Sie eine eigene Ausnahmeklasse `TooBig`, die von `Exception` erbt und zwei Attribute hat, `value` und `limit`. Ihre Methode `message` soll `Value <value> exceeds the limit of <limit>` liefern.

Laufen Sie dann über die Werte `30`, `99` und `60` mit einer Grenze von `50`. Werfen Sie für jeden Wert nur dann eine `TooBig`, wenn der Wert die Grenze überschreitet, und verwenden Sie einen `CATCH`-Phaser mit `when TooBig`, der die Meldung ausgibt **und** in einer zweiten Zeile das Attribut `limit` der Ausnahme direkt ausliest, um `Try a value up to <limit>.` auszugeben. Ein Wert innerhalb der Grenze soll schlicht melden, dass er in Ordnung ist.

Das zeigt, dass die Ausnahme nur für die fehlschlagenden Zahlen ausgelöst wird; die anderen gehen glatt durch, und die Schleife läuft in beiden Fällen weiter.

## Beispiel

Das Programm gibt aus:

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
