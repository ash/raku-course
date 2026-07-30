---
title: Een eenvoudige HTTP-server
translations_gpt:
---

{% include menu.html %}

Een _server_ is de andere kant van een verbinding: in plaats van naar een machine op afstand uit te reiken, wacht hij tot clients naar **binnen** reiken. Dezelfde kernklasse, `IO::Socket::INET`, doet dit ook — je zet haar alleen in luistermodus.

Deze sectie bouwt met de hand een piepkleine webserver: luister op een verbinding, lees het verzoek, en stuur een HTTP-antwoord terug. Net als bij de eerdere socketvoorbeelden moeten deze op je eigen machine draaien en met een browser of een ander programma benaderd worden.

{% include nav.html %}
