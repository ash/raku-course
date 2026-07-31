---
title: Savienojumu klausīšanās
translations_gpt:
---

{% include menu.html %}

Lai darbotos kā serveris, izveidojiet ligzdu **klausīšanās** režīmā ar argumentu `:listen`, norādot adresi un portu, ko klausīties:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);
```

`:localhost('127.0.0.1')` klausās jūsu paša mašīnā, un `:localport(8080)` ir ports, kuram klientiem jāpieslēdzas. Ligzda tagad gaida, bet neviens klients vēl nav atnācis.

Lai paņemtu nākamo ienākošo savienojumu, izsauciet `.accept`. Tas **bloķē**, līdz klients pieslēdzas, un tad atgriež svaigu ligzdu, kas pārstāv šo vienu sarunu:

```raku
my $conn = $listener.accept;
say 'a client connected';
```

`$listener` turpina klausīties nākamos klientus, kamēr `$conn` ir jūsu kanāls sarunai ar šo konkrēto. Īsts serveris `.accept` izsauc ciklā, apkalpojot katru klientu, kad tas ierodas.

> Šie piemēri darbojas jūsu paša mašīnā; pieslēdzieties tiem no pārlūka vai citas programmas adresē `127.0.0.1:8080`.

Tātad serveris ir vienkārši apgriezta ligzda: tā vietā, lai ar `:host`/`:port` zvanītu ārā, jūs dodat `:listen` kopā ar `:localhost`/`:localport`, lai gaidītu ienākošos zvanus.

{% include nav.html %}
