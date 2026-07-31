---
title: Un semplice server HTTP
translations_gpt:
---

{% include menu.html %}

Un _server_ è l'altro lato di una connessione: invece di allungarsi verso una macchina remota, aspetta che siano i client ad allungarsi **verso di lui**. Anche questo lo fa la stessa classe di base, `IO::Socket::INET`: basta metterla in modalità di ascolto.

Questa sezione costruisce a mano un minuscolo server web: mettersi in ascolto di una connessione, leggere la richiesta e rimandare indietro una risposta HTTP. Come gli esempi con i socket di prima, questi vanno eseguiti sulla tua macchina e raggiunti con un browser o con un altro programma.

{% include nav.html %}
