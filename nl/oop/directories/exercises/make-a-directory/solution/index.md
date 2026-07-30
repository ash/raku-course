---
title: 'Oplossing: Maak een map'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
mkdir 'reports';
spurt 'reports/data.txt', 'x';

say 'reports'.IO.d;
say 'reports/data.txt'.IO.e;
```

🦋 Je kunt de broncode vinden in het bestand [make-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/make-a-directory.raku).

## Uitvoer

```
True
True
```

## Opmerkingen

1. `mkdir` maakt de map aan, en `.IO.d` bevestigt dat `reports` een map is.

1. Omdat de map nu bestaat, kunnen we er een bestand in schrijven door een pad op te geven dat de mapnaam bevat, `reports/data.txt`. `.e` controleren op dat pad bevestigt dat het bestand in de nieuwe map aangemaakt is.

1. De volgorde doet ertoe: `spurt` maakt **geen** ontbrekende mappen voor je aan. Naar `reports/data.txt` schrijven voordat de map `reports` bestaat mislukt met een fout als `Failed to open file … : No such file or directory`. De map eerst aanmaken — zoals `mkdir` hier doet — is wat het schrijven laat slagen. Handig genoeg maakt `mkdir` ook eventuele ontbrekende tussenliggende mappen aan, dus een genest pad als `mkdir 'reports/2026'` bouwt de hele keten in één aanroep.

{% include nav.html %}
