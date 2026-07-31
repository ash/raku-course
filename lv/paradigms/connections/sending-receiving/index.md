---
title: Sūtīšana un saņemšana
translations_gpt:
---

{% include menu.html %}

Tiklīdz ligzda ir atvērta, caur to apmainās ar datiem. Tekstu sūtiet ar `.print` un nolasiet atnākušo ar `.recv`:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));

$conn.print("GET / HTTP/1.0\r\nHost: raku.org\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

Tas nosūta minimālu HTTP pieprasījumu un nolasa servera atbildi mainīgajā `$response`. Tīmekļa servera atbildes pirmā rinda ir tā statusa rinda.

> Šim piemēram vajadzīgs tīkla savienojums. Palaists tas izdrukā atbildes statusa rindu. Tā kā `raku.org` parasto HTTP pāradresē uz drošo HTTPS vietni, šī rinda ir pāradresācija, piemēram, `HTTP/1.1 308 Permanent Redirect`, nevis `200 OK`. Īpašais domēns `example.com` nepāradresē, tāpēc, sūtot to pašu pieprasījumu turp, izdrukājas vienkāršs `HTTP/1.1 200 OK`.

Sarunājoties ar serveriem, svarīgas ir divas detaļas. Pirmkārt, tīkla protokoli rindas parasti atdala ar `\r\n` (rakstatgriezi plus jaunrindu), nevis ar vienkāršu `\n`, un tieši tāpēc pieprasījums ir rakstīts ar `\r\n`. Otrkārt, `.recv` atgriež tos datus, kas līdz šim ir pienākuši; lielākām atbildēm jālasa ciklā, līdz savienojums aizveras.

Baitu sūtīšana un baitu saņemšana ir viss, ko ligzda patiesībā dara. Viss pārējais — HTTP un augstāka līmeņa rīki turpmākajās sadaļās — ir uzbūvēts virs šīs vienkāršās sūtīšanas un saņemšanas.

{% include nav.html %}
