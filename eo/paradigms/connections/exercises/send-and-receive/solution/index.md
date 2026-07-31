---
title: 'Solvo: Sendu kaj ricevu'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $conn = IO::Socket::INET.new(:host('example.com'), :port(80));

$conn.print("HEAD / HTTP/1.0\r\nHost: example.com\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

🦋 Vi povas trovi la fontkodon en la dosiero [send-and-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/send-and-receive.raku).

## Eligo

```
HTTP/1.1 200 OK
```

## Komentoj

1. `.print` sendas la peton; la protokolaj linioj finiĝas per `\r\n`. Peto `HEAD` petas de la servilo nur la statusan linion kaj la kapojn, do la respondo estas malgranda.

1. `.recv` legas la respondon, kaj `.lines.first` prenas ĝian unuan linion — la statusan linion de HTTP.

{% include nav.html %}
