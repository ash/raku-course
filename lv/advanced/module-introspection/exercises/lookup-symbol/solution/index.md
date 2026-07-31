---
title: 'Risinājums: Atrast simbolu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējamais uzdevuma risinājums.

## Kods

Programma, `lookup.raku`:

```raku
use Circle;

say Circle::{'$pi'};
```

🦋 Abus avota failus varat atrast direktorijā [exercises/advanced/module-introspection/lookup-symbol](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/lookup-symbol).

## Izvade

```console
$ raku -I. lookup.raku
3.14
```

## Komentāri

1. `Circle::` ir moduļa stash, un, izmantojot nosaukumu kā atslēgu — `Circle::{'$pi'}` — tiek iegūta tajā saglabātā vērtība. Atslēgā jāiekļauj sigils, tāpat kā uzskaitītajos nosaukumos.

1. Tas sasniedz to pašu vērtību kā kvalificētais `$Circle::pi`, bet, tā kā nosaukums ir parasts teksts, to var aprēķināt izpildes laikā, nevis ierakstīt pirmkodā.

{% include nav.html %}
