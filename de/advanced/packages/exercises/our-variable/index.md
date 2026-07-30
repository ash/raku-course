---
title: Eine our-Variable
---

{% include menu.html %}

## Problem

Nur `our` macht einen Namen außerhalb seines Packages sichtbar; `my` hält ihn privat. Erstelle ein Package `Config` mit einer `our`-Variable `$port` mit dem Wert `8080` **und** einer `my`-Variable `$secret` mit dem Wert `42`. Gib von außen `$Config::port` aus und dann, ob `$Config::secret` definiert ist — das sollte nicht der Fall sein, da eine `my`-Variable kein Teil des Namensraums ist.

## Beispiel

Das Programm gibt aus:

```
8080
False
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
