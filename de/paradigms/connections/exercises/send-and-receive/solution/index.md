---
title: 'Lösung: Senden und empfangen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $conn = IO::Socket::INET.new(:host('example.com'), :port(80));

$conn.print("HEAD / HTTP/1.0\r\nHost: example.com\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

🦋 Du findest den Quellcode in der Datei [send-and-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/send-and-receive.raku).

## Ausgabe

```
HTTP/1.1 200 OK
```

## Kommentare

1. `.print` sendet die Anfrage; die Protokollzeilen enden auf `\r\n`. Eine `HEAD`-Anfrage bittet den Server nur um die Statuszeile und die Header, die Antwort ist also klein.

1. `.recv` liest die Antwort, und `.lines.first` nimmt ihre erste Zeile — die HTTP-Statuszeile.

{% include nav.html %}
