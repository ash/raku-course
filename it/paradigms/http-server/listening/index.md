---
title: Restare in ascolto di connessioni
translations_gpt:
---

{% include menu.html %}

Per fare da server, crea un socket in modalità di **ascolto** con l'argomento `:listen`, indicando l'indirizzo e la porta su cui ascoltare:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);
```

`:localhost('127.0.0.1')` ascolta sulla tua macchina, e `:localport(8080)` è la porta a cui i client devono connettersi. Il socket sta ora aspettando, ma nessun client è ancora arrivato.

Per prendere la connessione in arrivo successiva, chiama `.accept`. **Blocca** finché un client non si connette, poi restituisce un socket fresco che rappresenta quella singola conversazione:

```raku
my $conn = $listener.accept;
say 'a client connected';
```

Il `$listener` continua ad ascoltare altri client, mentre `$conn` è il tuo canale per parlare con questo in particolare. Un server vero chiama `.accept` in un ciclo, gestendo ogni client man mano che arriva.

> Questi esempi girano sulla tua macchina; raggiungili da un browser o da un altro programma a `127.0.0.1:8080`.

Quindi un server è solo un socket girato al contrario: invece di `:host`/`:port` per chiamare fuori, dai `:listen` con `:localhost`/`:localport` per aspettare le chiamate in entrata.

{% include nav.html %}
