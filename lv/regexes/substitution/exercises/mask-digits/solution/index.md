---
title: 'Risinājums: Nomaskējiet ciparus'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $orig = 'PIN 1234';
say S:g/\d/#/ given $orig;
say $orig;
```

🦋 Atrodiet programmu failā [mask-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/mask-digits.raku).

## Izvade

```
PIN ####
PIN 1234
```

## Komentāri

1. Lielo burtu `S///` dara to pašu darbu, ko `s///`, taču **atgriež jaunu virkni**, nevis maina mainīgo uz vietas. Ar `:g` tas atgrieztajā kopijā aizstāj katru ciparu `\d` ar `#`. Tas tiek piemērots `$orig` ar `given`, kas uzstāda virkni par tēmu.

1. Pēc tam izdrukājot `$orig`, redzams, ka tas joprojām satur `PIN 1234` — atšķirībā no `s///` oriģināls palika neskarts.

{% include nav.html %}
