---
title: Respondi al peto
translations_gpt:
---

{% include menu.html %}

Post kiam kliento konektiĝis, vi legas ĝian peton kaj sendas respondon. Por retumilo la respondo devas esti valida HTTP: statusa linio, laŭvolaj kapoj, malplena linio kaj poste la korpo.

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

my $conn = $listener.accept;
my $request = $conn.recv;

$conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, web!\n");
$conn.close;
$listener.close;
```

La respondo spegulas la petan formaton, kiun vi vidis ĉe la klienta flanko. `HTTP/1.0 200 OK` estas la statusa linio, `Content-Type: text/plain` estas kapo, la malplena linio (`\r\n\r\n`) finas la kapojn, kaj `Hello, web!` estas la korpo, kiun la retumilo montras.

Plenumu ĉi tiun programon, poste trafu ĝin el alia terminalo per `curl` (aŭ malfermu `http://127.0.0.1:8080/` en retumilo), kaj ĝi presas la korpon rekte sur la ekranon:

```console
$ curl http://127.0.0.1:8080/
Hello, web!
```

Ĉi tio traktas unu solan peton kaj poste haltas. Por servi multajn petojn, vi envolvus la paŝojn `.accept`-legi-respondi en buklon, kaj tipe traktus ĉiun konekton sur propra fadeno aŭ promeso, por ke malrapidaj klientoj ne bloku la aliajn. Sed la esenco de retservilo estas ĝuste ĉi tio: akcepti konekton, legi la peton, skribi HTTP-respondon.

La [sekva paĝo](/eo/paradigms/http-server/serving-requests) faras ĝuste tion — servilo, kiu restas viva, buklante por respondi unu peton post la alia anstataŭ halti post la unua.

{% include nav.html %}
