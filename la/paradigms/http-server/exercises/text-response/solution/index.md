---
title: 'Solutio: Via litteris maioribus'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

loop {
    my $conn = $listener.accept;
    my $request = $conn.recv;

    # "GET /hello HTTP/1.0" — via secundum verbum est; abice '/' praecedens
    my $reply = $request.lines.first.words[1].substr(1).uc;

    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n$reply\n");
    $conn.close;
}
```

🦋 Inveni codicem fontem in archivo [text-response.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/http-server/text-response.raku).

## Exitus

```
HELLO
```

## Commentarii

1. `.recv` petitionem legit. Prima linea eius est `GET /hello HTTP/1.0`; `.words[1]` `/hello` eligit, et `.substr(1)` virgulam praecedentem abicit ut `hello` relinquat.

1. `.uc` illud in maiusculas vertit, et illud corpus responsi fit. Responsum nunc ex eo pendet quod cliens poposcit — servitor petitionem **tractat**, non catenam fixam reddit.

1. Totus blocus accipe-lege-responde intra `loop` sedet, itaque servitor unam petitionem post alteram respondet pro eo quod post primam consistit. Siste eum per Ctrl-C.

{% include nav.html %}
