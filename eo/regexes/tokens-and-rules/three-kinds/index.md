---
title: regex, token kaj rule
translations_gpt:
---

{% include menu.html %}

La tri ŝlosilvortoj konstruas unu sur la alia:

* `regex` — retropaŝas, kiel la ŝablonoj en `/ … /`
* `token` — **ne** retropaŝas
* `rule` — kiel `token`, sed spacoj en la ŝablono estas signifaj

_Retropaŝado_ signifas, ke kiam posta parto de la ŝablono malsukcesas, la motoro reiras kaj provas pli mallongan kongruon por pli frua parto. `regex` faras tion:

```raku
my regex r { \w+ 'b' }
say so 'aaab' ~~ / <r> /; # True
```

`\w+` unue kaptas la tutan `aaab`, poste devas redoni la lastan `b`, por ke la laŭlitera `b` povu kongrui. `token` rifuzas redoni ion ajn:

```raku
my token t { \w+ 'b' }
say so 'aaab' ~~ / <t> /; # False
```

Ĉi tie `\w+` prenas la tutan `aaab`, la laŭlitera `b` trovas nenion restantan, kaj la ĵetono simple malsukcesas anstataŭ retropaŝi.

Tio sonas kiel limigo, sed por gramatikoj ĝi estas ĝuste tio, kion vi volas: ĉiu ĵetono kongruu kun unu pura aĵo kaj sin obligu al ĝi. Tio faras analizadon pli rapida kaj la rezulton antaŭvidebla. **Uzu `token` defaŭlte**; atingu `regex` nur en la maloftaj okazoj, kiam vi vere bezonas retropaŝadon.

{% include nav.html %}
