---
title: Sendi kaj ricevi
translations_gpt:
---

{% include menu.html %}

Post kiam kontaktskatolo estas malfermita, vi interŝanĝas datumojn tra ĝi. Sendu tekston per `.print` kaj legu tion, kio revenas, per `.recv`:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));

$conn.print("GET / HTTP/1.0\r\nHost: raku.org\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

Ĉi tio sendas minimuman HTTP-peton kaj legas la respondon de la servilo en `$response`. La unua linio de respondo de retservilo estas ĝia statusa linio.

> Ĉi tiu ekzemplo bezonas funkciantan retan konekton. Plenumite, ĝi presas la statusan linion de la respondo. Ĉar `raku.org` alidirektas simplan HTTP al la sekura HTTPS-retejo, tiu linio estas alidirekto, kiel `HTTP/1.1 308 Permanent Redirect`, prefere ol `200 OK`. La speciala domajno `example.com` ne alidirektas, do celi la saman peton tien presas simplan `HTTP/1.1 200 OK` anstataŭe.

Du detaloj gravas, kiam vi parolas kun serviloj. Unue, retaj protokoloj kutime apartigas liniojn per `\r\n` (ĉaretreveno plus novlinio), ne per simpla `\n`, kaj tial la peto estas skribita per `\r\n`. Due, `.recv` redonas kiujn ajn datumojn alvenis ĝis nun; por pli grandaj respondoj vi legas en buklo, ĝis la konekto fermiĝas.

Sendi bajtojn kaj ricevi bajtojn estas ĉio, kion kontaktskatolo vere faras. Ĉio alia — HTTP kaj la pli altnivelaj iloj en la venontaj sekcioj — estas konstruita sur ĉi tiu simpla sendo-kaj-ricevo.

{% include nav.html %}
