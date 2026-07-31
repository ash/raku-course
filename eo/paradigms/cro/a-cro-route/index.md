---
title: Cro-vojo
translations_gpt:
---

{% include menu.html %}

Cro-servo de HTTP estas priskribita per aro da _vojoj_: ĉiu vojo diras, kiun URL ĝi traktas kaj kion redoni. Vi konstruas ilin ene de bloko `route` per la ŝlosilvorto `get`:

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

Legu la vojon kiel «peto `GET` por la vojo `hello` redonas la tekston `Hello from Cro!`». La funkcio `content` fiksas kaj la enhavtipon kaj la korpon — neniuj manaj statusaj linioj aŭ `\r\n` videblaj. `Cro::HTTP::Server` ligas la vojojn al adreso kaj pordo, kaj `.start` komencas servi.

Unu subtilaĵo: `.start` **ne** blokas — ĝi startigas la servon sur fonaj fadenoj kaj revenas tuj, kaj se la programo simple finiĝus tie, la servilo malaperus kun ĝi. La ferma bloko `react` estas tio, kio tenas la programon viva, kaj ĝi estas malnova amiko: `whenever signal(SIGINT)` reagas al la interrompa signalo (Ctrl-C sur la klavaro), haltigante la servilon kaj vokante `done`. La reaktivaj iloj el pli frue en ĉi tiu parto estas ĝuste tio, kiel Cro-programo atendas, servas kaj nete malŝaltiĝas.

> Ĉi tiu ekzemplo bezonas Cro instalitan (`zef install cro`). Plenumu ĝin, malfermu `http://127.0.0.1:8080/hello` kaj haltigu la servilon per Ctrl-C, kiam vi finis.

> Ne maltrankviliĝu, se la servilo foje presas `Cannot write to a closed socket` dum vi retumas. Tio ne estas eraro en via kodo: kliento — tipe retumilo — malfermis konekton kaj lasis ĝin antaŭ ol legi la respondon, kiel retumiloj rutine faras ĉe spekulativaj aŭ nuligitaj petoj. Cro notas la malaperintan klienton, kaj la servilo daŭre servas.

Vojo povas preni URL-segmentojn kiel parametrojn, redoni JSON kaj multe pli, sed la formo ĉiam estas ĉi tiu: deklaru, kion ĉiu vojo faras, transdonu la vojojn al servilo kaj startigu ĝin. Kompare kun la kruda kontaktskatola servilo de la antaŭa sekcio, Cro forigas la tutan protokolan librotenadon kaj lasas vin verki nur la parton, kiu estas specifa por via servo.

Ĉi tiu vojo tamen ĉiam diras la samon. La sekva paĝo lasas vojon legi **parametron** el la URL, por ke unu sola vojo povu saluti `/hello/Anna` kaj `/hello/Bob` malsame.

{% include nav.html %}
