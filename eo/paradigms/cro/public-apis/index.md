---
title: Peti de publika API
translations_gpt:
---

{% include menu.html %}

La kliento de la antaŭa paĝo atingas ajnan servilon en la reto, ne nur vian propran. Multaj publikaj API-oj respondas per JSON, kaj Cro analizas tion por vi, do `.body` redonas pretan datumstrukturon prefere ol tekston. Ĉi tie ni petas de senpaga veterservo la aktualan temperaturon en Berlino:

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

kio presas ion kiel:

```
Berlin right now:
  temperature: 21.9 °C
  wind speed:  8.4 km/h
```

La precizaj nombroj ŝanĝiĝas kun la vetero, kompreneble. La du nombroj en la URL estas geografiaj koordinatoj — `52.52° N, 13.41° E` estas Berlino — do metu tien la latitudon kaj longitudon de via propra urbo por ricevi vian lokan veteron. Ĉiuokaze, unu peto kaj `.body` (aŭ `.body-text`) donas al vi la respondon — neniuj kontaktskatoloj, neniu analizo de statuso, neniu mana traktado de JSON.

## Simpla teksto por la terminalo

JSON ne estas la sola formo, kiun respondo povas preni. La veterservo [wttr.in](https://wttr.in) povas servi ankaŭ JSON, sed ĝia specialaĵo estas simpla teksto desegnita por la terminalo — kaj ĝi decidas la formaton, rigardante **kiu demandas**: komandliniaj klientoj ricevas tekston, retumiloj ricevas retpaĝon. Cro ebligas al vi fiksi petajn kapojn, do prezentu vin kiel unu el la terminala popolo:

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get(
    'https://wttr.in/Berlin?format=3',
    headers => [ User-Agent => 'curl' ],
);
print await $response.body-text;
```

Ĉi tio presas unulinian veterraporton, pretan por ŝela invito aŭ statusbreto:

```
Berlin: 🌤️  +25°C
```

Ĉi tie la korpo estas simpla teksto, do ĝi estas legata per `.body-text`. Forigu la `?format=3` el la URL, kaj la servo respondas per sia plena, plurlinia vetera raporto en ASCII-arto anstataŭe.

> Ĉi tiuj ekzemploj bezonas Cro instalitan (`zef install cro`) kaj funkciantan retan konekton.

Petoj kaj respondoj tamen ne estas la tuta historio. La fina temo malfermas **WebSocket** — vivan, duflankan kanalon, kie la reaktivaj iloj de ĉi tiu parto ricevas sian grandan finalon.

{% include nav.html %}
