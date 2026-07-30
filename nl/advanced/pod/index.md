---
title: Code documenteren
---

{% include menu.html %}

Raku heeft een documentatie-opmaaktaal die in de taal zelf is ingebouwd, genaamd _Pod_ (of _Rakudoc_). Je schrijft documentatie rechtstreeks in je bronbestand met behulp van `=`-directieven, en de compiler kan deze zowel weergeven als beschikbaar maken voor je programma.

Dit gedeelte behandelt de basis Pod-directieven, de opmaakcodes voor het markeren van tekst, en hoe je de documentatie kunt benaderen — hetzij als weergegeven tekst met `raku --doc`, hetzij als gegevens via de variabele `$=pod`.

{% include nav.html %}
