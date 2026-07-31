---
title: Servi multajn petojn
translations_gpt:
---

{% include menu.html %}

La servilo sur la antaŭa paĝo traktis unu solan peton kaj poste haltis. Vera servilo daŭre kuras, respondante klienton post kliento. Envolvu la paŝojn akcepti-legi-respondi en `loop` — kaj ĉar la buklo kunhavas la variablojn deklaritajn ĉirkaŭ ĝi, vi povas konservi staton inter petoj. Ĉi tie la servilo nombras siajn klientojn kaj diras al ĉiu ĝian numeron:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

my $customer = 0;

loop {
    my $conn = $listener.accept;
    $conn.recv;
    $customer++;

    # heredoc qq:to faras puran ŝablonon — la variablo interpoliĝas rekte
    my $body = qq:to/END/;
        Hello!
        You are customer number $customer.
        Thanks for visiting.
        END

    # sendu unue la kapon, poste la korpon, kiel du apartajn skribojn
    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n");
    $conn.print($body);

    $conn.close;
}
```

`.accept` **blokas**, ĝis kliento konektiĝas, poste redonas freŝan kontaktskatolon por tiu unu interparolo. Ĉar `$customer` loĝas ekster la buklo, ĝi postvivas de unu peto al la sekva: la unua vizitanto estas kliento `1`, la dua `2` kaj tiel plu. La buklo neniam finiĝas per si mem, do la servilo restas aktiva, ĝis vi haltigas ĝin per Ctrl-C.

Du detaloj indas rimarkon:

* **La respondo estas skribita en du partoj.** La unua `.print` sendas la HTTP-kapon — la statusan linion, la enhavtipon kaj la malplenan linion, kiu finas la kapojn. La dua sendas la korpon. HTTP ne zorgas, ĉu ĉi tiuj alvenas per unu skribo aŭ pluraj, do dividi ilin tenas la fiksitan protokolan ŝablonaĵon aparta de la parto, kiu efektive ŝanĝiĝas.

* **La korpo venas el ŝablono.** `qq:to/END/` estas *heredoc* — ĉeno `qq`, kiu kuras ĝis la linio `END`. Ĝi ampleksas plurajn liniojn kaj interpolas `$customer` ĝuste kiel ajna duoble citita ĉeno, kio faras ĝin bela eta ŝablonilo por konstrui respondon. (Ĝi estas unu el la [citaj konstruoj](/eo/advanced/quoting-constructs) el pli frue en la kurso.)

Konektiĝu kelkfoje por rigardi la nombrilon grimpi:

```console
$ curl http://127.0.0.1:8080/
Hello!
You are customer number 1.
Thanks for visiting.
$ curl http://127.0.0.1:8080/
Hello!
You are customer number 2.
Thanks for visiting.
```

Trakti petojn unu post la alia tiel estas la plej simpla speco de servilo. Produktada servilo ankaŭ servus ĉiun konekton sur propra fadeno aŭ promeso, por ke malrapida kliento ne povu reteni la aliajn — sed la koro de ĝi estas ĝuste ĉi tiu buklo: akcepti, legi, respondi, ripeti.

{% include nav.html %}
