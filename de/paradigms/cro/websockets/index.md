---
title: WebSockets
translations_gpt:
---

{% include menu.html %}

Ein HTTP-Gespräch ist einmalig: Der Client fragt, der Server antwortet, und die Verbindung ist erledigt. Ein **WebSocket** macht daraus einen langlebigen Zweiwegkanal — jede Seite kann jederzeit eine Nachricht senden, und genau das brauchen Chats, Spiele und lebendige Übersichten. Cro beherrscht WebSockets von Haus aus, und ein WebSocket-Bearbeiter ist aus den reaktiven Werkzeugen gebaut, die Sie schon kennen: Ein Nachrichtenstrom ist ein Supply.

Hier ist ein winziger Chatserver. Jede Nachricht, die ein Client sendet, wird vom Server großgeschrieben und an alle Verbundenen gesendet — was zurückkommt, ist also sichtbar *nicht*, was hinausging, und beweist, dass die Daten wirklich die Hin- und Rückreise gemacht haben:

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

Sehen Sie sich den `web-socket`-Block an — er ist der reaktive Teil des Kurses im Kleinen. Jeder verbundene Client bekommt ein `supply` mit zwei `whenever`: Das eine beobachtet `$incoming`, die *von* diesem Client eintreffenden Nachrichten, schreibt jede groß und schiebt sie in den gemeinsamen `$chat`-Supplier; das andere beobachtet `$chat` und `emit`-tet jeden gesendeten Text *an* den Client zurück. Ein `Supplier`, von jeder Verbindung angezapft, ist der ganze Chatraum.

Das kleine `LAST { done }` ist wichtig. Es ist der [Phaser](/de/advanced/block-phasers), der Ihnen bei Schleifen begegnet ist; in einem `whenever`-Block feuert er, wenn der beobachtete Strom **endet** — also wenn dieser Client die Verbindung trennt. Dort `done` aufzurufen schließt das ganze Verbindungs-Supply und meldet es von `$chat` ab. Ohne das bliebe das `whenever $chat` eines gegangenen Clients hängen, und die nächste Sendung versuchte, in einen geschlossenen Socket zu schreiben, und gäbe auf dem Server einen Fehler aus.

Ein Browser spricht mit ein paar Zeilen JavaScript damit, aber ein anderes Raku-Programm ebenso — Cro liefert auch die Clientseite:

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

`.send` schickt die Nachricht los und kehrt sofort zurück; die Antwort trifft später auf einem anderen Thread im `.tap`-Block ein. Die Hauptlinie muss daher warten, bevor sie schließt — und statt zu schlafen und zu hoffen, wartet sie ein `Promise` ab, das die Zapfstelle in dem Augenblick erfüllt, in dem die Antwort eintrifft: die Nebenläufigkeitswerkzeuge von früher in diesem Teil, die genau das tun, wofür sie gemacht sind.

Führen Sie den Server in einem Terminal aus und diesen Client in einem anderen. Der Client gibt beide Richtungen des Gesprächs aus:

```
Sending:  Hello, chat!
Received: HELLO, CHAT!
```

Was klein hinausging, kam groß zurück — die Nachricht reiste *zum* Server, wurde dort umgeformt und reiste über dieselbe Verbindung *zurück*. Das ist der Zweiwegkanal in Aktion. Starten Sie den Client in mehreren Terminals zugleich, und jede Nachricht erscheint in allen: ein funktionierender Chat in weniger als dreißig Zeilen Raku.

> Diese Beispiele brauchen Cro installiert (`zef install cro`).

Das ist ein passender Ort, um den Kurs zu beenden. Ein Dienst, der Client, der ihn aufruft, und ein lebendiger Zweiwegkanal dazwischen stehen auf allem, was vorausging — Objekten und Ausnahmen, Regexes und Grammatiken sowie den funktionalen, nebenläufigen und reaktiven Werkzeugen dieses Teils —, und dennoch bleibt der Code kurz und sagt genau, was Sie meinen. Von [Bytes auf einem Socket](/de/paradigms/connections/sending-receiving) zu einem Chatraum in einer Bildschirmseite Code: Das ist Raku.

{% include nav.html %}
