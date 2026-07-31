---
title: Ab API publico petere
translations_gpt:
---

{% include menu.html %}

Cliens paginae prioris quemlibet servitorem in rete attingit, non solum tuum. Multa APIs publica per JSON respondent, et Cro illud pro te resolvit, itaque `.body` structuram datorum paratam pro textu reddit. Hic servitium tempestatis gratuitum de temperatura praesenti Berolini rogamus:

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

quod aliquid tale imprimit:

```
Berlin right now:
  temperature: 21.9 °C
  wind speed:  8.4 km/h
```

Numeri exacti cum tempestate mutantur, scilicet. Duo numeri in URL coordinatae geographicae sunt — `52.52° N, 13.41° E` Berolinum est — itaque pone ibi latitudinem et longitudinem urbis tuae ut tempestatem localem accipias. Utroque modo, una petitio et `.body` (vel `.body-text`) responsum tibi dat — nulla foramina, nulla status resolutio, nullum JSON manu tractandum.

## Textus simplex pro terminali

JSON non sola forma est quam responsum sumere potest. Servitium tempestatis [wttr.in](https://wttr.in) JSON quoque servire potest, sed peculiaritas eius textus simplex pro terminali pictus est — et formam decernit inspiciens **quis roget**: clientes lineae imperiorum textum accipiunt, navigatra paginam retialem. Cro sinit te capita petitionis ponere, itaque te ut unum ex populo terminalis introduc:

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get(
    'https://wttr.in/Berlin?format=3',
    headers => [ User-Agent => 'curl' ],
);
print await $response.body-text;
```

Hoc relationem tempestatis unius lineae imprimit, prompto conchae vel virgae status paratam:

```
Berlin: 🌤️  +25°C
```

Hic corpus textus simplex est, itaque per `.body-text` legitur. Abice `?format=3` ex URL et servitium relationem tempestatis plenam, multarum linearum, arte ASCII pictam pro eo respondet.

> Haec exempla Cro installato (`zef install cro`) et coniunctione retiali operanti egent.

Petitiones et responsa tamen non tota fabula sunt. Argumentum ultimum **WebSocket** aperit — canalem vivum, bilaterem, ubi instrumenta reactiva huius partis finem magnificum accipiunt.

{% include nav.html %}
