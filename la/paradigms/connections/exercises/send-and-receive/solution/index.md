---
title: 'Solutio: Mitte et accipe'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $conn = IO::Socket::INET.new(:host('example.com'), :port(80));

$conn.print("HEAD / HTTP/1.0\r\nHost: example.com\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

🦋 Inveni codicem fontem in archivo [send-and-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/send-and-receive.raku).

## Exitus

```
HTTP/1.1 200 OK
```

## Commentarii

1. `.print` petitionem mittit; lineae protocolli in `\r\n` finiunt. Petitio `HEAD` a servitore solam lineam status et capita poscit, itaque responsum parvum est.

1. `.recv` responsum legit, et `.lines.first` primam lineam eius capit — lineam status HTTP.

{% include nav.html %}
