---
title: 'Soluzione: Stato con un client'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get('http://example.com/');
say $response.status;
```

🦋 Trova il programma nel file [status-line.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/status-line.raku).

## Output

```
200
```

## Commenti

1. `Cro::HTTP::Client.get` restituisce una promise — una richiesta di rete finisce più tardi — quindi la `await`-iamo.

1. L'oggetto risposta conosce già il proprio `.status`, quindi otteniamo subito `200` senza inviare il testo della richiesta né analizzare a mano la risposta. Confrontalo con la versione a socket grezzo: il modulo fa per te tutto il lavoro di protocollo.

{% include nav.html %}
