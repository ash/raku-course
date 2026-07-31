---
title: WebSocket
translations_gpt:
---

{% include menu.html %}

Colloquium HTTP unius ictus est: cliens rogat, servitor respondet, et coniunctio perfecta est. **WebSocket** illud in canalem diuturnum et bilaterem promovet — utraque pars nuntium quolibet momento mittere potest, quod est id quo colloquia, ludi et tabulae vivae egent. Cro WebSocket sine additamentis sustinet, et tractator WebSocket ex instrumentis reactivis quae iam nosti aedificatur: fluxus nuntiorum supply est.

Ecce servitor colloquii exiguus. Omnis nuntius quem quilibet cliens mittit a servitore in maiusculas vertitur et ad omnes coniunctos diffunditur — itaque id quod redit manifeste *non* est id quod exiit, probans data re vera iter utroque modo fecisse:

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

Aspice blocum `web-socket` — pars reactiva cursus in parvo est. Unusquisque cliens coniunctus `supply` cum duobus `whenever` accipit: unum `$incoming` spectat, nuntios *ab* illo cliente advenientes, unumquemque in maiusculas vertit eumque in `$chat` communem trudit; alterum `$chat` spectat et omnem textum diffusum *ad* clientem remittit per `emit`. Unus `Supplier`, ad quem omnis coniunctio se coniungit, totum conclave colloquii est.

Parvum `LAST { done }` refert. Est [phaser](/la/advanced/block-phasers) quem cum anulis invenisti; in bloco `whenever` emicat cum fluxus spectatus **finit** — id est, cum hic cliens se disiungit. `done` ibi vocare totum supply coniunctionis claudit, illud a `$chat` desubscribens. Sine eo, `whenever $chat` clientis abeuntis persisteret, et diffusio proxima ad foramen clausum scribere conaretur errorem in servitore imprimens.

Navigatrum cum hoc paucis lineis JavaScript colloquitur, sed etiam aliud programma Raku — Cro partem clientis quoque praebet:

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

`.send` nuntium emittit et statim redit; responsum postea, in alio filo, in bloco `.tap` advenit. Linea principalis igitur exspectare debet antequam claudat — et potius quam dormiat et speret, `Promise` exspectat quod coniunctio servat illo momento quo responsum advenit: instrumenta simultaneitatis ex parte superiore, exacte id agentia ad quod facta sunt.

Curre servitorem in uno terminali et hunc clientem in altero. Cliens utramque partem colloquii imprimit:

```
Sending:  Hello, chat!
Received: HELLO, CHAT!
```

Quod minusculis exiit maiusculis rediit — nuntius *ad* servitorem iter fecit, ibi transformatus est, et per eandem coniunctionem *retro* iter fecit. Ille canalis bilater in actione est. Incipe clientem in pluribus terminalibus simul et omnis nuntius in omnibus apparet: colloquium operans in minus quam triginta lineis Raku.

> Haec exempla Cro installato egent (`zef install cro`).

Hic locus aptus est quo cursus finiat. Servitium, cliens qui illud vocat, et canalis vivus bilater inter ea super omnibus quae praecesserunt stant — super obiectis et exceptionibus, super regexibus et grammaticis, et super instrumentis functionalibus, simultaneis et reactivis huius partis — et tamen codex brevis manet et exacte dicit quod significas. A [bytibus in foramine](/la/paradigms/connections/sending-receiving) ad conclave colloquii in uno scrinio codicis: hoc est Raku.

{% include nav.html %}
