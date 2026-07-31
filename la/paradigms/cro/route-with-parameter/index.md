---
title: Via cum parametro
translations_gpt:
---

{% include menu.html %}

Via paginae prioris semper eundem textum reddebat. Servitia vera responsum suum secundum id quod cliens poscit variant, et modus simplicissimus est partem **URL** ut parametrum legere. In via Cro, segmentum post semitam fixam variabilis in signatura fit:

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

Pars interessans est signatura `-> 'hello', $name`: semitae duorum segmentorum congruit — litterali `hello`, deinde cuilibet rei, in `$name` captae. Reliquum programmatis eadem machinatio servitoris est ac in pagina priore. Petitio pro `/hello/Anna` `$name` ad `Anna` ligat et `Hello, Anna!` reddit; `/hello/Bob` `Hello, Bob!` reddit. Una via, responsum diversum pro omni nomine:

```console
$ curl http://127.0.0.1:8080/hello/Anna
Hello, Anna!
```

> Hoc exemplum Cro installato eget (`zef install cro`).

Parametri sunt quomodo via parva maneat dum totam familiam semitarum tractat. Via plura segmenta accipere potest, solis formis quibusdam congruere, catenas interrogationis legere, et JSON reddere — sed omnia super hac una idea aedificantur: nomina partes URL variantes in signatura, et eis in responso utere.

Semitae quae nulli viae congruunt tua cura non sunt: Cro eis `404 Not Found` sponte respondet. Et cum via *congruit* sed tradere non potest — nomen nihil invenit, exempli gratia — voca `not-found` intra tractatorem ut illud idem 404 consulto mittas. **Methodus** tam stricte ac semita inspicitur: hic blocus solum `get` declarat, itaque petitio `HEAD` vel `POST` ad eandem semitam per `405 Method Not Allowed` respondetur. Id ipse videre potes per `curl -I`, quod `HEAD` pro `GET` mittit.

Servitium tamen dimidia pars imaginis tantum est — aliquid illud vocare debet. Pagina sequens Cro invertit et **cliente** eius utitur ut cum servitore qualem modo aedificasti colloquatur.

{% include nav.html %}
