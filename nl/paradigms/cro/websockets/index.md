---
title: WebSockets
translations_gpt:
---

{% include menu.html %}

Een HTTP-gesprek is eenmalig: de client vraagt, de server antwoordt, en de verbinding is klaar. Een **WebSocket** maakt daar een langlevend tweewegkanaal van — elke kant kan op elk moment een bericht sturen, en dat is wat chats, spellen en live dashboards nodig hebben. Cro ondersteunt WebSockets meteen, en een WebSocket-afhandelaar is gebouwd uit de reactieve gereedschappen die je al kent: een berichtenstroom is een supply.

Hier is een piepkleine chatserver. Elk bericht dat een client verstuurt, wordt door de server in hoofdletters gezet en naar iedereen die verbonden is uitgezonden — zodat wat terugkomt zichtbaar *niet* is wat eruit ging, wat bewijst dat de gegevens werkelijk de heen-en-weerreis maakten:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Router::WebSocket;
use Cro::HTTP::Server;

my $chat = Supplier.new;

my $application = route {
    get -> 'chat' {
        web-socket -> $incoming {
            supply {
                whenever $incoming -> $message {
                    $chat.emit(uc(await $message.body-text));
                    LAST { done }
                }
                whenever $chat -> $text {
                    emit $text;
                }
            }
        }
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Chat server on ws://127.0.0.1:8080/chat — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

Kijk naar het `web-socket`-blok — het is het reactieve deel van de cursus in het klein. Elke verbonden client krijgt een `supply` met twee `whenever`s: de ene bekijkt `$incoming`, de berichten die *van* die client binnenkomen, zet ze in hoofdletters en duwt ze in de gedeelde `$chat`-supplier; de andere bekijkt `$chat` en `emit`-t elke uitgezonden tekst terug *naar* de client. Eén `Supplier`, door elke verbinding afgetapt, is de hele chatruimte.

De kleine `LAST { done }` doet ertoe. Het is de [faser](/nl/advanced/block-phasers) die je bij lussen tegenkwam; in een `whenever`-blok gaat hij af wanneer de bekeken stroom **eindigt** — dat wil zeggen wanneer deze client de verbinding verbreekt. Daar `done` aanroepen sluit de hele verbindingssupply en meldt haar bij `$chat` af. Zonder dat zou de `whenever $chat` van een vertrokken client blijven hangen, en zou de volgende uitzending naar een gesloten socket proberen te schrijven en op de server een fout afdrukken.

Een browser praat hiermee met een paar regels JavaScript, maar een ander Raku-programma ook — Cro levert ook de clientkant:

```raku
use Cro::WebSocket::Client;

my $conn = await Cro::WebSocket::Client.connect('ws://127.0.0.1:8080/chat');

my $got = Promise.new;

$conn.messages.tap(-> $message {
    say 'Received: ', await $message.body-text;
    $got.keep;
});

say 'Sending:  Hello, chat!';
$conn.send('Hello, chat!');

await $got;
await $conn.close;
```

`.send` stuurt het bericht weg en keert meteen terug; het antwoord komt later, op een andere thread, in het `.tap`-blok binnen. De hoofdlijn moet daarom wachten voordat ze sluit — en in plaats van te slapen en te hopen, wacht ze een `Promise` af die de tap vervult op het moment dat het antwoord binnenkomt: de concurrencygereedschappen van eerder in dit deel, die precies doen waarvoor ze gemaakt zijn.

Draai de server in de ene terminal en deze client in een andere. De client drukt beide richtingen van het gesprek af:

```
Sending:  Hello, chat!
Received: HELLO, CHAT!
```

Wat er in kleine letters uitging, kwam in hoofdletters terug — het bericht reisde *naar* de server, werd daar omgevormd, en reisde over dezelfde verbinding *terug*. Dat is het tweewegkanaal in actie. Start de client in meerdere terminals tegelijk en elk bericht verschijnt in allemaal: een werkende chat in minder dan dertig regels Raku.

> Deze voorbeelden hebben Cro geïnstalleerd nodig (`zef install cro`).

Dit is een passende plek om de cursus te beëindigen. Een service, de client die haar aanroept, en een levend tweewegkanaal ertussen staan op alles wat eraan voorafging — objecten en excepties, regexes en grammatica's, en de functionele, concurrente en reactieve gereedschappen van dit deel — en toch blijft de code kort en zegt ze precies wat je bedoelt. Van [bytes op een socket](/nl/paradigms/connections/sending-receiving) tot een chatruimte in een schermvol code: dat is Raku.

{% include nav.html %}
