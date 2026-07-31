---
title: Modulo clientis uti
translations_gpt:
---

{% include menu.html %}

Cro non solum ad servitia aedificanda est — **clientem** HTTP quoque ad petitiones faciendas fert. Modus clarissimus eum cognoscendi est illum ad ipsum servitorem quem in pagina priore aedificasti dirigere. Hic utraque pars in uno programmate currit: servitium incipimus, deinde illud ipsi vocamus.

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;
use Cro::HTTP::Client;

# servitium exiguum paginae prioris
my $application = route {
    get -> 'hello' { content 'text/plain', 'Hello from Cro!'; }
}
my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'), :port(8080), :application($application),
);
$server.start;

# nunc cliens esto et illud voca
my $response = await Cro::HTTP::Client.get('http://127.0.0.1:8080/hello');
say await $response.body-text; # Hello from Cro!

$server.stop;
```

`Cro::HTTP::Client.get` promissum reddit — apte, quoniam petitio retialis postea finit — itaque illud `await`. Obiectum responsi statum, capita et corpus suum novit; `await $response.body-text` textum quem servitor misit reddit, `Hello from Cro!`. Compara hoc cum foramine nudo [sectionis coniunctionum](/la/paradigms/connections/sending-receiving): nullum `\r\n`, nulla linea status resolvenda, nulla lectio in anulo — cliens et servitor inter se paucis lineis simplicibus loquuntur.

> Hoc exemplum Cro installato eget (`zef install cro`).

## Cum pagina ibi non est

Quid si semitam poscis quam servitium non habet? Pars servitoris facilis est: petitio quae nulli viae congruit `404 Not Found` a Cro automatice accipit. In parte clientis, petitio quae deficit **iacit** — error cum promisso iter facit et ad `await` emergit, prorsus ut cum [promissis fractis](/la/paradigms/await/awaiting-promises) vidisti — itaque illum instrumentis exceptionum usitatis tractas:

```raku
my $response = try await Cro::HTTP::Client.get('http://127.0.0.1:8080/goodbye');
if $! {
    say 'Request failed with status ', $!.response.status; # 404
}
else {
    say await $response.body-text;
}
```

Servitium nostrum viam `hello` habet sed nullum `goodbye`, itaque hoc `Request failed with status 404` imprimit. Exceptio responsum plenum in `.response` suo fert, cum codice status et capitibus ibi ad inspiciendum.

Servitium tamen tuum proprium mere servitor proximus est. Pagina sequens eundem clientem ad rete latius dirigit — ad **APIs publica** quae per JSON vel textum terminali paratum respondent.

{% include nav.html %}
