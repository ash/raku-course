---
title: 'Решение: Изпратете и получете'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $conn = IO::Socket::INET.new(:host('example.com'), :port(80));

$conn.print("HEAD / HTTP/1.0\r\nHost: example.com\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

🦋 Намерете програмата във файла [send-and-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/send-and-receive.raku).

## Изход

```
HTTP/1.1 200 OK
```

## Коментари

1. `.print` изпраща заявката; редовете на протокола завършват с `\r\n`. Заявката `HEAD` иска от сървъра само реда за състояние и заглавките, така че отговорът е малък.

1. `.recv` прочита отговора, а `.lines.first` взема първия му ред — реда за състояние на HTTP.

{% include nav.html %}
