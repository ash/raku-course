---
title: Übung ’Machen Sie ein Datum lesbar‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Schreiben Sie eine Grammatik, die ein ISO-Datum wie `'2026-07-05'` in drei Tokens zerlegt: `year`, `month` und `day`. Schreiben Sie eine **Aktionsklasse**, in der jede Tokenmethode einen Wert `make`-t: `year` und `day` machen ihre Zahl als ganze Zahl, während `month` den **englischen Monatsnamen** macht (`1` → `January`, …, `12` → `December`). Die Methode `TOP` liest diese drei Werte dann mit `.made` und macht eine gut lesbare Zeichenkette wie `'5 July 2026'`. Zerlegen Sie `'2026-07-05'` mit der Aktionsklasse und geben Sie `.made` aus.

## Beispiel

Das Programm gibt aus:

```
5 July 2026
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
