---
title: Usare un modulo client
translations_gpt:
---

{% include menu.html %}

Cro non serve solo a costruire servizi: fornisce anche un **client** HTTP per fare richieste. Il modo più chiaro di conoscerlo è puntarlo esattamente sul server che hai costruito nella pagina precedente. Qui entrambe le metà girano in un unico programma: avviamo il servizio e poi lo chiamiamo noi stessi.

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;
use Cro::HTTP::Client;

# the tiny service from the previous page
my $application = route {
    get -> 'hello' { content 'text/plain', 'Hello from Cro!'; }
}
my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'), :port(8080), :application($application),
);
$server.start;

# now be the client and call it
my $response = await Cro::HTTP::Client.get('http://127.0.0.1:8080/hello');
say await $response.body-text; # Hello from Cro!

$server.stop;
```

`Cro::HTTP::Client.get` restituisce una promise — il che è appropriato, dato che una richiesta di rete finisce più tardi — quindi la `await`-i. L'oggetto risposta conosce il proprio stato, le proprie intestazioni e il proprio corpo; `await $response.body-text` restituisce il testo che il server ha inviato, `Hello from Cro!`. Confrontalo con il socket grezzo della [sezione sulle connessioni](/it/paradigms/connections/sending-receiving): niente `\r\n`, nessuna riga di stato da analizzare, nessuna lettura in un ciclo — client e server si parlano in poche righe semplici.

> Questo esempio ha bisogno di Cro installato (`zef install cro`).

## Quando la pagina non c'è

E se chiedi un percorso che il servizio non ha? Il lato server è semplice: una richiesta che non corrisponde ad alcuna rotta riceve automaticamente da Cro un `404 Not Found`. Dal lato client, una richiesta fallita **solleva un'eccezione** — l'errore viaggia insieme alla promise e salta fuori all'`await`, esattamente come hai visto per le [promise rotte](/it/paradigms/await/awaiting-promises) — quindi la gestisci con i soliti strumenti per le eccezioni:

```raku
my $response = try await Cro::HTTP::Client.get('http://127.0.0.1:8080/goodbye');
if $! {
    say 'Request failed with status ', $!.response.status; # 404
}
else {
    say await $response.body-text;
}
```

Il nostro servizio ha una rotta `hello` ma nessuna `goodbye`, quindi questo stampa `Request failed with status 404`. L'eccezione porta con sé la risposta completa nel suo `.response`, con il codice di stato e le intestazioni da consultare.

Il tuo servizio, però, è solo il server più vicino. La pagina successiva punta lo stesso client sul web aperto: **API pubbliche** che rispondono con JSON o con testo adatto al terminale.

{% include nav.html %}
