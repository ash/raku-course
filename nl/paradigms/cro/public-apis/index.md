---
title: Ophalen van een openbare API
translations_gpt:
---

{% include menu.html %}

De client van de vorige pagina bereikt elke server op het web, niet alleen die van jou. Veel openbare API's antwoorden met JSON, en Cro ontleedt dat voor je, zodat `.body` een kant-en-klare gegevensstructuur teruggeeft in plaats van tekst. Hier vragen we een gratis weerdienst om de huidige temperatuur in Berlijn:

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

wat zoiets afdrukt als:

```
Berlin right now:
  temperature: 21.9 °C
  wind speed:  8.4 km/h
```

De precieze getallen veranderen natuurlijk met het weer. De twee getallen in de URL zijn geografische coördinaten — `52.52° N, 13.41° O` is Berlijn — dus zet je eigen breedte- en lengtegraad daar neer om je plaatselijke weer te krijgen. Hoe dan ook geven één verzoek en `.body` (of `.body-text`) je het antwoord — geen sockets, geen statusontleding, geen JSON met de hand afhandelen.

## Kale tekst voor de terminal

JSON is niet de enige vorm die een antwoord kan aannemen. De weerdienst [wttr.in](https://wttr.in) kan ook JSON leveren, maar zijn specialiteit is kale tekst die voor de terminal getekend is — en hij bepaalt het formaat door te kijken **wie het vraagt**: clients op de opdrachtregel krijgen tekst, browsers krijgen een webpagina. Cro laat je verzoekheaders instellen, dus stel jezelf voor als een van de terminalmensen:

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get(
    'https://wttr.in/Berlin?format=3',
    headers => [ User-Agent => 'curl' ],
);
print await $response.body-text;
```

Dit drukt een weerbericht van één regel af, klaar voor een shellprompt of een statusbalk:

```
Berlin: 🌤️  +25°C
```

Hier is de body kale tekst, dus wordt hij met `.body-text` gelezen. Laat de `?format=3` uit de URL weg en de dienst antwoordt in plaats daarvan met haar volledige weerbericht in ASCII-kunst over meerdere regels.

> Deze voorbeelden hebben Cro geïnstalleerd (`zef install cro`) en een werkende netwerkverbinding nodig.

Verzoeken en antwoorden zijn echter niet het hele verhaal. Het laatste onderwerp opent een **WebSocket** — een levend tweewegkanaal waar de reactieve gereedschappen van dit deel hun grote finale krijgen.

{% include nav.html %}
