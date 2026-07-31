---
title: 'Solutio: Ad hospitem te coniunge'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $host = 'example.com';

if try IO::Socket::INET.new(:host($host), :port(80)) -> $conn {
    say "connected to $host";
    $conn.close;
}
else {
    say "could not connect to $host";
}
```

🦋 Inveni codicem fontem in archivo [connect-to-host.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/connect-to-host.raku).

## Exitus

```
connected to example.com
```

## Commentarii

1. `IO::Socket::INET.new(:host, :port)` coniunctionem statim aperit, et iacit si hospes attingi non potest.

1. Illud in `try` involvere illam exceptionem in `Nil` vertit pro fractura. `if … -> $conn` foramen ligat cum coniunctio succedit et ramum `else` currit cum non succedit — modus firmus coniunctionem temptandi.

1. Ut ramum `else` in actione videas, muta `$host` in nomen quod non exsistit, ut `'example.comp'`. Inquisitio DNS tunc deficit — sine `try` errorem ut `Failed to resolve host name 'example.comp'` acciperes — sed hic `try` illum in `Nil` vertit, itaque programma placide `could not connect to example.comp` imprimit.

{% include nav.html %}
