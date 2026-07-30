---
title: Auf eine Anfrage antworten
translations_gpt:
---

{% include menu.html %}

Sobald ein Client sich verbunden hat, lesen Sie seine Anfrage und senden eine Antwort. Für einen Webbrowser muss die Antwort gültiges HTTP sein: eine Statuszeile, wahlweise Header, eine leere Zeile und dann der Rumpf.

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

my $conn = $listener.accept;
my $request = $conn.recv;

$conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, web!\n");
$conn.close;
$listener.close;
```

Die Antwort spiegelt das Anfrageformat wider, das Sie auf der Clientseite gesehen haben. `HTTP/1.0 200 OK` ist die Statuszeile, `Content-Type: text/plain` ist ein Header, die leere Zeile (`\r\n\r\n`) beendet die Header, und `Hello, web!` ist der Rumpf, den der Browser anzeigt.

Führen Sie dieses Programm aus und sprechen Sie es dann aus einem anderen Terminal mit `curl` an (oder öffnen Sie `http://127.0.0.1:8080/` in einem Browser), und es gibt den Rumpf unmittelbar auf dem Bildschirm aus:

```console
$ curl http://127.0.0.1:8080/
Hello, web!
```

Das bedient eine einzelne Anfrage und hört dann auf. Um viele Anfragen zu bedienen, würden Sie die Schritte `.accept`-lesen-antworten in eine Schleife hüllen und meist jede Verbindung auf einem eigenen Thread oder Promise abwickeln, damit langsame Clients die anderen nicht aufhalten. Doch das Wesen eines Webservers ist genau dies: eine Verbindung annehmen, die Anfrage lesen, eine HTTP-Antwort schreiben.

Die [nächste Seite](/de/paradigms/http-server/serving-requests) tut genau das — ein Server, der am Leben bleibt und in einer Schleife eine Anfrage nach der anderen beantwortet, statt nach der ersten aufzuhören.

{% include nav.html %}
