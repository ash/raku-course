---
title: Einen Socket öffnen
translations_gpt:
---

{% include menu.html %}

Ein _Socket_ ist eine Verbindung zwischen zwei Programmen über ein Netz. Rakus Kernklasse für TCP-Sockets ist `IO::Socket::INET`, und Sie brauchen nichts zusätzlich installiert, um sie zu verwenden.

Um sich mit einem entfernten Server zu verbinden, erzeugen Sie einen Socket mit dem Host und dem Port, den Sie erreichen möchten:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));
say 'connected';
$conn.close;
```

`IO::Socket::INET.new` öffnet die Verbindung unverzüglich. Port `80` ist der übliche Port für HTTP, das verbindet also mit dem Webserver auf `raku.org`. Wenn Sie fertig sind, gibt `.close` die Verbindung frei.

> Dieses Beispiel braucht eine funktionierende Netzverbindung, um zu laufen. Gelingt die Verbindung, gibt es `connected` aus.

Dieselbe Klasse wird auf zwei Weisen verwendet: als **Client**, der wie hier zu einem Server hinauswählt, und als **Server**, der auf hereinkommende Verbindungen lauscht (was Sie später sehen). Für den Augenblick ist der Gedanke, dass `IO::Socket::INET.new(:host, :port)` Ihnen einen lebendigen Zweiwegkanal zu einer anderen Maschine gibt.

{% include nav.html %}
