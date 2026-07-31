---
title: Maršruts ar parametru
translations_gpt:
---

{% include menu.html %}

Iepriekšējās lappuses maršruts vienmēr atgrieza vienu un to pašu tekstu. Īsti pakalpojumi savu atbildi maina atkarībā no tā, ko klients prasa, un vienkāršākais veids ir nolasīt **URL** daļu kā parametru. Cro maršrutā segments aiz nemainīgā ceļa kļūst par mainīgo parakstā:

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

Interesantākā daļa ir paraksts `-> 'hello', $name`: tas atbilst divu segmentu ceļam — burtiskajam `hello` un tad jebkam, kas tiek satverts `$name`. Pārējā programma ir tāda pati servera sastatne kā iepriekšējā lappusē. Pieprasījums uz `/hello/Anna` piesaista `$name` vērtībai `Anna` un atgriež `Hello, Anna!`; `/hello/Bob` atgriež `Hello, Bob!`. Viens maršruts, atšķirīga atbilde katram vārdam:

```console
$ curl http://127.0.0.1:8080/hello/Anna
Hello, Anna!
```

> Šim piemēram vajadzīgs uzstādīts Cro (`zef install cro`).

Parametri ir tas, kas maršrutam ļauj palikt mazam, apstrādājot veselu ceļu saimi. Maršruts var ņemt vairākus segmentus, atbilst tikai noteiktām formām, nolasīt vaicājuma virknes un atgriezt JSON — bet tas viss balstās uz šo vienu domu: nosauciet URL mainīgās daļas parakstā un izmantojiet tās atbildē.

Ceļi, kas neatbilst nevienam maršrutam, nav jūsu rūpes: Cro tiem pats atbild ar `404 Not Found`. Un, kad maršruts *atbilst*, bet nespēj piegādāt — teiksim, vārds neko neatrod —, izsauciet apstrādātājā `not-found`, lai to pašu 404 nosūtītu apzināti. **Metode** tiek pārbaudīta tikpat stingri kā ceļš: šis bloks deklarē tikai `get`, tāpēc `HEAD` vai `POST` pieprasījums tam pašam ceļam saņem `405 Method Not Allowed`. To var redzēt pašam ar `curl -I`, kas sūta `HEAD`, nevis `GET`.

Pakalpojums tomēr ir tikai puse ainas — kādam tas ir jāizsauc. Nākamā lappuse apgriež Cro otrādi un izmanto tā **klientu**, lai sarunātos ar tādu serveri, kādus tikko uzbūvējāt.

{% include nav.html %}
