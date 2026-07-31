---
title: 'Risinājums: Pieslēdzieties resursdatoram'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $host = 'example.com';

if try IO::Socket::INET.new(:host($host), :port(80)) -> $conn {
    say "connected to $host";
    $conn.close;
}
else {
    say "could not connect to $host";
}
```

🦋 Atrodiet programmu failā [connect-to-host.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/connect-to-host.raku).

## Izvade

```
connected to example.com
```

## Komentāri

1. `IO::Socket::INET.new(:host, :port)` savienojumu atver uzreiz un met izņēmumu, ja resursdators nav sasniedzams.

1. Ietinot to `try`, šis izņēmums avārijas vietā pārvēršas par `Nil`. `if … -> $conn` piesaista ligzdu, kad savienojums izdodas, un izpilda `else` zaru, kad neizdodas — tas ir izturīgais veids, kā mēģināt pieslēgties.

1. Lai redzētu `else` zaru darbībā, nomainiet `$host` uz vārdu, kas nepastāv, piemēram, `'example.comp'`. DNS uzmeklēšana tad neizdodas — bez `try` jūs saņemtu kļūdu, piemēram, `Failed to resolve host name 'example.comp'` —, bet šeit `try` to pārvērš par `Nil`, tāpēc programma mierīgi izdrukā `could not connect to example.comp`.

{% include nav.html %}
