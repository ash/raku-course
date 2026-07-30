---
title: Übung ’Warten Sie einen Fehlschlag ab‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Wenn der Block eines Promise wirft, wirft `await` diese Ausnahme an der Stelle des `await` erneut. Starten Sie ein Promise, dessen Block `die 'boom'` ausführt. Warten Sie es innerhalb eines `try`-Blocks mit einem `CATCH`-Phaser ab, der `caught: <message>` ausgibt.

## Beispiel

Das Programm gibt aus:

```
caught: boom
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
