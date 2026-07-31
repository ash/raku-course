---
title: Tvērumi aizvietojumā
translations_gpt:
---

{% include menu.html %}

`s///` aizstājuma daļa var atsaukties uz tvērumiem, ko izdarījis raksturs. Tas ļauj sakritušo tekstu pārkārtot, nevis vienkārši izmest.

Piemēram, pārvērtiet datumu, kas uzrakstīts kā `gads-mēnesis`, par `mēnesis/gads`, satverot abus skaitļus un ieliekot tos atpakaļ citā secībā:

```raku
my $d = '2025-06';
$d ~~ s/ (\d+) '-' (\d+) /$1\/$0/;
say $d; # 06/2025
```

Raksturs satver gadu `$0` un mēnesi `$1`. Aizstājumā `$1` un `$0` ir uzrakstīti apgrieztā secībā ar slīpsvītru starp tiem. (Slīpsvītra ir atsvītrota kā `\/`, lai to nesajauktu ar aizstāšanas beigām.) Ievērojiet, ka atstarpes ir nenozīmīgas **raksturā** pusē, bet burtiskas **aizstājuma** pusē, tāpēc aizstājums uzrakstīts bez atstarpēm ap to.

Nosauktie tvērumi darbojas tāpat. Tas padara aizstāšanu skaidri lasāmu pat tad, kad gabalu ir vairāki:

```raku
my $name = 'Doe, Jane';
$name ~~ s/ $<last>=(\w+) ', ' $<first>=(\w+) /$<first> $<last>/;
say $name; # Jane Doe
```

{% include nav.html %}
