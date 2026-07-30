---
title: 'Lösung: Status mit einem Client'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get('http://example.com/');
say $response.status;
```

🦋 Du findest den Quellcode in der Datei [status-line.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/status-line.raku).

## Ausgabe

```
200
```

## Kommentare

1. `Cro::HTTP::Client.get` liefert ein Promise — eine Netzanfrage wird später fertig —, wir `await`-en es also.

1. Das Antwortobjekt kennt seinen `.status` bereits, wir bekommen `200` also unmittelbar, ohne den Anfragetext zu senden oder die Antwort von Hand zu zerlegen. Vergleichen Sie das mit der Fassung mit rohem Socket: Das Modul erledigt die ganze Protokollarbeit für Sie.

{% include nav.html %}
