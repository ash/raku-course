---
title: 'Lösung: Verbindung zu einem Host'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $host = 'example.com';

if try IO::Socket::INET.new(:host($host), :port(80)) -> $conn {
    say "connected to $host";
    $conn.close;
}
else {
    say "could not connect to $host";
}
```

🦋 Du findest den Quellcode in der Datei [connect-to-host.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/connect-to-host.raku).

## Ausgabe

```
connected to example.com
```

## Kommentare

1. `IO::Socket::INET.new(:host, :port)` öffnet die Verbindung unverzüglich und wirft, wenn der Host unerreichbar ist.

1. Es in `try` zu hüllen macht aus dieser Ausnahme ein `Nil` statt eines Absturzes. Das `if … -> $conn` bindet den Socket, wenn die Verbindung gelingt, und führt den `else`-Zweig aus, wenn nicht — der robuste Weg, eine Verbindung zu versuchen.

1. Um den `else`-Zweig in Aktion zu sehen, ändern Sie `$host` in einen Namen, den es nicht gibt, etwa `'example.comp'`. Die DNS-Auflösung scheitert dann — ohne das `try` bekämen Sie einen Fehler wie `Failed to resolve host name 'example.comp'` —, doch hier macht das `try` ein `Nil` daraus, das Programm gibt also ruhig `could not connect to example.comp` aus.

{% include nav.html %}
