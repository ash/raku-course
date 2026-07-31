---
title: Analysis per parse
translations_gpt:
---

{% include menu.html %}

Ut grammaticam curras, methodum eius `.parse` cum catena analysanda voca:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

`.parse` obiectum congruentiae reddit cum grammatica **totam** catenam congruit, et `Nil` cum non congruit. Quia totus introitus congruere debet, ancoris `^` et `$` non eges — `.parse` illam postulationem pro te addit:

```raku
say Pair.parse('x=5').defined; # True
say Pair.parse('x=').defined;  # False
```

[Obiectum congruentiae](/la/regexes/matching/match-object) exacte sicut ea quae prius invenisti operatur. Unaquaeque tessera in grammatica adhibita captura nominata fit, itaque `$m<key>` et `$m<value>` partes congruentes dant. Tesserae nidificant, itaque grammatica parvam arborem congruentiarum aedificat — argumentum sectionis posterioris.

{% include nav.html %}
