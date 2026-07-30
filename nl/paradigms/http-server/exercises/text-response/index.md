---
title: Oefening ’Zet het pad in hoofdletters‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Laat de server echt werk doen met de invoer van de client in plaats van een vaste string terug te geven. Schrijf een server die in een **lus** (zoals op de vorige pagina) elk verzoek leest, het gevraagde **pad** neemt en het **in hoofdletters** terugstuurt — zodat een verzoek om `/hello` met `HELLO` antwoordt. Het pad is het tweede woord van de eerste regel van het verzoek (`GET /hello HTTP/1.0`); laat de voorafgaande `/` vallen voordat je het in hoofdletters zet. De server blijft verzoek na verzoek bedienen; stop hem met Ctrl-C.

## Voorbeeld

Een pad opvragen met `curl` geeft het in hoofdletters terug:

```console
$ curl http://127.0.0.1:8080/hello
HELLO
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
