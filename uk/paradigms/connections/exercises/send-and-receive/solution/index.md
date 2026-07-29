---
title: Розв'язання вправи «Надішліть і отримайте»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $conn = IO::Socket::INET.new(:host('example.com'), :port(80));

$conn.print("HEAD / HTTP/1.0\r\nHost: example.com\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

🦋 Знайдіть програму у файлі [send-and-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/send-and-receive.raku).

## Вивід

```
HTTP/1.1 200 OK
```

## Коментарі

1. `.print` надсилає запит; рядки протоколу закінчуються на `\r\n`. Запит `HEAD` просить у сервера лише рядок стану та заголовки, тож відповідь мала.

1. `.recv` читає відповідь, а `.lines.first` бере її перший рядок — рядок стану HTTP.

{% include nav.html %}
