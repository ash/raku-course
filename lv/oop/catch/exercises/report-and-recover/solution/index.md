---
title: 'Risinājums: Ziņojiet un atgūstieties'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $timeout = 30;

{
    die 'config missing';
    $timeout = 60;

    CATCH {
        default {
            say "warning: {.message}; keeping default";
        }
    }
}

say "timeout is $timeout seconds";
```

🦋 Atrodiet programmu failā [report-and-recover.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/report-and-recover.raku).

## Izvade

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Komentāri

1. Kad `die` izmet izņēmumu, atlikusī bloka daļa tiek pamesta — tāpēc rinda `$timeout = 60` nekad neizpildās un `$timeout` patur savu noklusējumu `30`.

1. `CATCH` izņēmumu apstrādā (izdrukājot brīdinājumu), tāpēc programma neapstājas. Tā turpinās ar noklusēto vērtību, un tieši to nozīmē *atkopties* no kļūdas: pamanīt problēmu, atkāpties uz kaut ko drošu un turpināt.

{% include nav.html %}
