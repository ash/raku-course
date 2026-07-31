---
title: Ĉenoj
translations_gpt:
---

{% include menu.html %}

En la parto Esencoj vi lernis, [kiel konstrui ĉenojn](/eo/essentials/strings) — kunmeto, interpolado kaj la longeco de ĉeno. Ĉenoj ankaŭ portas riĉan aron da metodoj. Ĉi tiu sekcio kolektas la plej utilajn. (Serĉado per [regulesprimoj](/eo/regexes) estas aparta, pli granda temo, traktita en propra parto poste.)

Tri metodoj ŝanĝas la literusklecon de ĉeno:

```raku
say 'raku'.uc; # RAKU  — majuskloj
say 'RAKU'.lc; # raku  — minuskloj
say 'raku'.tc; # Raku  — titolusklo (unua litero majuskligita)
```

La metodo `flip` inversigas la signojn de ĉeno:

```raku
say 'Raku'.flip; # ukaR
```

Kaj la operatoro `x` ripetas ĉenon donitan nombron da fojoj:

```raku
say 'ab' x 3; # ababab
```

La sekvaj temoj montras, kiel serĉi ene de ĉenoj kaj kiel disigi ilin en partojn kaj kunigi ilin denove.

{% include nav.html %}
