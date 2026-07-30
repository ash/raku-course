---
title: 'Oplossing: Rijg een promise aaneen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $p = start { 'raku' };
my $q = $p.then({ .result.uc });
my $r = $q.then({ .result ~ '!' });
say await $r;
```

🦋 Je kunt de broncode vinden in het bestand [promise-result.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/promise-result.raku).

## Uitvoer

```
RAKU!
```

## Opmerkingen

1. Elke `.then` bouwt een nieuwe promise die draait zodra de vorige klaar is. Binnen haar blok is `.result` de waarde die de vorige promise opleverde.

1. Het eerste vervolg zet `'raku'` in hoofdletters tot `'RAKU'`; het tweede voegt `'!'` toe. De laatste promise, `$r`, afwachten loopt de hele keten door en levert `'RAKU!'` op — een kleine pijplijn waarin elke stap het resultaat van de vorige omvormt.

{% include nav.html %}
