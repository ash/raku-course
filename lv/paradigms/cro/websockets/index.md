---
title: WebSocket
translations_gpt:
---

{% include menu.html %}

HTTP saruna ir vienreizēja: klients jautā, serveris atbild, un savienojums ir beidzies. **WebSocket** to pārvērš ilgdzīvojošā, divvirzienu kanālā — jebkura puse jebkurā brīdī var nosūtīt ziņojumu, un tieši tas vajadzīgs tērzēšanai, spēlēm un dzīvajiem informācijas paneļiem. Cro atbalsta WebSocket bez papildu pūlēm, un WebSocket apstrādātājs ir uzbūvēts no reaktīvajiem rīkiem, ko jau pazīstat: ziņojumu straume ir supply.

Šeit ir sīciņš tērzēšanas serveris. Katru ziņojumu, ko sūta jebkurš klients, serveris pārvērš lielajos burtos un izraida visiem pieslēgtajiem — tāpēc atpakaļ nāk kaut kas redzami *cits*, nekā aizgāja, un tas pierāda, ka dati tiešām veikuši turp-atpakaļ ceļu:

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

Paskatieties uz `web-socket` bloku — tā ir kursa reaktīvā daļa miniatūrā. Katrs pieslēgtais klients saņem `supply` ar diviem `whenever`: viens vēro `$incoming`, ziņojumus, kas pienāk *no* šī klienta, katru pārvērš lielajos burtos un iestumj koplietotajā `$chat` piegādātājā; otrs vēro `$chat` un ar `emit` sūta katru izraidīto tekstu atpakaļ *pie* klienta. Viens `Supplier`, kam pieslēdzas katrs savienojums, ir visa tērzēšanas istaba.

Mazais `LAST { done }` ir svarīgs. Tas ir [fāzeris](/lv/advanced/block-phasers), ko satikāt pie cikliem; `whenever` blokā tas nostrādā, kad vērotā straume **beidzas** — tas ir, kad šis klients atvienojas. `done` izsaukums tur aizver visu savienojuma supply, atrakstot to no `$chat`. Bez tā aizgājuša klienta `whenever $chat` paliktu karāties, un nākamais izraidījums mēģinātu rakstīt aizvērtā ligzdā un izdrukātu kļūdu serverī.

Ar to var sarunāties pārlūks ar dažām JavaScript rindām, bet tāpat var arī cita Raku programma — Cro nodrošina arī klienta pusi:

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

`.send` ziņojumu izšauj un tūlīt atgriežas; atbilde pienāk vēlāk, citā pavedienā, `.tap` blokā. Galvenajai līnijai tāpēc pirms aizvēršanas jāgaida — un, tā vietā lai gulētu un cerētu, tā gaida `Promise`, ko pieslēgums izpilda tajā mirklī, kad atbilde nolaižas: šīs daļas agrākie konkurences rīki dara tieši to, kam radīti.

Palaidiet serveri vienā terminālī un šo klientu citā. Klients izdrukā abus sarunas virzienus:

```
Sending:  Hello, chat!
Received: HELLO, CHAT!
```

Kas aizgāja mazajos burtos, atgriezās lielajos — ziņojums aizceļoja *pie* servera, tur tika pārveidots un pa to pašu savienojumu aizceļoja *atpakaļ*. Tas ir divvirzienu kanāls darbībā. Palaidiet klientu vairākos terminālos uzreiz, un katrs ziņojums parādīsies tajos visos: strādājoša tērzēšana mazāk nekā trīsdesmit Raku rindās.

> Šiem piemēriem vajadzīgs uzstādīts Cro (`zef install cro`).

Šī ir piemērota vieta, kur kursu beigt. Pakalpojums, klients, kas to izsauc, un dzīvs divvirzienu kanāls starp tiem balstās uz visu, kas bijis pirms tam, — uz objektiem un izņēmumiem, regulārajām izteiksmēm un gramatikām un uz šīs daļas funkcionālajiem, konkurentajiem un reaktīvajiem rīkiem —, un tomēr kods paliek īss un pasaka tieši to, ko domājat. No [baitiem ligzdā](/lv/paradigms/connections/sending-receiving) līdz tērzēšanas istabai viena ekrāna kodā: tas ir Raku.

{% include nav.html %}
