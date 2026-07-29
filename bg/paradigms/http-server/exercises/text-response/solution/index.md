---
title: 'Решение: Пътят с главни букви'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

loop {
    my $conn = $listener.accept;
    my $request = $conn.recv;

    # "GET /hello HTTP/1.0" — пътят е втората дума; махаме началната '/'
    my $reply = $request.lines.first.words[1].substr(1).uc;

    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n$reply\n");
    $conn.close;
}
```

🦋 Намерете програмата във файла [text-response.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/http-server/text-response.raku).

## Изход

```
HELLO
```

## Коментари

1. `.recv` прочита заявката. Първият ѝ ред е `GET /hello HTTP/1.0`; `.words[1]` избира `/hello`, а `.substr(1)` маха началната наклонена черта и остава `hello`.

1. `.uc` го превръща в главни букви и това става тялото на отговора. Сега отговорът зависи от онова, което клиентът е поискал — сървърът **обработва** заявката, вместо да връща постоянен низ.

1. Целият блок „приеми—прочети—отговори“ седи вътре в `loop`, така че сървърът отговаря на заявка след заявка, вместо да спре след първата. Спрете го с Ctrl-C.

{% include nav.html %}
