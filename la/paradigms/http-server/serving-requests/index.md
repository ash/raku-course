---
title: Multis petitionibus servire
translations_gpt:
---

{% include menu.html %}

Servitor paginae prioris unam petitionem tractavit et deinde consistit. Servitor verus currere pergit, clienti post clientem respondens. Involve gradus accipe-lege-responde in `loop` — et quia anulus variabiles circa se declaratas communicat, statum inter petitiones servare potes. Hic servitor emptores suos numerat et unicuique numerum eius dicit:

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

    # heredoc qq:to exemplar mundum facit — variabilis recta interponitur
    my $body = qq:to/END/;
        Hello!
        You are customer number $customer.
        Thanks for visiting.
        END

    # mitte caput primum, deinde corpus, ut duas scripturas separatas
    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n");
    $conn.print($body);

    $conn.close;
}
```

`.accept` **moratur** donec cliens se coniungat, deinde foramen novum pro illo uno colloquio reddit. Quia `$customer` extra anulum vivit, ex una petitione in sequentem superstes est: primus visitator emptor `1` est, secundus `2`, et ita porro. Anulus numquam sponte finit, itaque servitor stat donec eum per Ctrl-C sistas.

Duo notatu digna sunt:

* **Responsum duabus partibus scribitur.** Primum `.print` caput HTTP mittit — lineam status, genus contentorum, et lineam vacuam quae capita finit. Secundum corpus mittit. HTTP non curat utrum haec una scriptura an pluribus adveniant, itaque ea dividere formulam protocolli fixam ab ea parte quae revera mutatur seiungit.

* **Corpus ex exemplari venit.** `qq:to/END/` *heredoc* est — catena `qq` quae usque ad lineam `END` currit. Per plures lineas se extendit et `$customer` prorsus ut quaelibet catena duplicibus virgulis notata interponit, quod eam instrumentum exemplaris nitidum ad responsum aedificandum facit. (Una ex [structuris citandi](/la/advanced/quoting-constructs) ex cursu superiore est.)

Coniunge te aliquotiens ut calculum ascendentem spectes:

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

Petitiones ita alteram post alteram tractare genus servitoris simplicissimum est. Servitor in productione unamquamque coniunctionem quoque in filo vel promisso proprio serviret, ne cliens tardus ceteros retineret — sed cor eius exacte hic anulus est: accipe, lege, responde, repete.

{% include nav.html %}
