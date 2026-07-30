---
title: Übung ’Summieren Sie einen Kanal‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Erzeugen Sie einen Kanal und treiben Sie ihn mit **zwei Promises** an. Senden Sie in einem `start`-Block — dem Erzeuger — die Zahlen `1..6` in den Kanal und schließen Sie ihn danach. Sammeln Sie in einem zweiten `start`-Block — dem Verbraucher — jeden Wert mit `.list` und liefern Sie ihre Summe. **Warten Sie beide** Promises zusammen ab und geben Sie die Summe aus, die der Verbraucher erzeugt hat. Das ist die natürliche Form eines Kanals: ein Erzeuger auf einem Thread, ein Verbraucher auf einem anderen, koordiniert von einem dritten.

## Beispiel

Das Programm gibt aus:

```
21
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
