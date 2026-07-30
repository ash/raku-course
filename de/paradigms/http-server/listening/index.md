---
title: Auf Verbindungen lauschen
translations_gpt:
---

{% include menu.html %}

Um als Server aufzutreten, erzeugen Sie einen Socket im **Lauschmodus** mit dem Argument `:listen` und geben Adresse und Port an, auf denen gelauscht werden soll:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);
```

`:localhost('127.0.0.1')` lauscht auf Ihrer eigenen Maschine, und `:localport(8080)` ist der Port, mit dem sich Clients verbinden müssen. Der Socket wartet nun, aber noch ist kein Client eingetroffen.

Um die nächste hereinkommende Verbindung anzunehmen, rufen Sie `.accept` auf. Es **blockiert**, bis sich ein Client verbindet, und liefert dann einen frischen Socket, der dieses eine Gespräch darstellt:

```raku
my $conn = $listener.accept;
say 'a client connected';
```

Der `$listener` lauscht weiter auf weitere Clients, während `$conn` Ihr Kanal ist, um mit diesem bestimmten zu sprechen. Ein echter Server ruft `.accept` in einer Schleife auf und bedient jeden Client, sobald er eintrifft.

> Diese Beispiele laufen auf Ihrer eigenen Maschine; verbinden Sie sich aus einem Browser oder einem anderen Programm unter `127.0.0.1:8080` mit ihnen.

Ein Server ist also schlicht ein umgedrehter Socket: Statt `:host`/`:port` zum Hinauswählen geben Sie `:listen` mit `:localhost`/`:localport`, um auf Anrufe zu warten.

{% include nav.html %}
