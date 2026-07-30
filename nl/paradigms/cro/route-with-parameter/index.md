---
title: Een route met een parameter
translations_gpt:
---

{% include menu.html %}

De route op de vorige pagina gaf altijd dezelfde tekst terug. Echte services variëren hun antwoord met wat de client vraagt, en de eenvoudigste manier is een deel van de **URL** als parameter lezen. In een Cro-route wordt een segment achter het vaste pad een variabele in de signatuur:

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

Het interessante deel is de signatuur `-> 'hello', $name`: die matcht een pad van twee segmenten — het letterlijke `hello`, dan wat dan ook, gecapturd in `$name`. De rest van het programma is dezelfde serversteiger als op de vorige pagina. Een verzoek om `/hello/Anna` bindt `$name` aan `Anna` en geeft `Hello, Anna!` terug; `/hello/Bob` geeft `Hello, Bob!` terug. Eén route, een ander antwoord voor elke naam:

```console
$ curl http://127.0.0.1:8080/hello/Anna
Hello, Anna!
```

> Dit voorbeeld heeft Cro geïnstalleerd nodig (`zef install cro`).

Parameters zijn hoe een route klein blijft terwijl hij een hele familie paden afhandelt. Een route kan meerdere segmenten aannemen, alleen bepaalde vormen matchen, querystrings lezen en JSON teruggeven — maar het bouwt allemaal op dit ene idee: benoem de variërende delen van de URL in de signatuur en gebruik ze in het antwoord.

Paden die met geen enkele route matchen zijn jouw probleem niet: Cro beantwoordt ze uit zichzelf met `404 Not Found`. En wanneer een route wél *matcht* maar niet kan leveren — de naam levert bijvoorbeeld niets op — roep je binnen de afhandelaar `not-found` aan om diezelfde 404 bewust te versturen. De **methode** wordt net zo strikt gecontroleerd als het pad: dit blok verklaart alleen `get`, dus een `HEAD`- of `POST`-verzoek naar hetzelfde pad wordt met `405 Method Not Allowed` beantwoord. Je kunt het zelf zien met `curl -I`, dat `HEAD` in plaats van `GET` verstuurt.

Een service is echter maar de halve foto — er moet iets zijn dat haar aanroept. De volgende pagina draait Cro om en gebruikt zijn **client** om met een server als degene die je net gebouwd hebt te praten.

{% include nav.html %}
