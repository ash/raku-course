---
title: Senden und empfangen
translations_gpt:
---

{% include menu.html %}

Sobald ein Socket offen ist, tauschen Sie darüber Daten aus. Senden Sie Text mit `.print` und lesen Sie mit `.recv`, was zurückkommt:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));

$conn.print("GET / HTTP/1.0\r\nHost: raku.org\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

Das sendet eine minimale HTTP-Anfrage und liest die Antwort des Servers in `$response`. Die erste Zeile einer Antwort von einem Webserver ist ihre Statuszeile.

> Dieses Beispiel braucht eine funktionierende Netzverbindung. Beim Ausführen gibt es die Statuszeile der Antwort aus. Da `raku.org` einfaches HTTP auf die gesicherte HTTPS-Seite umleitet, ist diese Zeile eine Umleitung, etwa `HTTP/1.1 308 Permanent Redirect`, und nicht `200 OK`. Die besondere Domäne `example.com` leitet nicht um, dieselbe Anfrage dorthin zu richten gibt also schlicht `HTTP/1.1 200 OK` aus.

Zwei Einzelheiten sind beim Sprechen mit Servern wichtig. Erstens trennen Netzprotokolle Zeilen gewöhnlich mit `\r\n` (Wagenrücklauf plus Zeilenvorschub), nicht mit einem einfachen `\n`, weshalb die Anfrage mit `\r\n` geschrieben ist. Zweitens liefert `.recv`, was bisher an Daten eingetroffen ist; bei größeren Antworten lesen Sie in einer Schleife, bis die Verbindung schließt.

Bytes senden und Bytes empfangen ist alles, was ein Socket wirklich tut. Alles andere — HTTP und die übergeordneten Werkzeuge der kommenden Abschnitte — ist darauf aufgebaut.

{% include nav.html %}
