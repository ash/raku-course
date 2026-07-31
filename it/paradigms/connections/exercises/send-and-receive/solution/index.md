---
title: 'Soluzione: Inviate e ricevete'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $conn = IO::Socket::INET.new(:host('example.com'), :port(80));

$conn.print("HEAD / HTTP/1.0\r\nHost: example.com\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

🦋 Trova il programma nel file [send-and-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/send-and-receive.raku).

## Output

```
HTTP/1.1 200 OK
```

## Commenti

1. `.print` invia la richiesta; le righe del protocollo finiscono con `\r\n`. Una richiesta `HEAD` chiede al server solo la riga di stato e le intestazioni, quindi la risposta è piccola.

1. `.recv` legge la risposta, e `.lines.first` ne prende la prima riga — la riga di stato HTTP.

{% include nav.html %}
