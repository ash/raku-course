---
title: q, qq en Q
translations_gpt:
---

{% include menu.html %}

Er zijn drie basis-quotingoperatoren, die verschillen in hoeveel ze de tekst erin verwerken:

* `q` — als enkele aanhalingstekens: bijna alles is letterlijk
* `qq` — als dubbele aanhalingstekens: variabelen en escape-reeksen worden geinterpoleerd
* `Q` — de meest letterlijke van allemaal: **niets** wordt verwerkt

Elk neemt de tekst tussen een paar scheidingstekens. Het bekende `'...'` is een afkorting voor `q`, en `"..."` is een afkorting voor `qq`:

```raku
my $name = 'Anna';

say q{Hello $name};  # Hello $name
say qq{Hello $name}; # Hello Anna
```

`q` laat `$name` onaangeroerd; `qq` interpoleert het. Backslash-escapes zoals `\n` gedragen zich op dezelfde manier: alleen `qq` (en `"..."`) maakt van `\n` een echte nieuwe regel, terwijl zowel `q` als `Q` het laten staan als de twee tekens `\` en `n`:

```raku
say qq{line\nbreak}; # line<newline>break
say q{line\nbreak};  # line\nbreak
say Q{line\nbreak};  # line\nbreak
```

Waar verschillen `q` en `Q` dan? `q`, net als enkele aanhalingstekens, verwerkt nog steeds een *klein* aantal escapes — een dubbele backslash `\\` wordt er een, en je kunt het afsluitende scheidingsteken escapen — terwijl de gewone `Q`-vorm **helemaal niets** verwerkt:

```raku
say q{a\\b}; # a\b   — q klapt de ge-escapete backslash samen
say Q{a\\b}; # a\\b  — Q behoudt beide tekens
```

Je kunt elk scheidingsteken kiezen — `q{...}`, `q[...]`, `q/.../`, `q!...!` — wat handig is als de tekst zelf aanhalingstekens bevat. De drie operatoren vormen de basis; het volgende onderwerp laat zien hoe [_bijwoorden_](/nl/advanced/quoting/adverbs) je in staat stellen precies te bepalen welke functies actief zijn.

{% include nav.html %}
