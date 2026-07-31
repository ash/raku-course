---
title: Via Cro
translations_gpt:
---

{% include menu.html %}

Servitium HTTP Cro copia _viarum_ describitur: unaquaeque via dicit quam URL tractet et quid reddat. Eas intra blocum `route` per clavem `get` aedificas:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello' {
        content 'text/plain', 'Hello from Cro!';
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Listening on http://127.0.0.1:8080/hello — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

Lege viam ut «petitio `GET` pro semita `hello` textum `Hello from Cro!` reddit». Functio `content` et genus contentorum et corpus ponit — nullae lineae status manuales nec `\r\n` in conspectu. `Cro::HTTP::Server` vias ad inscriptionem et portum ligat, et `.start` servire incipit.

Una subtilitas: `.start` **non** moratur — servitium in filis fundi incipit et statim redit, et si programma ibi simpliciter finiret, servitor cum eo evanesceret. Blocus `react` claudens est id quod programma vivum servat, et amicus vetus est: `whenever signal(SIGINT)` signo interruptionis (Ctrl-C in claviatura) respondet servitorem sistendo et `done` vocando. Instrumenta reactiva ex parte superiore sunt exacte quomodo programma Cro exspectet, serviat, et munde claudat.

> Hoc exemplum Cro installato eget (`zef install cro`). Curre illud, aperi `http://127.0.0.1:8080/hello`, et siste servitorem per Ctrl-C cum finivisti.

> Noli sollicitari si servitor interdum `Cannot write to a closed socket` imprimit dum navigas. Hoc non est mendum in codice tuo: cliens — plerumque navigatrum — coniunctionem aperuit eamque ante responsum legendum dimisit, ut navigatra pro petitionibus speculativis vel revocatis solent. Cro clientem evanidum notat, et servitor servire pergit.

Via segmenta URL ut parametros accipere potest, JSON reddere, et multo plura, sed forma semper haec est: declara quid unaquaeque semita agat, trade vias servitori, et illum incipe. Comparatus cum servitore foraminis nudi sectionis prioris, Cro omnem rationem protocolli tollit et sinit te solam partem scribere quae servitio tuo propria est.

Haec via tamen semper idem dicit. Pagina sequens sinit viam **parametrum** ex URL legere, ita ut una via `/hello/Anna` et `/hello/Bob` diverse salutet.

{% include nav.html %}
