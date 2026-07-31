---
title: 'Risinājums: Mainīgais ar our'
translations_gpt:
---

{% include menu.html %}

Šeit ir viens no iespējamiem uzdevuma risinājumiem.

## Kods

```raku
package Config {
    our $port = 8080;
    my  $secret = 42;
}

say $Config::port;
say $Config::secret.defined;
```

🦋 Šīs programmas pirmkodu var atrast failā [our-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/our-variable.raku).

## Izvade

```
8080
False
```

## Komentāri

1. `our $port` kļūst par `Config` vārdtelpas daļu, tāpēc tas ir sasniedzams no ārpuses kā `$Config::port`, izdrukājot `8080`.

1. `my $secret` ir leksisks — privāts pakotnes blokam —, tāpēc tas nav vārdtelpā. Ceļš `$Config::secret` neatrod neko — nedefinētu vērtību —, tāpēc `.defined` atgriež `False`. Tieši tāda ir atšķirība, ko rada `our`.

{% include nav.html %}
