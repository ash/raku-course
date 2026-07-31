---
title: Testu palaišana
translations_gpt:
---

{% include menu.html %}

Atsevišķs testu fails ir vienkārši Raku programma, tāpēc to var palaist tieši:

```
raku t/01-basic.rakutest
```

Tas izdrukā savu TAP izvadi ekrānā. Ja failu ir vairāk par vienu vai diviem, noder _testu palaidējs_, kas izpilda veselu testu direktoriju un apkopo rezultātus. Raku palaidējs ir `prove6`:

```
prove6 t/
```

Tas izpilda katru testu failu zem `t/` un ziņo, cik failu un testu izdevās, ar vienu kopēju izdevās/neizdevās vērtējumu beigās — daudz vieglāk lasāms nekā katra faila neapstrādāts TAP.

Kad distribūcijai ir `META6.json`, moduļu rīks tās testus izpilda jūsu vietā:

```
zef test .
```

`zef test` atrod direktoriju `t/`, izpilda kopu un ziņo rezultātu — un tieši tas notiek automātiski, pirms distribūcija tiek instalēta. Tātad testi kalpo divkārši: izstrādes laikā tos palaižat ar `prove6`, un ekosistēma tos izpilda, lai pārbaudītu distribūciju, pirms kāds to instalē.

> Testu failus nosauc ar paplašinājumu `.rakutest` (vai `.t`) un pēc vienošanās numurē, kā `t/01-basic.rakutest`.

{% include nav.html %}
