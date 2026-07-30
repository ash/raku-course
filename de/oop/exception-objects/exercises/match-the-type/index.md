---
title: Übung ’Treffen Sie den Typ‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Eingebaute Fehler haben eigene Ausnahmetypen, auf die Sie prüfen können. Schreiben Sie einen Block, der `1 / 0` berechnet und versucht, das Ergebnis zu verwenden, was eine `X::Numeric::DivideByZero` wirft. Prüfen Sie im `CATCH`-Phaser des Blocks mit `when X::Numeric::DivideByZero` auf genau diesen Typ und geben Sie `cannot divide by zero` aus.

## Beispiel

Das Programm gibt aus:

```
cannot divide by zero
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
