---
title: 'Решение: Отправьте и получите'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $conn = IO::Socket::INET.new(:host('example.com'), :port(80));

$conn.print("HEAD / HTTP/1.0\r\nHost: example.com\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

🦋 Исходный код можно найти в файле [send-and-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/send-and-receive.raku).

## Вывод

```
HTTP/1.1 200 OK
```

## Комментарии

1. `.print` отправляет запрос; строки протокола заканчиваются на `\r\n`. Запрос `HEAD` просит
у сервера только строку состояния и заголовки, поэтому ответ невелик.

1. `.recv` читает ответ, а `.lines.first` берёт его первую строку — строку состояния HTTP.

{% include nav.html %}
