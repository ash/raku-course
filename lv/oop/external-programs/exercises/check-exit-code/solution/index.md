---
title: 'Risinājums: Pārbaudiet izejas kodu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $proc = run 'sh', '-c', 'exit 4';

say $proc.exitcode;
say $proc ?? 'success' !! 'failure';
```

🦋 Atrodiet programmu failā [check-exit-code.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/check-exit-code.raku).

## Izvade

```
4
failure
```

## Komentāri

1. `run` atgriež `Proc`. Tā saglabāšana `$proc` — un pēc tam nolasīšana — šeit ir svarīga: neveiksmīga komanda, kuras `Proc` tiek izmests, izmestu izņēmumu, taču rezultāta izpēte skaitās tā apstrādāšana.

1. `.exitcode` ir skaitlis, ko komanda atgrieza: `4`. Pārbaudot `Proc` kā Būla vērtību, tiek atbildēts vienkāršākais jautājums — tas ir patiess tikai tad, kad izejas kods ir `0`, tāpēc šeit tas ir aplams un programma izdrukā `failure`.

{% include nav.html %}
