---
title: Publiceren met fez
translations_gpt:
---

{% include menu.html %}

Het vorige onderwerp introduceerde `fez` als een manier om een distributie naar het Raku-ecosysteem te uploaden. Je hoeft `fez` niet te gebruiken — het is niet de enige manier om te publiceren — maar het is de meest gebruikelijke keuze, en het doet meer dan uploaden: het kan ook een nieuwe distributie voor je opzetten en je auteursaccount beheren. Installeer het met `zef`:

```
zef install fez
```

## Een distributie starten

In plaats van zelf een `META6.json` en de `lib/`- en `t/`-mappen samen te stellen, kun je `fez` de structuur laten aanmaken:

```
fez init My::Greeting
```

`fez init` initialiseert een nieuwe distributie om op voort te bouwen — een projectmap met een kant-en-klaar `META6.json` en de standaardindeling al op zijn plaats — zodat je direct code kunt schrijven onder `lib/` en tests onder `t/` in plaats van het metadatabestand zelf voor te bereiden.

## Registreren en inloggen

Publiceren vereist een ecosysteemaccount. Je maakt er eenmalig een aan met `fez register` (het vraagt om een gebruikersnaam, e-mailadres en wachtwoord) en logt in met `fez login`, dat je sleutel opslaat zodat latere commando's geauthenticeerd zijn:

```
fez register
fez login
```

Je gebruikersnaam is belangrijk: het `META6.json` van een distributie moet een `auth`-veld bevatten ingesteld op `zef:<gebruikersnaam>`, waarmee het ecosysteem weet dat de upload echt van jou is.

## Uploaden

Met het account op zijn plaats en de distributie gereed, verpakt `fez upload` de huidige map en dient deze in:

```
fez upload
```

Daarna kan iedereen het installeren met `zef install My::Greeting`. Elke versie mag maar eenmaal worden geüpload, dus vergeet niet de `version` in `META6.json` te verhogen voordat je een update publiceert.

## Andere handige commando's

Een paar andere `fez`-commando's die je zult gebruiken:

* `fez review` — controleer een distributie op waarschijnlijke problemen voordat je uploadt;
* `fez list` — toon de distributies die je al hebt gepubliceerd;
* `fez refresh` — bouw `META6.json` opnieuw op vanuit de bestanden die momenteel op schijf staan.

> Al deze commando's vereisen dat `fez` is geïnstalleerd en netwerktoegang, en alles na `init` vereist een ecosysteemaccount.

{% include nav.html %}
