---
title: Uzi klientan modulon
translations_gpt:
---

{% include menu.html %}

Cro estas ne nur por konstrui servojn — ĝi ankaŭ liveras HTTP-**klienton** por fari petojn. La plej klara maniero konatiĝi kun ĝi estas celi ĝin al la sama servilo, kiun vi konstruis sur la antaŭa paĝo. Ĉi tie ambaŭ duonoj kuras en unu programo: ni startigas la servon, poste vokas ĝin mem.

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;
use Cro::HTTP::Client;

# la eta servo de la antaŭa paĝo
my $application = route {
    get -> 'hello' { content 'text/plain', 'Hello from Cro!'; }
}
my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'), :port(8080), :application($application),
);
$server.start;

# nun estu la kliento kaj voku ĝin
my $response = await Cro::HTTP::Client.get('http://127.0.0.1:8080/hello');
say await $response.body-text; # Hello from Cro!

$server.stop;
```

`Cro::HTTP::Client.get` redonas promeson — konvene, ĉar reta peto finiĝas poste — do vi `await`-as ĝin. La responda objekto konas sian staton, kapojn kaj korpon; `await $response.body-text` redonas la tekston, kiun la servilo sendis, `Hello from Cro!`. Komparu tion kun la kruda kontaktskatolo de la [sekcio pri konektoj](/eo/paradigms/connections/sending-receiving): estas neniu `\r\n`, neniu statusa linio analizenda, neniu legado en buklo — la kliento kaj la servilo parolas unu kun la alia en kelkaj simplaj linioj.

> Ĉi tiu ekzemplo bezonas Cro instalitan (`zef install cro`).

## Kiam la paĝo ne estas tie

Kio, se vi petas vojon, kiun la servo ne havas? La servila flanko estas facila: peto, kiu kongruas kun neniu vojo, ricevas `404 Not Found` de Cro aŭtomate. Ĉe la klienta flanko, malsukcesa peto **ĵetas escepton** — la eraro vojaĝas kun la promeso kaj elsaltas ĉe `await`, ĝuste kiel vi vidis ĉe [rompitaj promesoj](/eo/paradigms/await/awaiting-promises) — do vi traktas ĝin per la kutimaj esceptaj iloj:

```raku
my $response = try await Cro::HTTP::Client.get('http://127.0.0.1:8080/goodbye');
if $! {
    say 'Request failed with status ', $!.response.status; # 404
}
else {
    say await $response.body-text;
}
```

Nia servo havas vojon `hello`, sed neniun `goodbye`, do ĉi tio presas `Request failed with status 404`. La escepto portas la plenan respondon en sia `.response`, kun la statuskodo kaj kapoj pretaj por inspekto.

Via propra servo tamen estas nur la plej proksima servilo, kiu ekzistas. La sekva paĝo celas la saman klienton al la pli vasta reto — **publikaj API-oj**, kiuj respondas per JSON aŭ per teksto preta por la terminalo.

{% include nav.html %}
