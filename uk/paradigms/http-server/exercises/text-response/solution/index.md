---
title: Розв'язання вправи «Шлях великими літерами»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

    # "GET /hello HTTP/1.0" — шлях є другим словом; відкидаємо початкову '/'
    my $reply = $request.lines.first.words[1].substr(1).uc;

    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n$reply\n");
    $conn.close;
}
```

🦋 Знайдіть програму у файлі [text-response.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/http-server/text-response.raku).

## Вивід

```
HELLO
```

## Коментарі

1. `.recv` читає запит. Його першим рядком є `GET /hello HTTP/1.0`; `.words[1]` вибирає `/hello`, а `.substr(1)` відкидає початкову скісну риску, лишаючи `hello`.

1. `.uc` переводить його у верхній регістр, і це стає тілом відповіді. Тепер відповідь залежить від того, що попросив клієнт, — сервер **обробляє** запит, а не повертає сталий рядок.

1. Увесь блок «прийми—прочитай—відповідай» сидить усередині `loop`, тож сервер відповідає на запит за запитом, а не зупиняється після першого. Спиніть його через Ctrl-C.

{% include nav.html %}
