---
title: Viele Anfragen bedienen
translations_gpt:
---

{% include menu.html %}

Der Server auf der vorigen Seite bediente eine einzelne Anfrage und hörte dann auf. Ein echter Server läuft weiter und beantwortet einen Client nach dem anderen. Hüllen Sie die Schritte annehmen-lesen-antworten in eine `loop` — und da die Schleife die ringsum deklarierten Variablen teilt, können Sie Zustand zwischen Anfragen behalten. Hier zählt der Server seine Kunden und nennt jedem seine Nummer:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

my $customer = 0;

loop {
    my $conn = $listener.accept;
    $conn.recv;
    $customer++;

    # a qq:to heredoc makes a tidy template — the variable interpolates straight in
    my $body = qq:to/END/;
        Hello!
        You are customer number $customer.
        Thanks for visiting.
        END

    # send the header first, then the body, as two separate writes
    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n");
    $conn.print($body);

    $conn.close;
}
```

`.accept` **blockiert**, bis sich ein Client verbindet, und liefert dann einen frischen Socket für dieses eine Gespräch. Da `$customer` außerhalb der Schleife lebt, überdauert es von einer Anfrage zur nächsten: Der erste Besucher ist Kunde `1`, der zweite `2` und so fort. Die Schleife endet von selbst nie, der Server bleibt also oben, bis Sie ihn mit Strg-C anhalten.

Zwei Einzelheiten sind bemerkenswert:

* **Die Antwort wird in zwei Teilen geschrieben.** Das erste `.print` sendet den HTTP-Header — die Statuszeile, den Inhaltstyp und die leere Zeile, die die Header beendet. Das zweite sendet den Rumpf. HTTP ist es gleich, ob diese in einem oder in mehreren Schreibvorgängen ankommen, sie zu trennen hält das feste Protokollbeiwerk also von dem Teil fern, der sich wirklich ändert.

* **Der Rumpf kommt aus einer Vorlage.** `qq:to/END/` ist ein *Heredoc* — eine `qq`-Zeichenkette, die bis zur Zeile `END` reicht. Sie erstreckt sich über mehrere Zeilen und interpoliert `$customer` wie jede Zeichenkette in doppelten Anführungszeichen, was sie zu einem netten kleinen Vorlagenwerkzeug für den Aufbau einer Antwort macht. (Es ist eines der [Anführungskonstrukte](/de/advanced/quoting-constructs) von früher im Kurs.)

Verbinden Sie sich ein paar Mal, um den Zähler klettern zu sehen:

```console
$ curl http://127.0.0.1:8080/
Hello!
You are customer number 1.
Thanks for visiting.
$ curl http://127.0.0.1:8080/
Hello!
You are customer number 2.
Thanks for visiting.
```

Anfragen auf diese Weise nacheinander abzuwickeln ist die einfachste Art von Server. Ein Server für den Wirkbetrieb würde jede Verbindung zusätzlich auf einem eigenen Thread oder Promise bedienen, damit ein langsamer Client die anderen nicht aufhalten kann — doch sein Herz ist genau diese Schleife: annehmen, lesen, antworten, wiederholen.

{% include nav.html %}
