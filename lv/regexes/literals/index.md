---
title: Literāļi un rakstzīmju klases
translations_gpt:
---

{% include menu.html %}

_Regulārā izteiksme_ (saīsināti _regex_) ir raksturs, kas apraksta kādu teksta gabalu. Ar regulāro izteiksmi varat uzdot tādus jautājumus kā «vai šī virkne satur skaitli?» vai «vai šis vārds sākas ar lielo burtu?», kā arī izvilkt no virknes gabalus vai tos mainīt.

Raku ir īpaši jaudīgas un labi lasāmas regulārās izteiksmes, un tās ir iebūvētas pašā valodā. Vienkāršākais veids, kā tādu uzrakstīt, ir starp divām slīpsvītrām:

```raku
/cat/
```

Šis raksturs piemeklē trīs burtus `c`, `a`, `t` pēc kārtas. Lai pārbaudītu virkni pret raksturu, izmantojiet gudrās sakritības operatoru `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Kad raksturs ir atrasts, Raku ziņo to virknes daļu, kas sakrita, parādot to stūra iekavās `｢ ｣`. Šo rezultātu tuvāk aplūkosiet nākamajā sadaļā.

Šajā pirmajā sadaļā uzzināsiet, kā piemeklēt precīzu (_burtisku_) tekstu un kā piemeklēt rakstzīmi, kas var būt viena no vairākām, — _rakstzīmju klasi_. Nākamās sadaļas tad pievieno [kvantorus](/lv/regexes/quantifiers), [tvērumus](/lv/regexes/captures) un visu pārējo, kas padara regulārās izteiksmes tik noderīgas.

{% include nav.html %}
