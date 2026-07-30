---
title: Übung ’Melden und erholen‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Zeigen Sie, wie `CATCH` ein Programm sich erholen und mit einem sinnvollen Standardwert weiterlaufen lässt.

Deklarieren Sie vor einem Block eine Variable `$timeout` mit dem Standardwert `30`. Führen Sie im Block `die 'config missing'` aus und versuchen Sie dann (in einer Zeile, die nie erreicht wird), `$timeout` auf `60` zu setzen. Verwenden Sie einen `CATCH`-Phaser, dessen `default`-Block `warning: <message>; keeping default` ausgibt. Geben Sie nach dem Block `timeout is <timeout> seconds` aus.

## Beispiel

Das Programm gibt aus:

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
