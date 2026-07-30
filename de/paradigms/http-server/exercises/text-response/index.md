---
title: Übung ’Schreiben Sie den Pfad groß‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Lassen Sie den Server echte Arbeit mit der Eingabe des Clients tun, statt eine feste Zeichenkette zu liefern. Schreiben Sie einen Server, der in einer **Schleife** (wie auf der vorigen Seite) jede Anfrage liest, den angefragten **Pfad** nimmt und ihn **großgeschrieben** zurücksendet — eine Anfrage nach `/hello` antwortet also mit `HELLO`. Der Pfad ist das zweite Wort der ersten Zeile der Anfrage (`GET /hello HTTP/1.0`); lassen Sie den führenden `/` weg, bevor Sie ihn großschreiben. Der Server bedient weiter Anfrage um Anfrage; halten Sie ihn mit Strg-C an.

## Beispiel

Einen Pfad mit `curl` anzufragen liefert ihn in Großbuchstaben zurück:

```console
$ curl http://127.0.0.1:8080/hello
HELLO
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
