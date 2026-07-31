---
title: Avida kaj ŝparema kongruigo
translations_gpt:
---

{% include menu.html %}

Defaŭlte, kvantoro estas _avida_: ĝi kongruas kun tiom, kiom ĝi eble povas, dum ĝi ankoraŭ lasas la reston de la ŝablono sukcesi. Konsideru kongruigon de la unua `<` ĝis `>`:

```raku
say '<a><b>' ~~ / '<' .+ '>' /; # ｢<a><b>｣
```

La `.+` englutis tiom, kiom ĝi povis, ĝis la **lasta** `>`, do la kongruo etendiĝas trans ambaŭ parojn de krampoj.

Por fari kvantoron _ŝparema_ (ankaŭ nomata _maldiligenta_ aŭ _neavida_), aldonu `?` post ĝi. Ŝparema kvantoro kongruas kun kiel eble plej **malmulte**:

```raku
say '<a><b>' ~~ / '<' .+? '>' /; # ｢<a>｣
```

Nun `.+?` haltas ĉe la **unua** `>`, do nur la unua enkrampa peco kongruas.

La sufikso `?` funkcias sur ĉiu kvantoro: `*?` kaj `**?` ankaŭ estas ŝparemaj. Avidaj kaj ŝparemaj versioj kongruas kun la samaj specoj de teksto — ili diferencas nur en tio, kiom ili prenas, kiam estas elekto.

{% include nav.html %}
