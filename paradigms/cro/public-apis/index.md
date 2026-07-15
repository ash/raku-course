---
title: Fetching from a public API
---

{% include menu.html %}

The client from the previous page reaches any server on the web, not only your own. Many public APIs reply with JSON, and Cro parses that for you, so `.body` gives back a ready-made data structure rather than text. Here we ask a free weather service for the current temperature in Berlin:

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

which prints something like:

```
Berlin right now:
  temperature: 21.9 °C
  wind speed:  8.4 km/h
```

The exact numbers change with the weather, of course. The two numbers in the URL are geographic coordinates — `52.52° N, 13.41° E` is Berlin — so put your own city's latitude and longitude there to get your local weather. Either way, one request and `.body` (or `.body-text`) gives you the answer — no sockets, no status parsing, no JSON handling by hand.

## Plain text for the terminal

JSON is not the only shape an answer can take. The weather service [wttr.in](https://wttr.in) can serve JSON too, but its speciality is plain text drawn for the terminal — and it decides the format by looking at **who is asking**: command-line clients get text, browsers get a web page. Cro lets you set request headers, so introduce yourself as one of the terminal folk:

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get(
    'https://wttr.in/Berlin?format=3',
    headers => [ User-Agent => 'curl' ],
);
print await $response.body-text;
```

This prints a one-line weather report, ready for a shell prompt or a status bar:

```
Berlin: 🌤️  +25°C
```

Here the body is plain text, so it is read with `.body-text`. Drop the `?format=3` from the URL and the service replies with its full, multi-line ASCII-art weather report instead.

> These examples need Cro installed (`zef install cro`) and a working network connection.

Requests and responses are not the whole story, though. The final topic opens a **WebSocket** — a live, two-way channel where the reactive tools of this part get their grand finale.

{% include nav.html %}
