---
title: Übung ’Status mit einem Client‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Holen Sie den Status einer Webseite auf dem einfachen Weg — mit dem **Cro-Clientmodul** statt mit einem rohen Socket. Rufen Sie mit `Cro::HTTP::Client.get` `http://example.com/` ab, `await`-en Sie die Antwort und geben Sie ihren `.status` aus — ganz ohne Textzerlegung.

> Diese Übung braucht das Modul Cro installiert (`zef install cro`) und eine funktionierende Netzverbindung.

## Beispiel

Beim Ausführen gibt das Programm aus:

```
200
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
