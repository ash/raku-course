---
title: Interpolating hashes
---

{% include menu.html %}

Ad interpolare elementa array in chordis duplici-quoted scribe ea sicut in programmate ipso: `%data<FR>`. Ad interpolare totum hash, adde par angulorum vel curvatorum vacuorum: `@data{}`. Sequens programma hanc rationem illustrat:

```raku
my %data = FR => 'Paris', IT => 'Rome';

say "%data<FR>";
say "%data<>";

# Vel:
# say "%data{}";
```

Hoc programma data postulata imprimit:

```console
$ raku t.raku
Paris
FR	Paris
IT	Rome
```

Nota quod imprimere totum hash potest generare output multi-lineare.

{% include nav.html %}