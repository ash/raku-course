---
title: Aprire un socket
translations_gpt:
---

{% include menu.html %}

Un _socket_ è una connessione fra due programmi attraverso una rete. La classe di base di Raku per i socket TCP è `IO::Socket::INET`, e per usarla non serve installare nulla in più.

Per connetterti a un server remoto, crea un socket con l'host e la porta che vuoi raggiungere:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));
say 'connected';
$conn.close;
```

`IO::Socket::INET.new` apre la connessione all'istante. La porta `80` è la porta standard per HTTP, quindi questo si connette al server web di `raku.org`. Quando hai finito, `.close` rilascia la connessione.

> Questo esempio ha bisogno di una connessione di rete funzionante per girare. Quando si connette con successo stampa `connected`.

La stessa classe si usa in due modalità: come **client**, connettendosi verso un server come qui, e come **server**, restando in ascolto di connessioni in arrivo (cosa che vedrai più avanti). Per ora l'idea da portarsi via è che `IO::Socket::INET.new(:host, :port)` ti dà un canale a due vie vivo verso un'altra macchina.

{% include nav.html %}
