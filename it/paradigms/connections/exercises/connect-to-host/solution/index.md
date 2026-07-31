---
title: 'Soluzione: Collegatevi a un host'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [connect-to-host.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/connect-to-host.raku).

## Output

```
connected to example.com
```

## Commenti

1. `IO::Socket::INET.new(:host, :port)` apre subito la connessione e solleva un'eccezione se l'host è irraggiungibile.

1. Avvolgerla in `try` trasforma quell'eccezione in un `Nil` invece che in un crollo. L'`if … -> $conn` lega il socket quando la connessione riesce ed esegue il ramo `else` quando non riesce — il modo robusto di tentare una connessione.

1. Per vedere all'opera il ramo `else`, cambia `$host` in un nome che non esiste, come `'example.comp'`. La risoluzione DNS fallisce allora — senza il `try` otterresti un errore come `Failed to resolve host name 'example.comp'` — ma qui il `try` lo trasforma in `Nil`, quindi il programma stampa con calma `could not connect to example.comp`.

{% include nav.html %}
