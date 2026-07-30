---
title: Ontleden met parse
translations_gpt:
---

{% include menu.html %}

Om een grammatica te draaien, roep je haar methode `.parse` aan met de te analyseren string:

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

`.parse` geeft een matchobject terug wanneer de grammatica de **hele** string matcht, en `Nil` wanneer dat niet zo is. Omdat de hele invoer moet matchen, zijn de ankers `^` en `$` niet nodig — `.parse` voegt die eis voor je toe:

```raku
say Pair.parse('x=5').defined; # True
say Pair.parse('x=').defined;  # False
```

Het [matchobject](/nl/regexes/matching/match-object) werkt precies als degene die je eerder tegenkwam. Elk token dat in de grammatica gebruikt wordt, wordt een benoemde capture, dus `$m<key>` en `$m<value>` geven de gematchte delen. De tokens nestelen, dus een grammatica bouwt een kleine boom van matches — het onderwerp van een latere sectie.

{% include nav.html %}
