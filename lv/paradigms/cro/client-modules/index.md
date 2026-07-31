---
title: Klienta moduļa lietošana
translations_gpt:
---

{% include menu.html %}

Cro nav domāts tikai pakalpojumu būvēšanai — tam līdzi nāk arī HTTP **klients** pieprasījumu veikšanai. Skaidrākais veids, kā ar to iepazīties, ir pavērst to pret to pašu serveri, ko uzbūvējāt iepriekšējā lappusē. Šeit abas puses darbojas vienā programmā: mēs palaižam pakalpojumu un tad paši to izsaucam.

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;
use Cro::HTTP::Client;

# sīkais pakalpojums no iepriekšējās lappuses
my $application = route {
    get -> 'hello' { content 'text/plain', 'Hello from Cro!'; }
}
my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'), :port(8080), :application($application),
);
$server.start;

# tagad esam klients un izsaucam to
my $response = await Cro::HTTP::Client.get('http://127.0.0.1:8080/hello');
say await $response.body-text; # Hello from Cro!

$server.stop;
```

`Cro::HTTP::Client.get` atgriež solījumu — un tas ir loģiski, jo tīkla pieprasījums beidzas vēlāk —, tāpēc jūs to gaidāt ar `await`. Atbildes objekts zina savu statusu, galvenes un ķermeni; `await $response.body-text` atdod tekstu, ko serveris nosūtīja, `Hello from Cro!`. Salīdziniet to ar neapstrādāto ligzdu [savienojumu sadaļā](/lv/paradigms/connections/sending-receiving): nav nekādu `\r\n`, nav statusa rindas, ko parsēt, nav lasīšanas ciklā — klients un serveris savā starpā sarunājas dažās vienkāršās rindās.

> Šim piemēram vajadzīgs uzstādīts Cro (`zef install cro`).

## Kad lappuses tur nav

Kas notiek, ja prasāt ceļu, kāda pakalpojumam nav? Servera puse ir vienkārša: pieprasījums, kas neatbilst nevienam maršrutam, no Cro automātiski saņem `404 Not Found`. Klienta pusē neizdevies pieprasījums **met izņēmumu** — kļūda ceļo līdzi solījumam un izlec pie `await`, gluži kā redzējāt ar [lauztiem solījumiem](/lv/paradigms/await/awaiting-promises) —, tāpēc to apstrādā ar ierastajiem izņēmumu rīkiem:

```raku
my $response = try await Cro::HTTP::Client.get('http://127.0.0.1:8080/goodbye');
if $! {
    say 'Request failed with status ', $!.response.status; # 404
}
else {
    say await $response.body-text;
}
```

Mūsu pakalpojumam ir maršruts `hello`, bet nav `goodbye`, tāpēc tas izdrukā `Request failed with status 404`. Izņēmums savā `.response` nes pilnu atbildi ar statusa kodu un galvenēm, ko var apskatīt.

Jūsu pašu pakalpojums tomēr ir tikai tuvākais serveris, kāds vien ir. Nākamā lappuse pavērš to pašu klientu pret plašāko tīmekli — pret **publiskiem API**, kas atbild ar JSON vai terminālim gatavu tekstu.

{% include nav.html %}
