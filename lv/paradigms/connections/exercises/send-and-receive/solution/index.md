---
title: 'Risinājums: Nosūtiet un saņemiet'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $conn = IO::Socket::INET.new(:host('example.com'), :port(80));

$conn.print("HEAD / HTTP/1.0\r\nHost: example.com\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

🦋 Atrodiet programmu failā [send-and-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/send-and-receive.raku).

## Izvade

```
HTTP/1.1 200 OK
```

## Komentāri

1. `.print` nosūta pieprasījumu; protokola rindas beidzas ar `\r\n`. `HEAD` pieprasījums serverim prasa tikai statusa rindu un galvenes, tāpēc atbilde ir maza.

1. `.recv` nolasa atbildi, un `.lines.first` paņem tās pirmo rindu — HTTP statusa rindu.

{% include nav.html %}
