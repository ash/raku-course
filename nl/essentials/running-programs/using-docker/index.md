---
title: Docker gebruiken om Raku uit te voeren
---

{% include menu.html %}

Een Rakudo Star docker image kan worden gebruikt voor zowel het uitvoeren van een REPL-shell als het uitvoeren van een programma vanuit een bestand.

Om de shell te starten, voer je het volgende commando uit. Het zal de nieuwste `rakudo-star` image downloaden indien nodig.

```console
$ docker run -it rakudo-star
```
Om een programma uit te voeren, gebruik je het volgende commando:

```console
$ docker run -v "$(pwd):/script" rakudo-star raku /script/hello.raku
```

Voeg de `--rm` vlag toe als je de container wilt opruimen en het bestandssysteem wilt verwijderen wanneer de container afsluit. Vind meer instructies op de projectpagina.

## Externe links

* [Docker image](https://hub.docker.com/_/rakudo-star/)
* [Raku docker project op GitHub](https://github.com/Raku/docker)

{% include nav.html %}