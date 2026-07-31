---
title: whenever kaj when
translations_gpt:
---

{% include menu.html %}

La formo de bloko `react` povas aspekti konata. Ekstera bloko tenanta plurajn internajn blokojn, ĉiu agante sur la temo `$_`, estas ĝuste tiel, kiel [`given`/`when`](/eo/advanced/given-when) estas skribata. Se vi havus unu solan temperaturan legaĵon anstataŭ tutan fluon da ili, vi branĉus sur ĝi jene:

```raku
given $temperature {
    when 18 { say 'cool' }
    when 21 { say 'warm' }
}
```

La simileco al `react`/`whenever` estas reala, sed la du faras tre malsamajn laborojn:

* **`given`/`when` traktas unu valoron, ĝuste nun.** `given` fiksas `$_` al unu sola valoro; ĉiu `when` testas ĝin (`$_ ~~ 18`), la **unua** kongruo plenumiĝas, kaj la bloko finiĝas. Ĝi estas ordinara, sinkrona kondiĉo.
* **`react`/`whenever` traktas multajn valorojn, en la tempo.** `whenever` ne testas `$_` kontraŭ ŝablono — ĝi *abonas* al supply, kaj ĝia korpo plenumiĝas por **ĉiu** valoro, kiun tiu supply eligas, kiam ajn tiu valoro alvenas. Ĉiuj `whenever` estas vivaj samtempe, kaj `react` daŭre blokas, ĝis ĉiu el iliaj supply estas finita.

Do `when` demandas «ĉu ĉi tiu unu valoro kongruas?», dum `whenever` diras «por ĉiu valoro, kiun ĉi tiu fluo iam produktas, faru ĉi tion». Sama skeleto, tre malsamaj vivoj: branĉo prenata unu solan fojon, kontraŭ reago, kiu plenumiĝas denove kaj denove laŭ la alveno de eventoj.

{% include nav.html %}
