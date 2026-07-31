---
title: Una rotta con un parametro
translations_gpt:
---

{% include menu.html %}

La rotta della pagina precedente restituiva sempre lo stesso testo. I servizi veri adattano la propria risposta a ciò che il client chiede, e il modo più semplice per farlo è leggere una parte dell'**URL** come parametro. In una rotta Cro un pezzo dopo il percorso fisso diventa una variabile nella firma:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello', $name {
        content 'text/plain', "Hello, $name!";
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Listening on http://127.0.0.1:8080 — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

La cosa interessante è la firma `-> 'hello', $name`: riconosce un percorso di due pezzi — il letterale `hello`, poi qualunque cosa, catturata in `$name`. Il resto del programma è lo stesso scheletro di server della pagina precedente. Una richiesta di `/hello/Anna` lega `$name` ad `Anna` e restituisce `Hello, Anna!`; `/hello/Bob` restituisce `Hello, Bob!`. Una rotta, una risposta diversa per ogni nome:

```console
$ curl http://127.0.0.1:8080/hello/Anna
Hello, Anna!
```

> Questo esempio ha bisogno di Cro installato (`zef install cro`).

Sono i parametri a tenere piccola una rotta mentre gestisce un'intera famiglia di percorsi. Una rotta può prendere più pezzi, riconoscere solo certe forme, leggere le stringhe di query e restituire JSON — ma tutto si costruisce su questa unica idea: dare un nome nella firma alle parti variabili dell'URL e usarle nella risposta.

I percorsi che non corrispondono ad alcuna rotta non sono un tuo problema: Cro risponde loro da sé con `404 Not Found`. E quando una rotta *corrisponde* ma non ha nulla da restituire — il nome non trova nulla, per esempio — chiama `not-found` nel gestore per inviare di proposito la stessa 404. Il **metodo** viene controllato con lo stesso rigore del percorso: questo blocco dichiara solo `get`, quindi a una richiesta `HEAD` o `POST` sullo stesso percorso si risponde con `405 Method Not Allowed`. Puoi vederlo tu stesso con `curl -I`, che invia `HEAD` invece di `GET`.

Un servizio, però, è solo metà della storia: qualcosa deve pur chiamarlo. La pagina successiva capovolge Cro e usa il suo **client** per parlare con un server come quelli appena costruiti.

{% include nav.html %}
