---
title: 'Решение: Путь в верхнем регистре'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

    # "GET /hello HTTP/1.0" — путь это второе слово; отбрасываем ведущий '/'
    my $reply = $request.lines.first.words[1].substr(1).uc;

    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n$reply\n");
    $conn.close;
}
```

🦋 Исходный код можно найти в файле [text-response.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/http-server/text-response.raku).

## Вывод

```
HELLO
```

## Комментарии

1. `.recv` читает запрос. Его первая строка — `GET /hello HTTP/1.0`; `.words[1]` выбирает `/hello`,
а `.substr(1)` отбрасывает ведущую косую черту, оставляя `hello`.

1. `.uc` переводит это в верхний регистр, и результат становится телом ответа. Ответ теперь зависит
от того, что запросил клиент: сервер **обрабатывает** запрос, а не возвращает фиксированную строку.

1. Весь блок «принять — прочитать — ответить» находится внутри `loop`, поэтому сервер отвечает
на запрос за запросом, а не останавливается после первого. Остановите его по Ctrl-C.

{% include nav.html %}
