---
title: Ceļš lielajiem burtiem
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Lieciet serverim ar klienta ievadi paveikt īstu darbu, nevis atgriezt nemainīgu virkni. Uzrakstiet serveri, kas **ciklā** (kā iepriekšējā lappusē) nolasa katru pieprasījumu, paņem prasīto **ceļu** un nosūta to atpakaļ **lielajos burtos** — tā, lai pieprasījums uz `/hello` atbildētu ar `HELLO`. Ceļš ir pieprasījuma pirmās rindas otrais vārds (`GET /hello HTTP/1.0`); pirms pārvēršanas lielajos burtos atmetiet sākuma `/`. Serveris turpina apkalpot pieprasījumu pēc pieprasījuma; apturiet to ar Ctrl-C.

## Piemērs

Pieprasot ceļu ar `curl`, tas atgriežas ar lielajiem burtiem:

```console
$ curl http://127.0.0.1:8080/hello
HELLO
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
