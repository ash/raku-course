---
title: regex, token un rule
translations_gpt:
---

{% include menu.html %}

Trīs atslēgvārdi būvējas cits uz cita:

* `regex` — atkāpjas, tāpat kā raksturi `/ … /` iekšienē
* `token` — **neatkāpjas**
* `rule` — tāpat kā `token`, taču atstarpes raksturā ir nozīmīgas

_Atkāpšanās_ nozīmē, ka tad, kad kāda vēlāka raksturā daļa neizdodas, dzinējs iet atpakaļ un agrākai daļai izmēģina īsāku sakritību. `regex` tā dara:

```raku
my regex r { \w+ 'b' }
say so 'aaab' ~~ / <r> /; # True
```

`\w+` vispirms sagrābj visu `aaab`, un tad tam jāatdod pēdējais `b`, lai burtiskais `b` varētu sakrist. `token` atsakās kaut ko atdot:

```raku
my token t { \w+ 'b' }
say so 'aaab' ~~ / <t> /; # False
```

Šeit `\w+` paņem visu `aaab`, burtiskais `b` neatrod nekā palikuša, un marķieris vienkārši neizdodas, nevis atkāpjas.

Tas izklausās pēc ierobežojuma, taču gramatikām tas ir tieši tas, ko vēlaties: katram marķierim jāsakrīt ar vienu tīru lietu un jāpaliek pie tās. Tas padara parsēšanu ātrāku un rezultātu paredzamu. **Pēc noklusējuma izmantojiet `token`**; pie `regex` ķerieties tikai tajos retajos gadījumos, kad atkāpšanās patiešām vajadzīga.

{% include nav.html %}
