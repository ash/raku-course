---
title: WebSocket
translations_gpt:
---

{% include menu.html %}

HTTP-interparolo estas unufoja: la kliento demandas, la servilo respondas, kaj la konekto estas finita. **WebSocket** plibonigas tion en longdaŭran, duflankan kanalon — ambaŭ flankoj povas sendi mesaĝon en ajna momento, kio estas tio, kion babilejoj, ludoj kaj vivaj panelaj montriloj bezonas. Cro subtenas WebSocket senpere, kaj WebSocket-traktero estas konstruita el la reaktivaj iloj, kiujn vi jam konas: mesaĝfluo estas supply.

Jen eta babileja servilo. Ĉiu mesaĝo, kiun ajna kliento sendas, estas majuskligata de la servilo kaj elsendata al ĉiuj konektitaj — do tio, kio revenas, videble *ne* estas tio, kio eliris, pruvante, ke la datumoj vere faris la vojaĝon tien kaj reen:

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

Rigardu la blokon `web-socket` — ĝi estas la reaktiva parto de la kurso en miniaturo. Ĉiu konektita kliento ricevas `supply` kun du `whenever`: unu observas `$incoming`, la mesaĝojn alvenantajn *de* tiu kliento, majuskligas ĉiun kaj puŝas ĝin en la komunan provizanton `$chat`; la alia observas `$chat` kaj `emit`-as ĉiun elsenditan tekston reen *al* la kliento. Unu sola `Supplier`, al kiu ĉiu konekto konektiĝas, estas la tuta babilejo.

La eta `LAST { done }` gravas. Ĝi estas la [fazilo](/eo/advanced/block-phasers), kiun vi renkontis ĉe bukloj; en bloko `whenever` ĝi ekfunkcias, kiam la observata fluo **finiĝas** — tio estas, kiam ĉi tiu kliento malkonektiĝas. Voki `done` tie fermas la tutan konektan supply, malabonante ĝin de `$chat`. Sen ĝi, la `whenever $chat` de foririnta kliento restadus, kaj la sekva elsendo provus skribi al fermita kontaktskatolo kaj presus eraron sur la servilo.

Retumilo parolas kun ĉi tio per kelkaj linioj da JavaScript, sed same faras alia Raku-programo — Cro provizas ankaŭ la klientan flankon:

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

`.send` forsendas la mesaĝon kaj revenas tuj; la respondo alvenas poste, sur alia fadeno, en la bloko `.tap`. La ĉefa linio devas do atendi antaŭ ol fermi — kaj anstataŭ dormi kaj esperi, ĝi atendas `Promise`, kiun la konekto plenumas en la momento, kiam la respondo alteriĝas: la samtempecaj iloj el pli frue en ĉi tiu parto, farantaj ĝuste tion, por kio ili estis kreitaj.

Plenumu la servilon en unu terminalo kaj ĉi tiun klienton en alia. La kliento presas ambaŭ direktojn de la interparolo:

```
Sending:  Hello, chat!
Received: HELLO, CHAT!
```

Kio eliris minuskle, revenis en majuskloj — la mesaĝo vojaĝis *al* la servilo, estis transformita tie kaj vojaĝis *reen* tra la sama konekto. Jen la duflanka kanalo en ago. Startigu la klienton en pluraj terminaloj samtempe, kaj ĉiu mesaĝo aperas en ĉiuj el ili: funkcianta babilejo en malpli ol tridek linioj da Raku.

> Ĉi tiuj ekzemploj bezonas Cro instalitan (`zef install cro`).

Ĉi tio estas konvena loko por fini la kurson. Servo, la kliento, kiu vokas ĝin, kaj viva duflanka kanalo inter ili staras sur ĉio, kio venis antaŭe — objektoj kaj esceptoj, regulesprimoj kaj gramatikoj, kaj la funkciaj, samtempaj kaj reaktivaj iloj de ĉi tiu parto — kaj tamen la kodo restas mallonga kaj diras ĝuste tion, kion vi celas. De [bajtoj sur kontaktskatolo](/eo/paradigms/connections/sending-receiving) ĝis babilejo en ekranpleno da kodo: jen Raku.

{% include nav.html %}
