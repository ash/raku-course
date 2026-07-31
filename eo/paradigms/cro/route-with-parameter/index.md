---
title: Vojo kun parametro
translations_gpt:
---

{% include menu.html %}

La vojo sur la antaŭa paĝo ĉiam redonis la saman tekston. Veraj servoj variigas sian respondon laŭ tio, kion la kliento petas, kaj la plej simpla maniero estas legi parton de la **URL** kiel parametron. En Cro-vojo, segmento post la fiksita vojo fariĝas variablo en la signaturo:

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

La interesa parto estas la signaturo `-> 'hello', $name`: ĝi kongruas kun vojo el du segmentoj — la laŭvorta `hello`, poste io ajn, kaptita en `$name`. La cetero de la programo estas la sama servila skafaldo kiel sur la antaŭa paĝo. Peto pri `/hello/Anna` ligas `$name` al `Anna` kaj redonas `Hello, Anna!`; `/hello/Bob` redonas `Hello, Bob!`. Unu vojo, malsama respondo por ĉiu nomo:

```console
$ curl http://127.0.0.1:8080/hello/Anna
Hello, Anna!
```

> Ĉi tiu ekzemplo bezonas Cro instalitan (`zef install cro`).

Parametroj estas la maniero, laŭ kiu vojo restas malgranda dum ĝi traktas tutan familion da vojoj. Vojo povas preni plurajn segmentojn, kongrui nur kun certaj formoj, legi informpetajn ĉenojn kaj redoni JSON — sed ĉio konstruas sur ĉi tiu unu ideo: nomu la variajn partojn de la URL en la signaturo kaj uzu ilin en la respondo.

Vojoj, kiuj kongruas kun neniu vojo, ne estas via problemo: Cro respondas al ili per `404 Not Found` per si mem. Kaj kiam vojo *kongruas*, sed ne povas liveri — la nomo trovas nenion, ekzemple — voku `not-found` ene de la traktero por sendi tiun saman 404 intence. La **metodo** estas kontrolata same strikte kiel la vojo: ĉi tiu bloko deklaras nur `get`, do peto `HEAD` aŭ `POST` al la sama vojo estas respondata per `405 Method Not Allowed`. Vi povas vidi tion mem per `curl -I`, kiu sendas `HEAD` prefere ol `GET`.

Servo tamen estas nur duono de la bildo — io devas voki ĝin. La sekva paĝo turnas Cro kaj uzas ĝian **klienton** por paroli kun servilo kiel tiuj, kiujn vi ĵus konstruis.

{% include nav.html %}
