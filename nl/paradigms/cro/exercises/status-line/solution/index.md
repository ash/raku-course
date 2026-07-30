---
title: 'Oplossing: Status met een client'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get('http://example.com/');
say $response.status;
```

🦋 Je kunt de broncode vinden in het bestand [status-line.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/status-line.raku).

## Uitvoer

```
200
```

## Opmerkingen

1. `Cro::HTTP::Client.get` geeft een promise terug — een netwerkverzoek is later klaar — dus `await`-en we haar.

1. Het antwoordobject kent zijn `.status` al, dus krijgen we `200` rechtstreeks, zonder de verzoektekst te versturen of het antwoord met de hand te ontleden. Vergelijk dit met de versie met kale socket: de module doet al het protocolwerk voor je.

{% include nav.html %}
