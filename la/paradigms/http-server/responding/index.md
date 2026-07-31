---
title: Petitioni respondere
translations_gpt:
---

{% include menu.html %}

Simul atque cliens se coniunxit, petitionem eius legis et responsum mittis. Pro navigatro retiali, responsum HTTP validum esse debet: linea status, capita optionalia, linea vacua, et deinde corpus.

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

Responsum formam petitionis quam in parte clientis vidisti speculatur. `HTTP/1.0 200 OK` linea status est, `Content-Type: text/plain` caput est, linea vacua (`\r\n\r\n`) capita finit, et `Hello, web!` corpus est quod navigatrum ostendit.

Curre hoc programma, deinde illud ex alio terminali per `curl` pulsa (vel aperi `http://127.0.0.1:8080/` in navigatro), et corpus recta in scrinium imprimit:

```console
$ curl http://127.0.0.1:8080/
Hello, web!
```

Hoc unam petitionem tractat et deinde consistit. Ut multis petitionibus servias, gradus `.accept`-lege-responde in anulum involveres, et plerumque unamquamque coniunctionem in filo vel promisso proprio tractares ne clientes tardi ceteros morarentur. Sed essentia servitoris retialis exacte haec est: coniunctionem accipe, petitionem lege, responsum HTTP scribe.

[Pagina sequens](/la/paradigms/http-server/serving-requests) exacte hoc agit — servitorem qui vivus manet, in anulo unam petitionem post alteram respondens pro eo quod post primam consistit.

{% include nav.html %}
