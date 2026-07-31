---
title: 'Solvo: La vojo per majuskloj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

loop {
    my $conn = $listener.accept;
    my $request = $conn.recv;

    # "GET /hello HTTP/1.0" — la vojo estas la dua vorto; forigu la komencan '/'
    my $reply = $request.lines.first.words[1].substr(1).uc;

    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n$reply\n");
    $conn.close;
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [text-response.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/http-server/text-response.raku).

## Eligo

```
HELLO
```

## Komentoj

1. `.recv` legas la peton. Ĝia unua linio estas `GET /hello HTTP/1.0`; `.words[1]` elektas `/hello`, kaj `.substr(1)` forigas la komencan oblikvon, lasante `hello`.

1. `.uc` majuskligas ĝin, kaj tio fariĝas la korpo de la respondo. La respondo nun dependas de tio, kion la kliento petis — la servilo **traktas** la peton, ne redonas fiksitan ĉenon.

1. La tuta bloko akcepti-legi-respondi sidas ene de `loop`, do la servilo respondas unu peton post la alia anstataŭ halti post la unua. Haltigu ĝin per Ctrl-C.

{% include nav.html %}
