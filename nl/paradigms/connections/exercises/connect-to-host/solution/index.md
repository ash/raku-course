---
title: 'Oplossing: Verbinding met een host'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [connect-to-host.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/connect-to-host.raku).

## Uitvoer

```
connected to example.com
```

## Opmerkingen

1. `IO::Socket::INET.new(:host, :port)` opent de verbinding meteen en werpt als de host onbereikbaar is.

1. Haar in `try` wikkelen maakt van die exceptie een `Nil` in plaats van een crash. De `if … -> $conn` bindt de socket wanneer de verbinding lukt en draait de `else`-tak wanneer dat niet zo is — de robuuste manier om een verbinding te proberen.

1. Om de `else`-tak in actie te zien, verander je `$host` in een naam die niet bestaat, zoals `'example.comp'`. De DNS-opzoeking mislukt dan — zonder de `try` zou je een fout als `Failed to resolve host name 'example.comp'` krijgen — maar hier maakt de `try` er een `Nil` van, dus drukt het programma kalm `could not connect to example.comp` af.

{% include nav.html %}
