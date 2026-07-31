---
title: Iterviloj
translations_gpt:
---

{% include menu.html %}

La antaŭa sekcio konstruis sekvencojn per `gather` kaj `take`. Ĉi tiu iras unu nivelon malsupren, al la mekanismo, kiu efektive liveras la valorojn: la _itervilo_.

Itervilo estas la malgranda objekto malantaŭ ĉiu listo, intervalo kaj maldiligenta sekvenco en Raku. Ĝi scias fari unu solan aferon — produkti la **sekvan** valoron — kaj nenion pli. Kiam ajn vi skribas buklon `for` aŭ vokas `map`, Raku senbrue petas de itervilo unu valoron post la alia ĝis restas neniu. Ĉi tiu sekcio montras tiun protokolon rekte: kiel tiri valorojn el itervilo mane, kaj kiel verki vian propran itervilon.

{% include nav.html %}
