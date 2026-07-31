---
title: Pieprasījums publiskam API
translations_gpt:
---

{% include menu.html %}

Iepriekšējās lappuses klients sniedzas pie jebkura servera tīmeklī, ne tikai pie jūsu paša. Daudzi publiskie API atbild ar JSON, un Cro to jūsu vietā parsē, tāpēc `.body` atdod gatavu datu struktūru, nevis tekstu. Šeit mēs bezmaksas laika ziņu pakalpojumam prasām pašreizējo temperatūru Berlīnē:

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

kas izdrukā apmēram šādi:

```
Berlin right now:
  temperature: 21.9 °C
  wind speed:  8.4 km/h
```

Precīzie skaitļi, protams, mainās līdz ar laikapstākļiem. Abi skaitļi URL adresē ir ģeogrāfiskās koordinātas — `52.52° N, 13.41° E` ir Berlīne —, tāpēc ielieciet tur savas pilsētas platumu un garumu, lai iegūtu vietējos laikapstākļus. Tā vai citādi, viens pieprasījums un `.body` (vai `.body-text`) dod jums atbildi — bez ligzdām, bez statusa parsēšanas, bez JSON apstrādes ar rokām.

## Vienkāršs teksts terminālim

JSON nav vienīgā forma, kādā atbilde var nākt. Laika ziņu pakalpojums [wttr.in](https://wttr.in) prot atbildēt arī ar JSON, bet tā īpašība ir terminālim zīmēts vienkāršs teksts — un formātu tas izlemj, paskatoties, **kas jautā**: komandrindas klienti saņem tekstu, pārlūki saņem tīmekļa lappusi. Cro ļauj uzstādīt pieprasījuma galvenes, tāpēc stādieties priekšā kā viens no termināļa ļaudīm:

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get(
    'https://wttr.in/Berlin?format=3',
    headers => [ User-Agent => 'curl' ],
);
print await $response.body-text;
```

Tas izdrukā vienas rindas laika ziņu, gatavu čaulas uzvednei vai statusa joslai:

```
Berlin: 🌤️  +25°C
```

Šeit ķermenis ir vienkāršs teksts, tāpēc to nolasa ar `.body-text`. Izmetiet no URL `?format=3`, un pakalpojums atbildēs ar savu pilno, daudzrindu ASCII grafikas laika ziņu.

> Šiem piemēriem vajadzīgs uzstādīts Cro (`zef install cro`) un strādājošs tīkla savienojums.

Pieprasījumi un atbildes tomēr nav viss stāsts. Pēdējais temats atver **WebSocket** — dzīvu, divvirzienu kanālu, kurā šīs daļas reaktīvie rīki saņem savu lielo fināla numuru.

{% include nav.html %}
