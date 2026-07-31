---
title: Metožu izsaukumu pāradresēšana
---

{% include menu.html %}

Būt skalāram konteineram faktiski nozīmē būt `Scalar` tipa objektam. Vairumā gadījumu skalāru lietošana ir tik caurspīdīga, ka izstrādātājam nav jādomā par konteineru un var iedomāties, ka strādā tieši ar tajā glabāto vērtību.

Tas darbojas tāpēc, ka skalārais konteineris pārsūta metožu izsaukumus tajā glabātajai vērtībai. Piemēram, pēc piešķiršanas `my $lang = 'Raku'` mainīgajam var izsaukt metodi `.chars`:

```raku
my $lang = 'Raku';
say $lang.chars; # 4
```

Programma izdrukā `4`, kas ir rakstzīmju skaits virknē `'Raku'`. Rezultāts ir tieši tāds pats, kā ja izsauktu `.chars` tieši uz virknes vērtības, nevis uz konteinera mainīgā:

```raku
say 'Raku'.chars; # 4
```

Citiem vārdiem, konteineris klusi pārsūta `.chars` izsaukumu virknei, ko tas glabā, un atgriež jums rezultātu.

{% include nav.html %}
