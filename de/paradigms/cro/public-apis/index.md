---
title: Von einer öffentlichen Schnittstelle abrufen
translations_gpt:
---

{% include menu.html %}

Der Client der vorigen Seite erreicht jeden Server im Web, nicht nur Ihren eigenen. Viele öffentliche Schnittstellen antworten mit JSON, und Cro zerlegt das für Sie, `.body` liefert also eine fertige Datenstruktur statt Text. Hier fragen wir einen kostenlosen Wetterdienst nach der aktuellen Temperatur in Berlin:

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

was etwa dies ausgibt:

```
Berlin right now:
  temperature: 21.9 °C
  wind speed:  8.4 km/h
```

Die genauen Zahlen ändern sich natürlich mit dem Wetter. Die beiden Zahlen in der URL sind geografische Koordinaten — `52.52° N, 13.41° O` ist Berlin —, setzen Sie also Breite und Länge Ihrer eigenen Stadt ein, um Ihr örtliches Wetter zu bekommen. So oder so geben Ihnen eine Anfrage und `.body` (oder `.body-text`) die Antwort — keine Sockets, kein Zerlegen von Status, kein JSON von Hand.

## Reiner Text fürs Terminal

JSON ist nicht die einzige Gestalt, die eine Antwort annehmen kann. Der Wetterdienst [wttr.in](https://wttr.in) kann auch JSON liefern, doch seine Besonderheit ist reiner, fürs Terminal gezeichneter Text — und er entscheidet über das Format, indem er nachsieht, **wer fragt**: Clients auf der Befehlszeile bekommen Text, Browser eine Webseite. Cro lässt Sie Anfrage-Header setzen, stellen Sie sich also als einer vom Terminalvolk vor:

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get(
    'https://wttr.in/Berlin?format=3',
    headers => [ User-Agent => 'curl' ],
);
print await $response.body-text;
```

Das gibt einen einzeiligen Wetterbericht aus, bereit für eine Shell-Eingabezeile oder eine Statusleiste:

```
Berlin: 🌤️  +25°C
```

Hier ist der Rumpf reiner Text, er wird also mit `.body-text` gelesen. Lassen Sie das `?format=3` aus der URL weg, und der Dienst antwortet stattdessen mit seinem vollständigen, mehrzeiligen Wetterbericht in ASCII-Kunst.

> Diese Beispiele brauchen Cro installiert (`zef install cro`) und eine funktionierende Netzverbindung.

Anfragen und Antworten sind allerdings nicht die ganze Geschichte. Das letzte Thema öffnet einen **WebSocket** — einen lebendigen Zweiwegkanal, in dem die reaktiven Werkzeuge dieses Teils ihr großes Finale bekommen.

{% include nav.html %}
