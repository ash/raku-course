---
title: Een clientmodule gebruiken
translations_gpt:
---

{% include menu.html %}

Cro is niet alleen om services te bouwen — het levert ook een HTTP-**client** om verzoeken te doen. De duidelijkste manier om die te ontmoeten is hem op precies de server richten die je op de vorige pagina gebouwd hebt. Hier draaien beide helften in één programma: we starten de service en roepen haar daarna zelf aan.

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

`Cro::HTTP::Client.get` geeft een promise terug — passend, aangezien een netwerkverzoek later klaar is — dus `await` je haar. Het antwoordobject kent zijn status, headers en body; `await $response.body-text` overhandigt de tekst die de server verstuurde, `Hello from Cro!`. Vergelijk dit met de kale socket uit de [sectie over verbindingen](/nl/paradigms/connections/sending-receiving): er is geen `\r\n`, geen statusregel om te ontleden, geen lezen in een lus — de client en de server praten in een paar simpele regels met elkaar.

> Dit voorbeeld heeft Cro geïnstalleerd nodig (`zef install cro`).

## Wanneer de pagina er niet is

Wat als je om een pad vraagt dat de service niet heeft? De serverkant is eenvoudig: een verzoek dat met geen enkele route matcht, krijgt automatisch een `404 Not Found` van Cro. Aan de clientkant **werpt** een mislukt verzoek — de fout reist met de promise mee en komt bij `await` naar buiten, precies zoals je bij [verbroken promises](/nl/paradigms/await/awaiting-promises) zag — dus handel je haar met de gewone exceptiegereedschappen af:

```raku
my $response = try await Cro::HTTP::Client.get('http://127.0.0.1:8080/goodbye');
if $! {
    say 'Request failed with status ', $!.response.status; # 404
}
else {
    say await $response.body-text;
}
```

Onze service heeft een route `hello` maar geen `goodbye`, dus drukt dit `Request failed with status 404` af. De exceptie draagt het volledige antwoord mee in haar `.response`, met de statuscode en de headers klaar om te bekijken.

Je eigen service is echter alleen de dichtstbijzijnde server die er is. De volgende pagina richt dezelfde client op het bredere web — **openbare API's** die met JSON of terminalklare tekst antwoorden.

{% include nav.html %}
