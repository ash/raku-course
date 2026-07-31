---
title: "Interrogare un'API pubblica"
translations_gpt:
---

{% include menu.html %}

Il client della pagina precedente raggiunge qualunque server sul web, non solo il tuo. Molte API pubbliche rispondono con JSON, e Cro lo analizza per te, quindi `.body` restituisce una struttura dati pronta invece che del testo. Qui chiediamo a un servizio meteo gratuito la temperatura attuale a Berlino:

```raku
use Cro::HTTP::Client;

my $url = 'https://api.open-meteo.com/v1/forecast'
        ~ '?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m';

my $response = await Cro::HTTP::Client.get($url);
my %current  = (await $response.body)<current>;

say "Berlin right now:";
say "  temperature: %current<temperature_2m> °C";
say "  wind speed:  %current<wind_speed_10m> km/h";
```

che stampa qualcosa come:

```
Berlin right now:
  temperature: 21.9 °C
  wind speed:  8.4 km/h
```

I numeri esatti cambiano ovviamente con il tempo. I due numeri nell'URL sono coordinate geografiche — `52.52° N, 13.41° E` è Berlino — quindi metti la latitudine e la longitudine della tua città per avere il tuo meteo locale. In ogni caso, una richiesta e `.body` (oppure `.body-text`) ti danno la risposta: niente socket, nessuna analisi dello stato, nessun JSON a mano.

## Testo semplice per il terminale

JSON non è l'unica forma che una risposta può assumere. Il servizio meteo [wttr.in](https://wttr.in) sa restituire anche JSON, ma la sua particolarità è il testo semplice disegnato per il terminale — e decide il formato guardando **chi chiede**: i client da riga di comando ricevono testo, i browser una pagina web. Cro ti lascia impostare le intestazioni della richiesta, quindi presentati come uno del popolo del terminale:

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get(
    'https://wttr.in/Berlin?format=3',
    headers => [ User-Agent => 'curl' ],
);
print await $response.body-text;
```

Questo stampa un bollettino meteo di una riga, pronto per un prompt della shell o per una barra di stato:

```
Berlin: 🌤️  +25°C
```

Qui il corpo è testo semplice, quindi si legge con `.body-text`. Togli il `?format=3` dall'URL e il servizio risponderà invece con il suo bollettino completo su più righe in arte ASCII.

> Questi esempi hanno bisogno di Cro installato (`zef install cro`) e di una connessione di rete funzionante.

Richieste e risposte non sono però tutta la storia. L'ultimo argomento apre un **WebSocket**: un canale a due vie vivo in cui gli strumenti reattivi di questa parte hanno il loro gran finale.

{% include nav.html %}
